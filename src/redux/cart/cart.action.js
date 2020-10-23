import CartActionType from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const AddItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item
});

export const CleartItemfromcart = item => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
});