import React from 'react';
import PrivacyPolicyDetails from '../components/privacyPolicyDetails';

const PrivacyPolicy = () => {
	return (
		<div className='xl:w-[1156px] mx-auto mt-20 lg:w-[900px] w-full'>
			<div className='px-5 lg:px-0'>
				<h1 className='text-[#50C9C3] text-2xl md:text-3xl'>Privacy Policy</h1>

				<p className='text-sm text-[#808080] mb-5'>
					Privacy Policy(Version 1.0)
				</p>
			</div>
			<PrivacyPolicyDetails />
		</div>
	);
};

export default PrivacyPolicy;
