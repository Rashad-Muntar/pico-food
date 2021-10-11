/* eslint-disable */
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from './modal';
import classes from '../assets/styles/cart.module.css';

const Cart = ({ onClose }) => {
  const foods = useSelector((state) => state);
  const [total, setTotal] = useState(0)
  let tot = 0
  console.log(foods);

  const cartItems = (
    <div>
      {foods.map((item) => (
        <div className={classes.cartItem} key={item.id}>
        <p className={classes.title}>{item.title}</p>
        <p className={classes.price}>Ghc{item.price}</p>
        </div>
      ))}
    </div>
  );

  const totalPrice = (
    <div>
      {
        foods.map((item) => {
          tot += item.price
        })
      }
    </div>
  )



  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Ghc{tot}</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        <button type="button" className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
