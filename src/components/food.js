import PropTypes from 'prop-types';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import styles from '../assets/styles/food.module.css';

const Food = ({
  price, image, title, description, addtoCart,
}) => (
  <div className={styles.card}>
    <img src={image} alt="food1" className={styles.image} />
    <div className={styles.contentWrapper}>
      <p className={styles.foodTitle}>{title}</p>
      <p className={styles.subtext}>{description}</p>
      <div className={styles.priceArea}>
        <p className={styles.price}>
          Gh
          {price}
        </p>
        <button type="button" className={styles.cardCart} onClick={addtoCart}>
          +
          <ShoppingBasketTwoToneIcon />
        </button>
      </div>
    </div>
  </div>
);

Food.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addtoCart: PropTypes.func.isRequired,
};

export default Food;
