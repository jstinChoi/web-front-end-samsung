import CartTotal from './CartTotal';
import { useCart } from 'context/cart';

const CartFooter = ({...restProps }) => {
  const {totalPrice} = useCart();
  return (<footer {...restProps}>
    <CartTotal>{totalPrice}</CartTotal>
  </footer>)

};


/*

*/
export default CartFooter;
