import styles from '../assets/styles/food.module.css'
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import food1 from '../assets/images/rice.png'
import food2 from '../assets/images/burger.png'
const Food = () => {
    return(
        <section className={styles.cardsWrapper}>
        <div className={styles.card}>
            <img src={food2} alt="food1" className={styles.image}/>
            <div className={styles.contentWrapper}>
                <p className={styles.foodTitle}>Burger</p>
                <p className={styles.subtext}>With vergetable and beef</p>
                <div className={styles.priceArea}>
                    <p className={styles.price}>Ghc10</p>
                    <button className={styles.cardCart}>+ <ShoppingBasketTwoToneIcon /></button>
                </div>
            </div>
        </div>

        <div className={styles.card}>
            <img src={food2} alt="food1" className={styles.image}/>
            <div className={styles.contentWrapper}>
                <p className={styles.foodTitle}>Burger</p>
                <p className={styles.subtext}>With vergetable and beef</p>
                <div className={styles.priceArea}>
                    <p className={styles.price}>Ghc10</p>
                    <button className={styles.cardCart}>+ <ShoppingBasketTwoToneIcon /></button>
                </div>
            </div>
        </div>

        <div className={styles.card}>
            <img src={food2} alt="food1" className={styles.image}/>
            <div className={styles.contentWrapper}>
                <p className={styles.foodTitle}>Burger</p>
                <p className={styles.subtext}>With vergetable and beef</p>
                <div className={styles.priceArea}>
                    <p className={styles.price}>Ghc10</p>
                    <button className={styles.cardCart}>+ <ShoppingBasketTwoToneIcon /></button>
                </div>
            </div>
        </div>

        <div className={styles.card}>
            <img src={food2} alt="food1" className={styles.image}/>
            <div className={styles.contentWrapper}>
                <p className={styles.foodTitle}>Burger</p>
                <p className={styles.subtext}>With vergetable and beef</p>
                <div className={styles.priceArea}>
                    <p className={styles.price}>Ghc10</p>
                    <button className={styles.cardCart}>+ <ShoppingBasketTwoToneIcon /></button>
                </div>
            </div>
        </div>


        </section>
    )

}

export default Food