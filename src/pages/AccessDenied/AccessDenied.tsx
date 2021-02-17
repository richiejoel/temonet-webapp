import React from "react";
import { connect, useSelector } from "react-redux";
import ImageAccessDenied from "../../assets/svg/access_denied.svg";

import "./AccessDenied.scss";
import "../../styles/theme.scss";

function AccessDenied(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <div className={`access-denied ${theme_global.theme}`}>
      <h2 className={`title-denied`}>Error 403</h2>
      <h2 className="resume-denied">Access Denied</h2>
      <img
        id="image-access-denied"
        src={ImageAccessDenied}
        alt="imageAccessDenied"
      />
    </div>
  );
}

export default connect()(AccessDenied);
