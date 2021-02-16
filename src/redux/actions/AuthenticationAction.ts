import {
    AUTH_STUDENT,
    AUTH_TEACHER,
    AUTH_ADMIN
  } from "../constants/ReduxConstants";


export const mVerifyAuthenticationStudent = (auth:string):Object => {
    return {
        type: AUTH_STUDENT,
        payload: auth
    };
}

export const mVerifyAuthenticationTeacher = (auth:string):Object => {
    return {
        type: AUTH_TEACHER,
        payload: auth
    };
}

export const mVerifyAuthenticationAdmin = (auth:string):Object => {
    return {
        type: AUTH_ADMIN,
        payload: auth
    };
}
