import { ADD_TO_CART,REMOVE_FROM_CART,DECREASE_QUANTITY,INCREASE_QUANTITY } from "./CartActionTypes";

export const addToCart = (product)=>{
  return{
    type:ADD_TO_CART,
    payload :product
  }
}
export const removeFromeCart = (productId)=>{
  return{
    type:REMOVE_FROM_CART,
    payload :productId
  }
}
export const increaseQuantity = (productId)=>{
  return{
    type:INCREASE_QUANTITY,
    payload :productId
  }
}
export const decreaseQuantity = (productId)=>{
  return{
    type:DECREASE_QUANTITY,
    payload :productId
  }
}