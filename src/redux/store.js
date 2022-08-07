import { legacy_createStore as createStore } from "redux";
import {persistStore,persistReducer} from "redux-persist"
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import ReduxThunk from "redux-thunk"
import reducers from "./reducers/index";
import storage from 'redux-persist/lib/storage'

const persistConfig={
   key :'persist-key',
   storage
}
const persistedReducer=persistReducer(persistConfig,reducers)
const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));
export const persistor=persistStore(store)
export default store;