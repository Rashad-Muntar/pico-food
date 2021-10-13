import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { addFoodToCartAction, removeAction } from '../Actions';
import Navbar from './navbar';
import Home from './Home';
import Cart from './cart';

const foodData = [
  {
    id: 1,
    title: 'Burger',
    price: 10,
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F06%2FJunk-Food-Transparent.png&f=1&nofb=1',
    description: 'With vegitable and beaf',
  },
  {
    id: 2,
    title: 'Fried Rice',
    price: 20,
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fchicken-and-rice-png-chicken-fried-rice-585.png&f=1&nofb=1',
    description: 'With vegitable and beaf',
  },
  {
    id: 3,
    title: 'Smoody',
    price: 8,
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jimakoextreme.com%2Fimages%2Fsmoothie-mango.png&f=1&nofb=1',
    description: 'With mango and bananas and peach',
  },
  {
    id: 4,
    title: 'Jollof Rice',
    price: 25,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fgrain-clipart-chicken-fried-rice-8.png&f=1&nofb=1',
    description: 'With vergitable, chopped beef chicken',
  },

];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [oderText, setOrderText] = useState('Order food');
  const food = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addtoCartHandler = (food) => {
    dispatch(addFoodToCartAction(food));
    setOpen(true);
  };

  const removeFromCartHandler = (food) => {
    dispatch(removeAction(food));
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const orderHandler = () => {
    setOrderText('Order...');
    setTimeout(() => {
      setOrderText(<CheckIcon />);
    }, 2000);
    setTimeout(() => {
      setCartIsShown(false);
      setOrderText('Order food');
    }, 4000);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (

    <>
      <Navbar showCart={showCartHandler} cartCount={food.length} />
      <Home foodList={foodData} addtoCart={addtoCartHandler} />
      {cartIsShown
      && (
      <Cart
        onClose={hideCartHandler}
        removeFood={removeFromCartHandler}
        orderBtn={oderText}
        onOrder={orderHandler}
      />
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="food successfully added"
        action={action}

      />
    </>
  );
}

export default App;
