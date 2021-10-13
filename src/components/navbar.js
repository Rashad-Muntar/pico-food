import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from '@mui/material/Badge';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../assets/styles/navbar.module.css';

const Navbar = ({ showCart, cartCount }) => {
  const [sideBarShow, setSideBarShow] = useState(false);

  const handleMobileMenu = () => {
    setSideBarShow(true);
  };

  const closeMobileMenuHandler = () => {
    setSideBarShow(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.contentWrapper}>
          <a href="google.com" className={styles.brand}>
            <FastfoodIcon />
            PICO
            <span className={styles.span}>FOOD</span>
          </a>

          <div className={styles.navLinksArea}>
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
          <div className={styles.mobileRightArea}>
            <div className={styles.right}>
              <button type="button" className={styles.cartLink} onClick={showCart}>
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingBasketTwoToneIcon />
                </Badge>
              </button>
            </div>
            <MenuIcon onClick={handleMobileMenu} />
          </div>
        </div>
      </nav>

      {sideBarShow && (
      <div className={styles.navLinksAreaForMobile}>
        <CloseIcon className={styles.closeBtn} onClick={closeMobileMenuHandler} />
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
      </div>
      )}
    </>
  );
};

Navbar.propTypes = {
  showCart: PropTypes.node.isRequired,
  cartCount: PropTypes.number.isRequired,
};

export default Navbar;
