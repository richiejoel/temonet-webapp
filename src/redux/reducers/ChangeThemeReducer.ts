import {
    CHANGE_TO_YELLOW,
    CHANGE_TO_BLUE,
    CHANGE_TO_RED,
    CHANGE_TO_PURPLE,
    CHANGE_TO_GREEN
  } from "../constants/ReduxConstants";

  const default_theme_global = {
    theme: "purple"
  };

  const theme_global = (state=default_theme_global, action:any ) => {
    switch(action.type){
        case CHANGE_TO_YELLOW: {
            return {
                ...state,
                theme: action.payload
            };
        }

        case CHANGE_TO_BLUE: {
            return {
                ...state,
                theme: action.payload
            };
        }

        case CHANGE_TO_RED: {
            return {
                ...state,
                theme: action.payload
            };
        }

        case CHANGE_TO_PURPLE: {
            return {
                ...state,
                theme: action.payload
            };
        }

        case CHANGE_TO_GREEN: {
            return {
                ...state,
                theme: action.payload
            };
        }

        default: return state;
    }
  }

  export default theme_global;

