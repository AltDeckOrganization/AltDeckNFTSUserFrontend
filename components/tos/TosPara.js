import React from 'react';

function TosPara({title, desc}) {
	return (
		<div>
			<p className='text-base text-black text-sm font-bold'>{title}</p>
			<p className='leading-loose leading-6 mb-5'>
                {desc}
			</p>
		</div>
	);
}

export default TosPara;
