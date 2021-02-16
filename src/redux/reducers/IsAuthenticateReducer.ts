import {
    IS_AUTHENTICATE
  } from "../constants/ReduxConstants";

  const default_authenticate_global = {
    authenticate: false
  };

  const authenticate_global = (state=default_authenticate_global, action:any ) => {
    switch(action.type){
        case IS_AUTHENTICATE: {
            return {
                ...state,
                authenticate: action.payload
            };
        }

        default: return state;
    }
  }

  export default authenticate_global;