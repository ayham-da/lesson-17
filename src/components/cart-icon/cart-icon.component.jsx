import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStatetoProps = state => ({
        itemCount: selectCartItemsCount(state)

})




export default connect(
    mapStatetoProps,
  mapDispatchToProps
)(CartIcon);







//const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce(
//         (accumalatedQuantity, cartItem) =>
//             accumalatedQuantity + cartItem.quantity,
//         0
//     )
// });

//const mapStateToProps = state => ({
//   itemCount: selectCartItemsCount(state)
// });