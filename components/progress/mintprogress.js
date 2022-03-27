import React from 'react';

function Mintprogress({ total_items, items_minted }) {
	return (
		<div className='mt-2'>
			<div className='text-[#808080] flex justify-between my-2 text-xs '>
				<div>Total minted</div>
				<div>
					<span className='text-black font-semibold'>0%</span>({items_minted}/
					{total_items})
				</div>
			</div>
			<div className='w-full h-[5px] rounded bg-[#C4C4C4]'>
				<div className='w-1/6 h-[5px] rounded bg-[#c4c4c4]'></div>
			</div>
		</div>
	);
}

export default Mintprogress;
