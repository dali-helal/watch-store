import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store,{persistor} from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
const route=ReactDOM.createRoot(document.getElementById('root'))
route.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <App/>
      </PersistGate>
    </Provider>
);