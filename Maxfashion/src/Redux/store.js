import { legacy_createStore ,applyMiddleware, compose, combineReducers } from "redux";
import { dataReducer} from "./Fetchdata/data.reducer";
import thunk from "redux-thunk"
import { authReducer } from "./Auth/auth.reducer";
import { addCartReducer, deleteCartReducer, getCartReducer } from "./Cart/cart.reducer";
const rootReducer = combineReducers({
    data: dataReducer,
    auth:authReducer,
    getCartData:getCartReducer,
    addCartData:addCartReducer,
    deleteCartData:deleteCartReducer
})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));