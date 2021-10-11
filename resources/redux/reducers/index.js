import types  from "../type";
import { combineReducers } from "redux";
import auth from "./auth"

const appReducer = combineReducers({
   auth,
})

const rootReducer = (state,action)=>{
if(action.type == types.CLEAR_REDUX_STATE){
      state=undefined
}
return appReducer (state,action)
}
export default rootReducer