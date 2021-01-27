import React from "react";
import { connect, useDispatch } from "react-redux";

import {
  mChangeThemeYellowAction,
  mChangeThemeBlueAction,
  mChangeThemeRedAction,
  mChangeThemePurpleAction,
  mChangeThemeGreenAction,
} from "../../redux/actions/ChangeThemeAction";

import "./SwitchTheme.scss";

function SwitchTheme(): JSX.Element {
  const dispatch = useDispatch();
  return (
    <div className="switch-theme">
      <h3>Themes</h3>
      <div className="content">
        <div
          className="color-circle"
          onClick={() => {
            dispatch(mChangeThemeYellowAction("yellow"));
          }}
        ></div>
        <div
          className="color-circle"
          onClick={() => {
            dispatch(mChangeThemeBlueAction("blue"));
            console.log("Entro xd");
          }}
        ></div>
        <div
          className="color-circle"
          onClick={() => {
            dispatch(mChangeThemeRedAction("red"));
          }}
        ></div>
        <div
          className="color-circle"
          onClick={() => {
            dispatch(mChangeThemePurpleAction("purple"));
          }}
        ></div>
        <div
          className="color-circle"
          onClick={() => {
            dispatch(mChangeThemeGreenAction("green"));
          }}
        ></div>
      </div>
    </div>
  );
}

export default connect(null)(SwitchTheme);
