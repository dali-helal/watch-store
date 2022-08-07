import { ActionTypes } from "../constants/action-types";
import produce from "immer";
const initialState = {
    products: [], 
    quantity: 0,
    total: 0
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
            draftState.total = parseFloat(draftState.total) + parseFloat(Product.price);
            draftState.quantity++;
          }
          else 
          {
            draftState.products.push(Product);
            draftState.quantity++;
            draftState.total = parseFloat(draftState.total) + parseFloat(Product.price);
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
            draftState.quantity--;
            draftState.total -= parseFloat(item.price);
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
          draftState.quantity++;
          draftState.total += parseFloat(item.price);
        })
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return produce(state,(draftState)=>{
                let id = action.payload;
                let item = draftState.products.find((product) => product.id === id);
                draftState.products = draftState.products.filter((product) => product.id !== id);
                draftState.quantity-=item.quantity
                draftState.total -= parseFloat(item.price * item.quantity)
            })
      default:
        return state;
    }
  }
  
