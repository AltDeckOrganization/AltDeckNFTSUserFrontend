import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Crows from "../../public/crows.jpg";
import Internet from "../../public/internet.svg";
import Discord from "../../public/discord.svg";
import Twitter from "../../public/twitter.svg";
import MintCard from "../../components/mint/MintCard";
import Link from "next/link";
import Mintprogress from "../../components/progress/mintprogress";
import Tab from "../../components/tab/mintTab";
import Countdown from "react-countdown";
import SEO from "../../components/seo/SEO";
import { useDarkMode } from "../../context/darkMode";
import { useRouter } from "next/router";
import axios from "axios";
import { Connection, PublicKey } from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { MintLayout, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import { sendTransactions } from "../../services/connections";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";

import {
  candyMachineProgram,
  TOKEN_METADATA_PROGRAM_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  getAtaForMint,
  getNetworkExpire,
  getNetworkToken,
  CIVIC,
} from "../../services/helpers";
import { MintButton } from "../../components/MintButton/MintButton";
import { data } from "autoprefixer";

const { SystemProgram } = web3;
const opts = {
  preflightCommitment: "processed",
};

const Completionist = () => (
  <div className="text-3xl text-[#50C9C3] font-bold">MINTING COMPLETED</div>
);

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="text-[#50C9C3] text-5xl">
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
};

