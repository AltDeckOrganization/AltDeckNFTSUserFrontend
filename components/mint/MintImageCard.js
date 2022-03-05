import React from 'react';
import Image from 'next/image';
import TeamImage from '../../public/girl.jpg';

const MintImageCard = () => {
	return (
		<div className=''>
			<div className='flex flex-col items-center gap-4'>
				<Image src={TeamImage} alt='Team Image' width={500} height={400} />
				<div className='text-sm flex flex-col items-center '>
					<h3 className='font-bold text-black'>Adam Smith</h3>
					<p className='text-[#808080]'>Co-worker</p>
				</div>
			</div>
		</div>
	);
};

export default MintImageCard;
