//import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
//import rootReducer from './redux/reducers'
//import { composeWithDevTools } from "redux-devtools-extension";

//const initialState = {};

//const middleware = [thunk];

//const store = createStore(
//    rootReducer,
//    initialState,
    // applyMiddleware(...middleware)
//    composeWithDevTools(applyMiddleware(...middleware))
//);

//export default store;
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // cualquier otra configuración que necesites
});

export default store;
