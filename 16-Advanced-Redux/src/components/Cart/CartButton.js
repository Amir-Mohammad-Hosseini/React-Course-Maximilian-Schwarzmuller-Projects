import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';
import { calculateTotalItems } from '../../utils/utils';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const items= useSelector(state => state.cart.items)

  const totalItems = calculateTotalItems(items)

  const handleToggleShowCart = () => {
    dispatch(uiActions.showToggle())
  }
  return (
    <button className={classes.button} onClick={handleToggleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
