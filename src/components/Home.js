import styles from '../assets/styles/home.module.css'
import subhead from '../assets/images/sub.jpg'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import AccessibilityNewTwoToneIcon from '@mui/icons-material/AccessibilityNewTwoTone';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';

const Home = () => {
    return (
    
        <section className={styles.headerImg}>
            <div className={styles.textContent}>
            <div className={styles.leftContent}>
                <h1 className={styles.headerText}>Order your best food anytime</h1>
                <p className={styles.subText}>Hey! our delicious food is waiting for you, we are always near with finger licking sumcious food</p>
                <form className={styles.form}>
                    <TextField id="standard-basic" label="Enter location" variant="standard" />
                    {/* <button type="submit" className={styles.authSearch}>
                        <ShareLocationOutlinedIcon />
                    </button>
                    <button className={styles.search} type="submit">Search</button>
                    */}
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
    )
}

export default Home