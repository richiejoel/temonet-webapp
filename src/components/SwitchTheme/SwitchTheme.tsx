import React from "react";

import "./SwitchTheme.scss";

export default function SwitchTheme(): JSX.Element {
  return (
    <div className="switch-theme">
      <h3>Themes</h3>
      <div className="content">
        <div className="color-circle"></div>
        <div className="color-circle"></div>
        <div className="color-circle"></div>
        <div className="color-circle"></div>
        <div className="color-circle"></div>
      </div>
    </div>
  );
}
