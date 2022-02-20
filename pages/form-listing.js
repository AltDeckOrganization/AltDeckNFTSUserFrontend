import React from 'react';
import Form from '../components/forms';

function LaunchpadForm() {
	return (
		<div className='launchPad py-5 px-20'>
			<div className='text-black text-lg  font-semibold  py-3 lg:text-3xl md:text-xl text-center'>
				Listing Application
			</div>
			<Form />
		</div>
	);
}

export default LaunchpadForm;
