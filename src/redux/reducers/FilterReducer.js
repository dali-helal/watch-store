import {ActionTypes} from "../constants/ActionFilter"
const initialState = {
    PropFilter:{}
  }
export const FilterReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_PROP_FILTER :
            return {
                ...state,PropFilter :action.payload
        }
        default :
        return state
    }
}
