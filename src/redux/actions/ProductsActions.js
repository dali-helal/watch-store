import {ActionTypes} from "../constants/action-types"

export const addProduct=(product)=>{
    return {
        type : ActionTypes.ADD_PRODUCT,
        payload : product
    }
}
export const removeSelectedProduct=(id)=>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload :id
    }
}
export const decrementQuantity = (id)=>{
    return({
      type:ActionTypes.DECREMENT_QUANTITY,
      payload:id
    })
  }
  
  export const incrementQuantity = (id)=>{
    return({
      type:ActionTypes.INCREMENT_QUANTITY,
      payload:id
    })
  }
