import React, { useState } from 'react';
import MintImageCard from '../mint/MintImageCard';

const MintTab = () => {
	const [visible, setVisible] = useState(false);

	const onTitlehandle = () => {
		setVisible(false);
	};

	const onTitlSecondehandle = () => {
		setVisible(true);
	};

	return (
		<div className='mx-5'>
			<div className='flex gap-4 mb-3'>
				<div className='flex flex-col gap-2'>
					<div
						className={`text-xl font-semibold text-[#50C9C3] `}
						onClick={onTitlehandle}
					>
						Roadmap
					</div>
					<div
						className={`w-full h-[3px] bg-[#50c9c4] ${
							!visible ? 'block' : 'hidden'
						}`}
					></div>
				</div>

				<div className='flex flex-col gap-2'>
					<div
						className='text-xl font-semibold text-[#50C9C3] '
						onClick={onTitlSecondehandle}
					>
						Team
					</div>
					<div
						className={`w-full h-[3px] bg-[#50c9c4] ${
							visible ? 'block' : 'hidden'
						}`}
					></div>
				</div>
			</div>

			{visible ? (
				<div className='my-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 '>
					<MintImageCard />
					<MintImageCard />
					<MintImageCard />
					<MintImageCard />
					<MintImageCard />
					<MintImageCard />
				</div>
			) : (
				<div className='text-sm text-[#808080] my-5 tracking-wide leading-loose leading-6'>
					<h3 className='text-black font-semibold'>Phase1</h3>
					<p className='mt-3'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl turpis
						morbi penatibus commodo. Cursus tellus curabitur congue morbi. Nisi
						a elementum pharetra, blandit amet dolor. Sagittis nibh eu cursus
						massa lorem at. Donec nisl eget nam scelerisque. At netus libero
						rhoncus a. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nisl turpis morbi penatibus commodo. Cursus tellus curabitur congue
						morbi. Nisi a elementum pharetra, blandit amet dolor. Sagittis nibh
						eu cursus massa lorem at. Donec nisl eget nam scelerisque. At netus
						libero rhoncus a.
					</p>
				</div>
			)}
		</div>
	);
};

export default MintTab;
