import {combineReducers} from "redux";
import { cartreducer } from "./reducer";
import {searchReducer} from './searchReducer'

const rootred = combineReducers({
    cartreducer,
    searchReducer
});

export default rootred
