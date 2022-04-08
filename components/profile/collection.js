import collStyles from './collection.module.css';
import Image from 'next/image'


function collCard() {
    return (
        <div>
            <div className={`text-center ${collStyles.collCard}`}>
                <div className={` ${collStyles.positionCard}`}>
                    <div  className={`rounded-full p-1 shadow-md  bg-white ${collStyles.imageCard}`}>
                        <Image 
                            src="/images/person.jpg"
                            width="200%"
                            height="200%"
                            className='rounded-full '
                        />
                    </div>
                    <div className='text-2xl font-bold my-4'>
                        Degen Ape Academy
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default collCard
