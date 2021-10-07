import types from "../type";

const initial_state = {
useeData :{}
}

export default function(state=initial_state,action){
        switch (action.type) {
               case  types.LOGIN:
               const data = actions.payload
          return{userData:data}
       default:
        return{...state}
}
}