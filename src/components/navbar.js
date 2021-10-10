import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import styles from '../assets/styles/navbar.module.css'
import CartContext from '../store/cartContext';

const Navbar = ({showCart}) => {
    const [foodItem, setFoodItem] = useState(0)
    const context = useContext(CartContext)
    console.log(context)

    // const numberOfCartItems = context.items.reduce((curNumber, item) => {
    //     return curNumber + item.amount
    // }, 0)
     
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
            <button type="button" className={styles.cartLink} onClick={showCart}>
                <Badge badgeContent={foodItem} color="primary">
                    <ShoppingBasketTwoToneIcon  />
                 </Badge>
            </button>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
