import { ADD_PRODUCTS, ADD_QUANTITY, REMOVE_QUANTITY } from "./ActionTypes";
export const addProducts =(product)=>{
  return {
    type : ADD_PRODUCTS,
    payload :product
  }
}
 

export const addQuantity = (productId,quantity)=>{
  return{
    type:ADD_QUANTITY,
    payload :{
      productId,
      quantity
    }
  }
}

export const removeQuantity = (productId)=>{
  return{
    type: REMOVE_QUANTITY,
    payload: productId
    
    
  }
}