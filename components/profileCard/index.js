import styles from '../../styles/componentStyle/Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <img src="https://s3media.freemalaysiatoday.com/wp-content/uploads/2021/10/Bored-Ape-Yacht-Club-lifestyle-emel-pic-261021-1-1.jpg" alt="item" />
            <div>
                <h1>Item 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
            </div>
        </div>
    );
}

export default Card;