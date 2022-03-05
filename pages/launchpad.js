/* eslint-disable @next/next/no-img-element */
//mint imports
import React, { useEffect, useState, useCallback } from "react";
// import { Connection, PublicKey } from "@solana/web3.js";
// import { Program, Provider, web3 } from "@project-serum/anchor";
// import { MintLayout, TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
// import { sendTransactions } from "../services/connections";
// import { GatewayProvider } from "@civic/solana-gateway-react";
// import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
// import { useAnchorWallet } from "@solana/wallet-adapter-react";

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
import SEO from '../components/seo/SEO';

//components
import LaunchpadTable from '../components/launchpadTable';
import HomeLaunchpadSteps from '../components/homeLaunchpadSteps';

//dummydata
import { launchpadData } from '../components/data/launchpadData';
import { homeLaunchpadData } from '../components/data/homeLaunchpad';

// Connect Wallet Button
import { ConnectWallet } from '../components/connectWallet';

const LaunchPad = () => {
	return (
		<div className='xl:w-[1156px] mx-auto lg:w-[900px] w-full'>
			<SEO />
			<div className='min-h-[100vh] py-[20px] mx-[20px]'>
				{/* launchpad card */}
				<div className='lg:h-[616px] h-[400px] rounded-md w-full launchpad-bg flex flex-row items-end lg:py-20 py-10 lg:px-20 justify-between px-10'>
					{/* collection info */}
					<div className='w-[55%]'>
						<div className='px-8 py-2 border-[1px] border-white rounded w-[fit-content] text-white text-sm lg:mb-10 mb-5'>
							Featured Launch
						</div>
						<h1 className='text-white lg:text-[50px] text-[30px] leading-none'>
							FolkTales of Lunaria: Blood Moonstones.
						</h1>
						<div className='flex flex-row items-center mt-4 space-x-4 lg:mt-8'>
							<span className='flex flex-col bg-[#207A76]/60 py-2 px-10  rounded'>
								<h4 className='font-[300] text-white uppercase text-[12px]'>
									items
								</h4>
								<p className='text-white text-[14px] font-semibold'>2000</p>
							</span>
							<span className='flex flex-col bg-[#207A76]/60 py-2 px-10 rounded'>
								<h4 className='font-[300] text-white uppercase text-[12px]'>
									price
								</h4>
								<p className='text-white text-[14px] uppercase font-semibold'>
									1 sol
								</p>
							</span>
						</div>
						<p className='text-white lg:text-[22px] leading-none lg:mt-8 text-[18px] mt-4'>
							Blood Moonstones have the power to corrupt Lunarians on October
							31st.
						</p>

						<ConnectWallet className='bg-white text-[#50C9C3] text-[14px] px-14 py-3 rounded font-semibold transition hover:bg-[#50c9c3] hover:text-white border-2 hover:border-white  shadow-md lg:mt-8 mt-4' />
					</div>
					{/* collection image */}
					<div className='lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] bg-[#50C9C3] rounded-full mb-8'></div>
				</div>
				<h2 className='text-[#50C9C3] font-bold text-[36px] text-center mt-20'>
					Explore all our launches
				</h2>
				<p className='text-sm leading-loose leading-6 text-[#808080] md:text-center'>
					AltDeck Launchpad will be supporting the following projects to launch
					their collections. We hope to create the right environment for
					success.
				</p>
				<div className='border md:border-[#50C9C3] pb-6 rounded mt-10 px-4 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
					<LaunchpadTable rows={launchpadData} />
				</div>
				<div className='flex flex-row justify-end mt-40'>
					<span className='lg:w-[500px] lg:h-[400px] w-[400px] h-[300px]  launchpad-card flex flex-col items-center justify-end'>
						<img
							src='/images/monkey2.png'
							alt=''
							className='object-contain w-[60%]'
						/>
					</span>
				</div>
				<div className='grid grid-cols-1 gap-2 mt-40 lg:grid-cols-4 sm:grid-cols-2'>
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
