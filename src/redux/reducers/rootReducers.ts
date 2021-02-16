import { combineReducers } from "redux";
import theme_global from "./ChangeThemeReducer";
import auth_global from "./AuthenticationReducer";
import authenticate_global from "./IsAuthenticateReducer";

const rootReducers = combineReducers({
  theme_global,
  auth_global,
  authenticate_global
  });

  export default rootReducers;