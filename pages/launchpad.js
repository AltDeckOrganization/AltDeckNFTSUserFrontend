/* eslint-disable @next/next/no-img-element */
//mint imports
import React, { useEffect, useState, useCallback } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { MintLayout, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { sendTransactions } from "../services/connections";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

import {
  candyMachineProgram,
  TOKEN_METADATA_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  getAtaForMint,
  getNetworkExpire,
  getNetworkToken,
  CIVIC,
} from "../services/helpers";

import { useWallet } from "@solana/wallet-adapter-react";

//SEO
import SEO from "../components/seo/SEO";

//components
import LaunchpadTable from "../components/launchpadTable";
import HomeLaunchpadSteps from "../components/homeLaunchpadSteps";

//dummydata
import { launchpadData } from "../components/data/launchpadData";
import { homeLaunchpadData } from "../components/data/homeLaunchpad";

// Connect Wallet Button
import { ConnectWallet } from "../components/connectWallet";
import { MintButton } from "../components/MintButton/MintButton";

const { SystemProgram } = web3;
const opts = {
  preflightCommitment: "processed",
};

const LaunchPad = () => {
  const [candyMachine, setCandyMachine] = useState(null);
  const [loading, setLoading] = useState(false);
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();
  const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;

  const getCandyMachineCreator = async (candyMachine) => {
    const candyMachineID = new PublicKey(candyMachine);
    return await web3.PublicKey.findProgramAddress(
      [Buffer.from("candy_machine"), candyMachineID.toBuffer()],
      candyMachineProgram
    );
  };

  const getMetadata = async (mint) => {
    return (
      await PublicKey.findProgramAddress(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];
  };

  const getMasterEdition = async (mint) => {
    return (
      await PublicKey.findProgramAddress(
        [
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          mint.toBuffer(),
          Buffer.from("edition"),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )
    )[0];
  };

  const createAssociatedTokenAccountInstruction = (
    associatedTokenAddress,
    payer,
    walletAddress,
    splTokenMintAddress
  ) => {
    const keys = [
      { pubkey: payer, isSigner: true, isWritable: true },
      { pubkey: associatedTokenAddress, isSigner: false, isWritable: true },
      { pubkey: walletAddress, isSigner: false, isWritable: false },
      { pubkey: splTokenMintAddress, isSigner: false, isWritable: false },
      {
        pubkey: web3.SystemProgram.programId,
        isSigner: false,
        isWritable: false,
      },
      { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
      {
        pubkey: web3.SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false,
      },
    ];
    return new web3.TransactionInstruction({
      keys,
      programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
      data: Buffer.from([]),
    });
  };

  const mintToken = async () => {
    const mint = web3.Keypair.generate();
    const walletAddress = window.solana;
    const userTokenAccountAddress = (
      await getAtaForMint(mint.publicKey, walletAddress.publicKey)
    )[0];

    const userPayingAccountAddress = candyMachine.state.tokenMint
      ? (
          await getAtaForMint(
            candyMachine.state.tokenMint,
            walletAddress.publicKey
          )
        )[0]
      : walletAddress.publicKey;

    const candyMachineAddress = candyMachine.id;
    const remainingAccounts = [];
    const signers = [mint];
    const cleanupInstructions = [];
    const instructions = [
      web3.SystemProgram.createAccount({
        fromPubkey: walletAddress.publicKey,
        newAccountPubkey: mint.publicKey,
        space: MintLayout.span,
        lamports:
          await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(
            MintLayout.span
          ),
        programId: TOKEN_PROGRAM_ID,
      }),
      Token.createInitMintInstruction(
        TOKEN_PROGRAM_ID,
        mint.publicKey,
        0,
        walletAddress.publicKey,
        walletAddress.publicKey
      ),
      createAssociatedTokenAccountInstruction(
        userTokenAccountAddress,
        walletAddress.publicKey,
        walletAddress.publicKey,
        mint.publicKey
      ),
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        mint.publicKey,
        userTokenAccountAddress,
        walletAddress.publicKey,
        [],
        1
      ),
    ];

    if (candyMachine.state.gatekeeper) {
      remainingAccounts.push({
        pubkey: (
          await getNetworkToken(
            walletAddress.publicKey,
            candyMachine.state.gatekeeper.gatekeeperNetwork
          )
        )[0],
        isWritable: true,
        isSigner: false,
      });
      if (candyMachine.state.gatekeeper.expireOnUse) {
        remainingAccounts.push({
          pubkey: CIVIC,
          isWritable: false,
          isSigner: false,
        });
        remainingAccounts.push({
          pubkey: (
            await getNetworkExpire(
              candyMachine.state.gatekeeper.gatekeeperNetwork
            )
          )[0],
          isWritable: false,
          isSigner: false,
        });
      }
    }
    if (candyMachine.state.whitelistMintSettings) {
      const mint = new web3.PublicKey(
        candyMachine.state.whitelistMintSettings.mint
      );

      const whitelistToken = (
        await getAtaForMint(mint, walletAddress.publicKey)
      )[0];
      remainingAccounts.push({
        pubkey: whitelistToken,
        isWritable: true,
        isSigner: false,
      });

      if (candyMachine.state.whitelistMintSettings.mode.burnEveryTime) {
        const whitelistBurnAuthority = web3.Keypair.generate();

        remainingAccounts.push({
          pubkey: mint,
          isWritable: true,
          isSigner: false,
        });
        remainingAccounts.push({
          pubkey: whitelistBurnAuthority.publicKey,
          isWritable: false,
          isSigner: true,
        });
        signers.push(whitelistBurnAuthority);
        const exists =
          await candyMachine.program.provider.connection.getAccountInfo(
            whitelistToken
          );
        if (exists) {
          instructions.push(
            Token.createApproveInstruction(
              TOKEN_PROGRAM_ID,
              whitelistToken,
              whitelistBurnAuthority.publicKey,
              walletAddress.publicKey,
              [],
              1
            )
          );
          cleanupInstructions.push(
            Token.createRevokeInstruction(
              TOKEN_PROGRAM_ID,
              whitelistToken,
              walletAddress.publicKey,
              []
            )
          );
        }
      }
    }

    if (candyMachine.state.tokenMint) {
      const transferAuthority = web3.Keypair.generate();

      signers.push(transferAuthority);
      remainingAccounts.push({
        pubkey: userPayingAccountAddress,
        isWritable: true,
        isSigner: false,
      });
      remainingAccounts.push({
        pubkey: transferAuthority.publicKey,
        isWritable: false,
        isSigner: true,
      });

      instructions.push(
        Token.createApproveInstruction(
          TOKEN_PROGRAM_ID,
          userPayingAccountAddress,
          transferAuthority.publicKey,
          walletAddress.publicKey,
          [],
          candyMachine.state.price.toNumber()
        )
      );
      cleanupInstructions.push(
        Token.createRevokeInstruction(
          TOKEN_PROGRAM_ID,
          userPayingAccountAddress,
          walletAddress.publicKey,
          []
        )
      );
    }
    const metadataAddress = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);

    const [candyMachineCreator, creatorBump] = await getCandyMachineCreator(
      candyMachineAddress
    );

    instructions.push(
      await candyMachine.program.instruction.mintNft(creatorBump, {
        accounts: {
          candyMachine: candyMachineAddress,
          candyMachineCreator,
          payer: walletAddress.publicKey,
          wallet: candyMachine.state.treasury,
          mint: mint.publicKey,
          metadata: metadataAddress,
          masterEdition,
          mintAuthority: walletAddress.publicKey,
          updateAuthority: walletAddress.publicKey,
          tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: web3.SYSVAR_RENT_PUBKEY,
          clock: web3.SYSVAR_CLOCK_PUBKEY,
          recentBlockhashes: web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
          instructionSysvarAccount: web3.SYSVAR_INSTRUCTIONS_PUBKEY,
        },
        remainingAccounts:
          remainingAccounts.length > 0 ? remainingAccounts : undefined,
      })
    );

    try {
      let transactions = await sendTransactions(
        candyMachine.program.provider.connection,
        candyMachine.program.provider.wallet,
        [instructions, cleanupInstructions],
        [signers, []]
      );
      setLoading(false);
      setOpen(true);

      let mint_count = !localStorage.getItem("mint_count")
        ? 0
        : localStorage.getItem("mint_count");
      localStorage.setItem("mint_count", parseInt(mint_count) + 1);
      getCandyMachineState();
      return transactions.txs.map((t) => t.txid);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setOpenFailedDialog(true);
    }

    return [];
  };

  const getProvider = () => {
    const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;
    // Create a new connection object
    const connection = new Connection(rpcHost);

    // Create a new Solana provider object
    const provider = new Provider(
      connection,
      window.solana,
      opts.preflightCommitment
    );

    return provider;
  };

  // Declare getCandyMachineState as an async method
  const getCandyMachineState = useCallback(async () => {
    const provider = getProvider();
    // Get metadata about your deployed candy machine program
    const idl = await Program.fetchIdl(candyMachineProgram, provider);

    // Create a program that you can call
    const program = new Program(idl, candyMachineProgram, provider);

    // Fetch the metadata from your candy machine
    const candyMachine = await program.account.candyMachine.fetch(
      process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
    );

    // Parse out all our metadata and log it out
    const itemsAvailable = candyMachine.data.itemsAvailable.toNumber();
    const itemsRedeemed = candyMachine.itemsRedeemed.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    const goLiveData = candyMachine.data.goLiveDate.toNumber();
    const presale =
      candyMachine.data.whitelistMintSettings &&
      candyMachine.data.whitelistMintSettings.presale &&
      (!candyMachine.data.goLiveDate ||
        candyMachine.data.goLiveDate.toNumber() > new Date().getTime() / 1000);

    // We will be using this later in our UI so let's generate this now
    const goLiveDateTimeString = `${new Date(
      goLiveData * 1000
    ).toLocaleString()}`;
    let newGoLiveTime = new Date(goLiveData * 1000);
    newGoLiveTime.setHours(newGoLiveTime.getHours() + 2);
    const newGoLiveTimeString = `${newGoLiveTime.toLocaleString()}`;

    setCandyMachine({
      id: process.env.NEXT_PUBLIC_CANDY_MACHINE_ID,
      program,
      state: {
        itemsAvailable,
        itemsRedeemed,
        itemsRemaining,
        goLiveData,
        newGoLiveTime,
        goLiveDateTimeString,
        newGoLiveTimeString,
        isSoldOut: itemsRemaining === 0,
        isActive:
          (presale ||
            candyMachine.data.goLiveDate.toNumber() <
              new Date().getTime() / 1000) &&
          (candyMachine.endSettings
            ? candyMachine.endSettings.endSettingType.date
              ? candyMachine.endSettings.number.toNumber() >
                new Date().getTime() / 1000
              : itemsRedeemed < candyMachine.endSettings.number.toNumber()
            : true),
        isPresale: presale,
        goLiveDate: candyMachine.data.goLiveDate,
        treasury: candyMachine.wallet,
        tokenMint: candyMachine.tokenMint,
        gatekeeper: candyMachine.data.gatekeeper,
        endSettings: candyMachine.data.endSettings,
        whitelistMintSettings: candyMachine.data.whitelistMintSettings,
        hiddenSettings: candyMachine.data.hiddenSettings,
        price: candyMachine.data.price,
      },
    });
    // console.log({
    //   itemsAvailable,
    //   itemsRedeemed,
    //   itemsRemaining,
    //   newGoLiveTimeString,
    // });
  }, []);

  useEffect(() => {
    getCandyMachineState();
    console.log(candyMachine);
  }, [getCandyMachineState]);

  return (
    <div className="xl:w-[1156px] mx-auto lg:w-[900px] w-full">
      <SEO />
      <div className="min-h-[100vh] py-[100px] mx-[20px]">
        {/* launchpad card */}
        <div className="lg:h-[616px] h-[400px] rounded-2xl w-full launchpad-bg flex flex-row items-end lg:py-20 py-10 lg:px-20 justify-between px-10">
          {/* collection info */}
          <div className="w-[55%]">
            <div className="px-8 py-2 border-[2px] border-white rounded-md w-[fit-content] text-white text-sm lg:mb-10 mb-5">
              Featured Launch
            </div>
            <h1 className="text-white lg:text-[50px] text-[30px] leading-none">
              3D Hungry Crows
            </h1>
            <div className="flex flex-row items-center mt-4 space-x-4 lg:mt-8">
              <span className="flex flex-col bg-[#207A76]/60 p-3 rounded-lg">
                <h4 className="font-[300] text-white uppercase text-[12px]">
                  items
                </h4>
                <p className="text-white text-[14px] font-semibold">
                  {candyMachine?.state.itemsAvailable}
                  {/* 2000 */}
                </p>
              </span>
              <span className="flex flex-col bg-[#207A76]/60 p-3 rounded-lg">
                <h4 className="font-[300] text-white uppercase text-[12px]">
                  price
                </h4>
                <p className="text-white text-[14px] uppercase font-semibold">
                  0 sol
                </p>
              </span>
            </div>
            <p className="text-white lg:text-[22px] leading-none lg:mt-8 text-[18px] mt-4">
              3D HungryCrows is a evolutionary 1000 series being minted away for
              free 26th.
            </p>

            {!publicKey && (
              <ConnectWallet className="bg-white text-[#50C9C3] text-[14px] px-14 py-3 rounded-lg shadow-md lg:mt-8 mt-4" />
            )}
            {publicKey && (
              <GatewayProvider
                wallet={{
                  publicKey:
                    wallet?.publicKey || new PublicKey(candyMachineProgram),
                  //@ts-ignore
                  signTransaction: wallet?.signTransaction,
                }}
                // // Replace with following when added
                // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
                gatekeeperNetwork={
                  candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                } // This is the ignite (captcha) network
                /// Don't need this for mainnet
                clusterUrl={rpcUrl}
                options={{ autoShowModal: true }}
              >
                <MintButton mintToken={mintToken} candyMachine={candyMachine} />
              </GatewayProvider>
            )}
          </div>
          {/* collection image */}
          <div className="lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] bg-[#50C9C3] rounded-full mb-8">
            <img
              src="/images/993.png"
              alt=""
              className="object-contain w-[100%]"
            />
          </div>
        </div>
        <h2 className="text-[#2D2E36] font-bold text-[36px] text-center mt-20">
          Explore all our launches
        </h2>
        <p className="text-[18px] text-center mb-20 w-[700px] mx-auto">
          AltDeck Launchpad will be supporting the following projects to launch
          their collections. We hope to create the right environment for
          success.
        </p>
        <div className="border border-[#50C9C3] pb-6 rounded-2xl mt-20 px-4">
          <LaunchpadTable rows={launchpadData} />
        </div>
        <div className="flex flex-row justify-end mt-40">
          <span className="lg:w-[500px] lg:h-[400px] w-[400px] h-[300px]  launchpad-card flex flex-col items-center justify-end">
            <img
              src="/images/crows.gif"
              alt=""
              className="object-contain w-[60%]"
            />
          </span>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-40 lg:grid-cols-4 sm:grid-cols-2">
          {homeLaunchpadData.map(({ stepNumber, heading, para }) => (
            <HomeLaunchpadSteps
              key={stepNumber}
              id={stepNumber}
              heading={heading}
              para={para}
              background={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
