import {ActionTypes} from "../constants/ActionFilter"
export const addPropFilter=(Filter)=>{
       return {
        type : ActionTypes.ADD_PROP_FILTER,
        payload : Filter
       }
}