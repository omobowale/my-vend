import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from "./reducer";

export default function(initialState = {}) {

    const enhancers = [applyMiddleware(thunk)];

    const store = createStore(rootReducer, initialState, compose(...enhancers));
    
    return store;
}

