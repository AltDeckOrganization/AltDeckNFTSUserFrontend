//SEO
import SEO from '../components/seo/SEO';

//components
import StatsTable from '../components/statsTable';

//dummydata
import { statsData } from '../components/data/statsData';
import ItemDetals from '../components/itemDetails';

const Stats = () => {
	return (
		<div className='xl:w-[1156px] mx-auto lg:w-[900px] w-full'>
			<SEO />
			<div className='min-h-[100vh] py-5'>
				<h1 className='text-center capitalize text-[#50C9C3] font-semibold text-base md:text-[30px]'>
					top collections on solana
				</h1>
				<div className=' pb-6 rounded-2xl mt-10 px-4 md:px-2'>
					<ItemDetals />

					{/* <StatsTable rows={statsData} /> */}
				</div>
			</div>
		</div>
	);
};

export default Stats;
