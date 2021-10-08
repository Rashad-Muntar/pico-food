import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import styles from '../assets/styles/navbar.module.css'
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.contentWrapper}>
                <Link className={styles.brand}>
                    <FastfoodIcon />
                    PICO<span className={styles.span}>FOOD</span>
                </Link>
            
            <div className={styles.menuItems}>
                <Link className={styles.menuLink}>
                    Menu
                </Link>
                <Link className={styles.menuLink}>
                    Services
                </Link>
                <Link className={styles.menuLink}>
                    Gallery
                </Link>
            </div>
            <div className={styles.right}>
            <Link className={styles.cartLink}>
                <Badge badgeContent={4} color="primary">
                    <ShoppingBasketTwoToneIcon  />
                 </Badge>
                </Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
