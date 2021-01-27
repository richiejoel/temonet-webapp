import {
    CHANGE_TO_YELLOW,
    CHANGE_TO_BLUE,
    CHANGE_TO_RED,
    CHANGE_TO_PURPLE,
    CHANGE_TO_GREEN
  } from "../constants/ReduxConstants";

//Actions to update theme
/*const changeToYellowTheme = () => {
    return {
      type: CHANGE_TO_YELLOW
    };
  };*/

export const mChangeThemeYellowAction = (theme:string):Object => {
    return {
        type: CHANGE_TO_YELLOW,
        payload: theme
    };
}

export const mChangeThemeBlueAction = (theme:string):Object => {
  return {
      type: CHANGE_TO_BLUE,
      payload: theme
  };
}

export const mChangeThemeRedAction= (theme:string):Object => {
  return {
      type: CHANGE_TO_RED,
      payload: theme
  };
}

export const mChangeThemePurpleAction = (theme:string):Object => {
  return {
      type: CHANGE_TO_PURPLE,
      payload: theme
  };
}

export const mChangeThemeGreenAction = (theme:string):Object => {
  return {
      type: CHANGE_TO_GREEN,
      payload: theme
  };
}
  