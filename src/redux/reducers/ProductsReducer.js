import { ActionTypes } from "../constants/action-types";
import produce from "immer";
const initialState = {
    products: [], 
    Quantity: 0,
    totalPrice: 0
  }
  
  export const productsReducer = (state = initialState, action) => {
    switch (action.type) 
    {
      case ActionTypes.ADD_PRODUCT:
        return produce(state, (draftState) => {
            
          const Product = action.payload;
  
          const item = draftState.products.find((element) => element.id === Product.id);
  
          if (item) 
          {
            item.quantity++;
            draftState.totalPrice = parseFloat(draftState.totalPrice) + parseFloat(Product.price);
            draftState.Quantity++;
          }
          else 
          {
            draftState.products.push(Product);
            draftState.Quantity++;
            draftState.totalPrice = parseFloat(draftState.totalPrice) + parseFloat(Product.price);
          }
        });
      case ActionTypes.DECREMENT_QUANTITY:
        return produce(state, (draftState) => {
          let id = action.payload;
  
          let item = draftState.products.find((product) => product.id === id);
         if(item.quantity>1)
          {
            draftState.products.forEach((product) => {
              if (product.id === id) 
              {
                product.quantity--;
              }
            })
            draftState.Quantity--;
            draftState.totalPrice-= parseFloat(item.price);
          }
  
        })
      case ActionTypes.INCREMENT_QUANTITY:
        return produce(state, (draftState) => {
          let id = action.payload;
  
          let item = draftState.products.find((product) => product.id === id);
  
          draftState.products.forEach((product) => {
            if (product.id === id) 
            {
              product.quantity++;
            }
          })
          draftState.Quantity++;
          draftState.totalPrice+= parseFloat(item.price);
        })
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return produce(state,(draftState)=>{
                let id = action.payload;
                let item = draftState.products.find((product) => product.id === id);
                draftState.products = draftState.products.filter((product) => product.id !== id);
                draftState.Quantity-=item.quantity
                draftState.totalPrice-= parseFloat(item.price * item.quantity)
            })
      default:
        return state;
    }
  }
  
