import styles from '../assets/styles/food.module.css'
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
// import food1 from '../assets/images/rice.png'
import food2 from '../assets/images/burger.png'
const Food = ({price, image, title, description, addtoCart}) => {
    return(
        <div className={styles.card}>
            <img src={image} alt="food1" className={styles.image}/>
            <div className={styles.contentWrapper}>
                <p className={styles.foodTitle}>{title}</p>
                <p className={styles.subtext}>{description}</p>
                <div className={styles.priceArea}>
                    <p className={styles.price}>Gh{price}</p>
                    <button className={styles.cardCart} onClick={addtoCart}>+ <ShoppingBasketTwoToneIcon /></button>
                </div>
            </div>
        </div>
    )

}

export default Food