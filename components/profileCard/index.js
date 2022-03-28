import styles from '../../styles/componentStyle/Card.module.css';

const Card = () => {
    return (
        <div className="my-5 rounded-md shadow">
            <img src="https://s3media.freemalaysiatoday.com/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-lifestyle-emel-pic-261021-1-1.jpg" alt="item" className="rounded-md"/>
            <div className="text-center my-4 px-2">
                <h1 className="font-bold">Item 1</h1>
                <p className="text-[#808080] text-base md:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
            </div>
        </div>
    );
}

export default Card;