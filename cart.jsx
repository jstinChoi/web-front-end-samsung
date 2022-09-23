import { arrayOf, oneOf, oneOfType, shape, func, number, string } from 'prop-types';
import React, {useContext} from 'react';

const CartContext = React.createContext();

export const CartProvider = ({value, children}) => {
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
    title: string,
    products: oneOfType([
      oneOf([null]),
      arrayOf(
        shape({
          amount: number,
          id: string,
          maxAmount: number,
          name: string,
          photo: string,
          price: number,
        }),
      ),
    ]),
    totalPrice: number,
    handleUpdateAmount: func,
  };

export const useCart = () => {
    const value = useContext(CartContext);
    if(!value) {
        throw new Error(
            'useCart 훅은 CartProvier 컴포넌트 내부에서만 사용 가능합니다.'
        );
    }
    return value;
};

