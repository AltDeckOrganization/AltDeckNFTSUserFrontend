import React from 'react';

function Mintprogress() {
	return (
		<div className='mt-2'>
			<div className='text-[#808080] flex justify-between my-2 text-xs '>
				<div>Total minted</div>
				<div>
					<span className="text-black font-semibold">60%</span>(3490/5000)
				</div>
			</div>
			<div className='w-full h-[5px] rounded bg-[#C4C4C4]'>
				<div className='w-3/4 h-[5px] rounded bg-[#50C9C3]'></div>
			</div>
		</div>
	);
}

export default Mintprogress;
