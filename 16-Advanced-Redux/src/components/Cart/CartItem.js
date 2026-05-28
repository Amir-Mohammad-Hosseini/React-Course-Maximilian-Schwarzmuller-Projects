import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ id ,title, quantity, price }) => {
  const dispatch = useDispatch()

  const handleDecreaseItem = () => {
    dispatch(cartActions.decreaseItem(id))
  }

  const handleIncreaseItem = () => {
    dispatch(cartActions.increaseItem(id))
  }


  const totalPrice = price * quantity

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecreaseItem}>-</button>
          <button onClick={handleIncreaseItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
