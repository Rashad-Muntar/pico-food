import styles from '../assets/styles/home.module.css'
import subhead from '../assets/images/sub.jpg'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Food from './food'
import Menu from './menu';
import bigimg from '../assets/images/tilapia.png';
import Footer from './footer';

const Home = ({addtoCart, foodList}) => {
 
    return (
        <main className={styles.main}>
        <section className={styles.headerImg}>
            <div className={styles.textContent}>
            <div className={styles.leftContent}>
                <h1 className={styles.headerText}>Order your best food anytime</h1>
                <p className={styles.subText}>Hey! our delicious food is waiting for you, we are always near with finger licking sumcious food</p>
                <form className={styles.form}>
                    <TextField id="standard-basic" label="Enter location" variant="standard" />
                    <ButtonGroup size="small" variant="contained" aria-label="outlined primary button group">
                        <Button>
                        <ShareLocationOutlinedIcon />
                        locate me
                        </Button>
                        <Button>Search</Button>
                    </ButtonGroup> 
                </form>
            </div>
            
            <ul className={styles.ul}>
                <li className={styles.li}>
                <DeliveryDiningOutlinedIcon className={styles.deliver} /> Free Delivery</li>
                <li className={styles.li}>
                    <MonetizationOnTwoToneIcon className={styles.deliver}/>
                    No hidden charges</li>
                <li className={styles.li}>
                    <AccessibilityNewTwoToneIcon className={styles.deliver}/>
                    Great Custoemr support</li>
            </ul>
            </div>
            <div className={styles.overlay}>
            </div>
            <img className={styles.Img} src={subhead} alt="subheader"/>
        </section>


        <section className={styles.foodSection}>
            <h2 className={styles.header}>Our menu</h2>
            <div className={styles.border}/>
            <Menu/>
        </section>

        <section className={styles.foodSection}>
            <h2 className={styles.header}>Yummy!! Delicious Dishes</h2>
            <div className={styles.border}/>
            <section className={styles.cardsWrapper}>
            {
                foodList.map((food) => (
                    <Food 
                        title={food.title}
                        price={food.price}
                        image={food.image}
                        description={food.description}
                        addtoCart={addtoCart}
                    />
                ))
            }
            </section>
        </section>

        <section className={styles.aboutUs}>
            <img src={bigimg} alt="bigimage" className={styles.aboutUsImage}/>
            <div className={styles.aboutUsTextArea}>
                <h2 className={styles.header}>We are more than multiple services</h2>
                <div className={styles.border}/>
                <p className={styles.aboutUserDescription}>This is the type of restaurant which typically serve food and drinks
                    in addition to light refreshment such as baked goods or snacks. The 
                    terms comes from a french word food
                </p>
                <div className={styles.iconsArea}>
                    <p className={styles.iconItem}>
                    <img className={styles.aboutIcons} src="https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-order-online-shopping-linector-lineal-color-linector.png" alt="online order"/>
                        Online Order
                        </p>
                    <p className={styles.iconItem}>
                    <img className={styles.aboutIcons} src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-reservation-food-flatart-icons-flat-flatarticons.png" alt="reserve"/>
                        Pre Reservation
                        </p>
                    <p className={styles.iconItem}>
                    <img className={styles.aboutIcons} src="https://img.icons8.com/emoji/48/000000/convenience-store.png" alt="247"/>
                        24/7 Service
                        </p>
                    <p className={styles.iconItem}>
                    <img className={styles.aboutIcons} src="https://img.icons8.com/external-linector-flat-linector/64/000000/external-restaurant-new-normal-linector-flat-linector.png" alt="restaurant"/>
                        Organized Foodie Place
                        </p>
                    <p className={styles.iconItem}>
                    <img className={styles.aboutIcons} src="https://img.icons8.com/external-wanicon-flat-wanicon/64/000000/external-kitchen-furniture-and-household-wanicon-flat-wanicon.png" alt="kitchen"/>
                        Clean Kitchen
                    </p>
                    <p className={styles.iconItem}>
                    <img className={styles.aboutIcons} src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-chef-cooking-wanicon-lineal-color-wanicon.png" alt="chef"/>
                        Super Chefs
                    </p>
                </div>
                <button className={styles.makeOrder}>Make order</button>
            </div>
        </section>

        <Footer />
        </main>

    )
}

export default Home