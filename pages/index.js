import Link from 'next/link';

//Components
import Hero from '../components/hero';
import SlideShow from '../components/slideShow';

//SEO
import SEO from '../components/seo/SEO';

//Data

import { cardData } from '../components/data/cardData';
import SingleRow from '../components/singleRow';
import CollectionCard from '../components/collectionCard'

export default function Home() {
	return (
		<div className='xl:w-[1156px] mx-auto lg:w-[900px] w-full mt-28'>
			<SEO />
			<Hero />
			<SlideShow />

			<div className='my-6 md:my-12 mx-[20px]'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-semibold md:text-[28px]'>
						Featured Collections
					</h1>
					<Link href='/' passHref={true}>
						<h3 className='text-sm font-semibold text-[#50C9C3] md:text-base cursor-pointer w-fit whitespace-nowrap'>
							See All
						</h3>
					</Link>
				</div>
			</div>
			<div className='my-6 md:my-12 mx-[20px]'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-semibold md:text-[28px]'>
						Upcoming Launches
					</h1>
					<Link href='/explore' passHref={true}>
						<h3 className='text-sm font-semibold text-[#50C9C3] md:text-base cursor-pointer w-fit whitespace-nowrap'>
							See All
						</h3>
					</Link>
				</div>
				{/* <SingleRow 
          data={cardData}
          renderItem={(item, index) => <UpcomingCollectionCard data={item} key={index}/>}
        /> */}
			</div>
			<div className='my-6 md:my-12 mx-[20px]'>
				<div className='flex items-center justify-between'>
					<h1 className='text-xl font-semibold md:text-[28px]'>
						Live launchpad collections
					</h1>
					<Link href='/' passHref={true}>
						<h3 className='text-sm font-semibold text-[#50C9C3] md:text-base cursor-pointer w-fit whitespace-nowrap'>
							See All
						</h3>
					</Link>
				</div>
			</div>
      <div className="mt-24 mx-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold md:text-[28px]">
            Featured Collections
          </h1>
          <Link href="/" passHref={true}>
            <h3 className="text-[20px] cursor-pointer w-fit whitespace-nowrap">
              See All
            </h3>
          </Link>
        </div>
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
        <SingleRow 
          data={cardData}
          renderItem={(item, index) => <CollectionCard data={item} key={index}/>}
        />
      </div> 
		</div>
  );
}
