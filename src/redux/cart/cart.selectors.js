import { createSelector } from 'reselect'

const selectCart = state => state.cart


export  const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
    )

export  const selectCartItemsCount = createSelector(

    [selectCartItems],
    cartItems => {
        console.log('i have been called')
        return cartItems.reduce(
            (
                accumalatedQuantity, cartItems
            ) => accumalatedQuantity +cartItems.quantity
            ,0)


        })






























//import { createSelector } from 'reselect';
//
// const selectCart = state => state.cart;
//
// export const selectCartItems = createSelector(
//   [selectCart],
//   cart => cart.cartItems
// );
//export const selectCartHidden = createSelector(
//   [selectCart],
//   cart => cart.hidden
// );
//
// export const selectCartItemsCount = createSelector(
//   [selectCartItems],
//   cartItems =>
//     cartItems.reduce(
//       (accumalatedQuantity, cartItem) =>
//         accumalatedQuantity + cartItem.quantity,
//       0
//     )
// );