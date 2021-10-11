import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import styles from '../assets/styles/navbar.module.css';

const Navbar = ({ showCart, cartCount }) => (
  <nav className={styles.navbar}>
    <div className={styles.contentWrapper}>
      <a href="google.com" className={styles.brand}>
        <FastfoodIcon />
        PICO
        <span className={styles.span}>FOOD</span>
      </a>

      <div className={styles.menuItems}>
        <a href="google.com" className={styles.menuLink}>
          Menu
        </a>
        <a href="google.com" className={styles.menuLink}>
          Services
        </a>
        <a href="google.com" className={styles.menuLink}>
          Gallery
        </a>
      </div>
      <div className={styles.right}>
        <button type="button" className={styles.cartLink} onClick={showCart}>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingBasketTwoToneIcon />
          </Badge>
        </button>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  showCart: PropTypes.node.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
