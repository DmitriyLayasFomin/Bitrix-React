import rootReducer from "./indexReducer.js";
import { createStore, applyMiddleware } from 'redux';


export const store = createStore(rootReducer);



