
import styles from '../assets/styles/menu.module.css'

const Menu = () => {
    return (
        <section className={styles.menuCardWrapper}>
        <div className={styles.menuCard}>
            <div className={styles.icons}>
            <img src="https://img.icons8.com/dotty/80/000000/pizza.png"/>
            </div>
            <p className={styles.name}>Pizza</p>
        </div>

        <div className={styles.menuCard}>
            <div className={styles.icons}>
            <img src="https://img.icons8.com/ios/50/000000/salad--v1.png"/>
            </div>
            <p className={styles.name}>Salad</p>
        </div>

        <div className={styles.menuCard}>
            <div className={styles.icons}>
            <img src="https://img.icons8.com/ios/50/000000/hamburger.png"/>
            </div>
            <p className={styles.name}>Hamburger</p>
        </div>

        <div className={styles.menuCard}>
            <div className={styles.icons}>
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-drink-carnival-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
            </div>
            <p className={styles.name}>Drinks</p>
        </div>

        <div className={styles.menuCard}>
            <div className={styles.icons}>
            <img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-sandwich-august-bakery-photo3ideastudio-lineal-photo3ideastudio.png"/>
            </div>
            <p className={styles.name}>Sandwich</p>
        </div>

        <div className={styles.menuCard}>
            <div className={styles.icons}>
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-chicken-supermarket-flatart-icons-outline-flatarticons.png"/>
            </div>
            <p className={styles.name}>Fried Chicken</p>
        </div>

        </section>
    )
}

export default Menu