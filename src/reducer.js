

export const initialState = {
  cartContents: [],
  user: null
};

export const getCartContentsTotal = (cartContents) =>
  cartContents?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartContents: [...state.cartContents, action.item],
      };
      case 'EMPTY_CART_CONTENTS':
        return {
          ...state,
          cartContents: []
        }

      case 'REMOVE_FROM_CART':
      const index = state.cartContents.findIndex(
        (cartContentsItem) => cartContentsItem.id === action.id
      );
      let newCartContents = [...state.cartContents];
      
      if (index >= 0) {
          newCartContents.splice(index, 1);
      }else{
        console.warn(
          `Can't remove product(id: ${action.id}). This product is not in your basket.`
        )
      }
      return {
        ...state,
        cartContents: newCartContents
      }
      
      case "SET_USER":
      return {
        ...state,
        user: action.user
      }
 

    default:
      return state;
  }
}; 

export default reducer;
