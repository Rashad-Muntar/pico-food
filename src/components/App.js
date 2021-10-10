import React, {useState} from 'react'
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Navbar from "./navbar";
import Home from "../components/Home"
import Cart from '../components/cart';

import CartProvider from '../store/cartProvider';

const foodData = [
  {
    title: "Burger",
    price: 10,
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F06%2FJunk-Food-Transparent.png&f=1&nofb=1',
    description: "With vergitable and beaf"
  },
  {
    title: "Fried Rice",
    price: 20,
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fchicken-and-rice-png-chicken-fried-rice-585.png&f=1&nofb=1",
    description: "With vergitable and beaf"
  },
  {
    title: "Smoody",
    price: 8,
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.jimakoextreme.com%2Fimages%2Fsmoothie-mango.png&f=1&nofb=1",
    description: "With mango and bananas and peach"
  }, 
  {
    title: "Jollof Rice",
    price: 25,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fgrain-clipart-chicken-fried-rice-8.png&f=1&nofb=1",
    description: "With vergitable, chopped beef chicken"
  }

]

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (

    <CartProvider >
        <Navbar showCart={showCartHandler}/>
        <Home foodList={foodData} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
      </CartProvider>
  );
}

export default App;
