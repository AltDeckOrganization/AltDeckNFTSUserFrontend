import React, { useState, useRef } from 'react';
import {
	CountryDropdown,
	RegionDropdown,
	CountryRegionData,
} from 'react-country-region-selector';

function Form() {
	const inputFile = useRef(null);
	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');

	const [file, setFile] = useState(null);

	const onButtonClick = () => {
		inputFile.current.click();
	};

	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
	};

	const fileDrop = (e) => {
		e.preventDefault();
		setFile(e.dataTransfer.files[0]);
	};
	return (
		<div>
			<form className='w-full  py-5 px-5 md:px-10'>
				<div className='flex flex-wrap -mx-3 mb-6'>
					<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
						<label
							className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-first-name'
						>
							Name
						</label>
						<input
							className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
							id='name'
							type='text'
							placeholder='Adam Smith'
						/>
						<p className='text-red-500 text-xs italic'>
							Please fill out this field.
						</p>
					</div>
					<div className='w-full md:w-1/2 px-3'>
						<label
							className='block  trackin-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='grid-last-name'
						>
							Country
						</label>
						<CountryDropdown className='block w-full bg-gray-200 text-gray-700 border border-gray-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' />
						{/* <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            /> */}
					</div>
				</div>

				<div className='flex flex-wrap -mx-3 mb-6'>
					{' '}
					<div className='py-3 mb-5  px-3 bg-white md:w-1/2 w-full'>
						<div className='max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl'>
							<label
								className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-first-name'
							>
								Picture(PNG/JPG/JPEG)
							</label>
							<div className='md:flex'>
								<div className='w-full'>
									<div className='relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center'>
										<div className='absolute'>
											<div className='flex flex-col items-center'>
												{' '}
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-6 w-6'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														style={{ color: '#9ca3af' }}
														d='M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z'
													/>
												</svg>
												<span className='block text-gray-400 font-normal'>
													Drag and drop picture here
												</span>{' '}
											</div>
										</div>{' '}
										<input
											type='file'
											className='h-full w-full opacity-0'
											name=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* VIDEO */}
					<div className='py-3  bg-white  px-3 md:w-1/2 w-full'>
						<div className='max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl'>
							<label
								className='block tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-first-name'
							>
								Video(mp3)
							</label>
							<div className='md:flex'>
								<div className='w-full'>
									<div className='relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center'>
										<div className='absolute'>
											<div className='flex flex-col items-center'>
												{' '}
												<svg
													xmlns='http://www.w3.org/2000/svg'
													className='h-6 w-6'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														style={{ color: '#9ca3af' }}
														d='M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z'
													/>
												</svg>
												<span className='block text-gray-400 font-normal'>
													Drag and drop video here
												</span>{' '}
											</div>
										</div>{' '}
										<input
											type='file'
											className='h-full w-full opacity-0'
											name=''
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full flex flex-wrap'>
					<div className='md:w-1/2'></div>
					<div className='w-full md:w-1/2'>
						<button className='bg-[#50C9C3]  rounded rounded-md py-3 px-10 text-white float-right'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
