import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { useCart } from 'context/cart';

export default function CartList() {
  const { products, handleUpdateAmount } = useCart();

  return (
    <Container>
      {products.map((product) => (
        <CartItem key={product.id} product={product} onUpdate={handleUpdateAmount} />
      ))}
      <CartFooter />
    </Container>
  );
}

CartList.propTypes = {
  onUpdate: func,
};

/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
