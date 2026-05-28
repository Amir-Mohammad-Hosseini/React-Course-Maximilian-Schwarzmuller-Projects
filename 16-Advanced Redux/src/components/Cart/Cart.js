import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector(state => state.cart.items)
  if(!items.length){
    return <Card className={classes.cart}>
      <h2 style={{textAlign : "center"}}>Cart is empty!</h2>
    </Card>
  }
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          items.map((item) => 
            <CartItem key={item.id} {...item} />
          )
        }
      </ul>
    </Card>
  );
};

export default Cart;