const Mint = () => {
  const { darkMode } = useDarkMode();
  const [launchData, setLaunchData] = useState({ whitelists: [] });
  const router = useRouter();
  const { id } = router.query;
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const CANDY_ID = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID;
  const [candyMachine, setCandyMachine] = useState();
  const [candyMachineId, setCandyMachineId] = useState();
  const [loading, setLoading] = useState(false);
  const { publicKey } = useWallet();
  const wallet = useAnchorWallet();
  const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST;

  const fetchLaunchData = () => {
    console.log(id);
    axios.get(`${BACKEND_URL}/api/v1/launches/${id}`).then((res) => {
      const { data } = res;
      let page_data = JSON.parse(data.page_data);
      data.parsed_page_data = page_data;
      setLaunchData(data);
      setCandyMachineId(data.candymachine_id);
      console.log(page_data);
    });
  };

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
      // setLoading(false);
      // setOpen(true);

      // let mint_count = !localStorage.getItem("mint_count")
      //   ? 0
      //   : localStorage.getItem("mint_count");
      // localStorage.setItem("mint_count", parseInt(mint_count) + 1);
      getCandyMachineState();
      return transactions.txs.map((t) => t.txid);
    } catch (e) {
      console.log(e);
      // setLoading(false);
      // setOpenFailedDialog(true);
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
      candyMachineId
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

    setCandyMachine({
      id: launchData.candymachine_id,
      program,
      state: {
        itemsAvailable,
        itemsRedeemed,
        itemsRemaining,
        goLiveData,
        goLiveDateTimeString,
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
    console.log(candyMachine.data.gatekeeper);
    // console.log({
    //   itemsAvailable,
    //   itemsRedeemed,
    //   itemsRemaining,
    //   newGoLiveTimeString,
    // });
  }, [candyMachineId]);

  const Completionist = () => (
    <div className="text-3xl text-[#50C9C3] font-bold">MINTING STARTED</div>
  );

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <GatewayProvider
          wallet={{
            publicKey: wallet?.publicKey || new PublicKey(candyMachineProgram),
            //@ts-ignore
            signTransaction: wallet?.signTransaction,
          }}
          // // Replace with following when added
          // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
          gatekeeperNetwork={candyMachine?.state?.gatekeeper?.gatekeeperNetwork} // This is the ignite (captcha) network
          /// Don't need this for mainnet
          // clusterUrl={
          //   process.env.NEXT_PUBLIC_SOLANA_NETWORK === "mainnet-beta"
          //     ? ""
          //     : rpcUrl
          // }
          options={{ autoShowModal: true }}
        >
          <MintButton mintToken={mintToken} candyMachine={candyMachine} />
        </GatewayProvider>
      );
    } else {
      // Render a countdown
      return (
        <div className="text-[#50C9C3] text-5xl">
          {hours}:{minutes}:{seconds}
        </div>
      );
    }
  };

  useEffect(() => {
    if (candyMachineId) {
      getCandyMachineState();
    }
  }, [candyMachineId]);

  useEffect(() => {
    fetchLaunchData();
  }, []);

  return (
    <div className="mint px-2 py-5 md:px-10 pt-20">
      <SEO />

      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap4">
          <div className="w-10/12 mx-auto">
            <Image
              src={
                launchData.profile_image_path
                  ? launchData.profile_image_path
                  : Crows
              }
              alt="Crows"
              width={"500px"}
              height={400}
              layout="responsive"
              priority="true"
              className="rounded-[13px]"
            />
            <div className="mt-5">
              <Mintprogress
                total_items={
                  launchData.parsed_page_data
                    ? launchData.parsed_page_data.total_items
                    : "N/A"
                }
                items_minted={0}
              />
            </div>
          </div>
          <div className="px-5 mt-10 lg:mt-0">
            <div className="flex mb-2 justify-between items-center">
              <h3 className="text-2xl text-[#50C9C3] font-bold">
                {launchData.parsed_page_data
                  ? launchData.parsed_page_data.launch_name
                  : "N/A"}
              </h3>
              <div className="text-base text-[#808080]">
                Total items:{" "}
                <span className="font-semibold text-black">
                  {launchData.parsed_page_data
                    ? launchData.parsed_page_data.total_items
                    : "N/A"}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-[#808080] text-sm">
                Price:{" "}
                <span
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                >
                  {launchData.parsed_page_data
                    ? launchData.parsed_page_data.price
                    : "N/A"}
                </span>
              </div>
              <Image src={Internet} alt="Internet" width={20} height={20} />
              <Image src={Discord} alt="Internet" width={20} height={20} />
              <Image src={Twitter} alt="Internet" width={20} height={20} />
            </div>
            <div className="text-sm text-[#808080] my-5 tracking-wide leading-loose leading-6">
              {launchData.parsed_page_data
                ? launchData.parsed_page_data.desc
                : "N/A"}
            </div>
            <div className="my-5 md:mx-5 bg-[#50C9C3] bg-opacity-10 px-5 py-2 rounded">
              {/* {launchData.parsed_page_data
                ? launchData.parsed_page_data.whitelists.map((data, i) => (
                    <MintCard data={data} key={i} />
                  ))
                : ""} */}
            </div>
            <div className="w-full my-5">
              {candyMachine && publicKey && (
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
                  // clusterUrl={
                  //   process.env.NEXT_PUBLIC_SOLANA_NETWORK === "mainnet-beta"
                  //     ? ""
                  //     : rpcUrl
                  // }
                  options={{ autoShowModal: true }}
                >
                  <MintButton
                    mintToken={mintToken}
                    candyMachine={candyMachine}
                  />
                </GatewayProvider>
              )}

              {/* <div className="mt text-center">
                {candyMachine && (
                  <Countdown
                    date={candyMachine.state.goLiveData * 1000}
                    renderer={renderer}
                  />
                )}
              </div> */}

              {/* <button className="w-full font-semibold bg-[#50c9c3] rounded py-3 text-white">
                    Visit Collection
                  </button> */}
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black my-20 bg-opacity-10"></div>

        {/* Contdown */}
        <div className="mt text-center">
          <Countdown date={Date.now() + 10000} renderer={renderer} />
        </div>

        <div className="h-[1px] w-full bg-black my-20 bg-opacity-10"></div>
        <div className="mt-20">
          <div className="px-5">
            <div className="text-2xl font-bold text-[#50C9C3]">Description</div>
            <p className="text-sm text-[#808080] my-5 tracking-wide leading-loose leading-6">
              {launchData.parsed_page_data
                ? launchData.parsed_page_data.desc
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Tab */}
        <div className="mt-10">
          <Tab
            roadmap={launchData.parsed_page_data?.roadmaps}
            team={launchData.parsed_page_data?.teams}
          />
        </div>
      </div>
    </div>
  );
};

export default Mint;
