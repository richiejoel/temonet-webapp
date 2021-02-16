import {
    AUTH_STUDENT,
    AUTH_TEACHER,
    AUTH_ADMIN
  } from "../constants/ReduxConstants";

  const default_auth_global = {
    auth: "student"
  };

  const auth_global = (state=default_auth_global, action:any ) => {
    switch(action.type){
        case AUTH_STUDENT: {
            return {
                ...state,
                auth: action.payload
            };
        }

        case AUTH_TEACHER: {
            return {
                ...state,
                auth: action.payload
            };
        }

        case AUTH_ADMIN: {
            return {
                ...state,
                auth: action.payload
            };
        }

        default: return state;
    }
  }

  export default auth_global;