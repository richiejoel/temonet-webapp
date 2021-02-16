import {
    IS_AUTHENTICATE
  } from "../constants/ReduxConstants";

  export const mVerifyAuthenticate = (authenticate:boolean):Object => {
    return {
        type: IS_AUTHENTICATE,
        payload: authenticate
    };
}