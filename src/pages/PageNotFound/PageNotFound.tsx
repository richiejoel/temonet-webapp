import React from "react";
import { connect, useSelector } from "react-redux";
import ImageNotFound from "../../assets/svg/astronaut_moon.svg";

import "./PageNotFound.scss";
import "../../styles/theme.scss";

function PageNotFound(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <div className={`page-not-found ${theme_global.theme}`}>
      <h2 className={`title-found`}>Error 404</h2>
      <h2 className="resume-found">Page Not Found</h2>
      <img id="image-not-found" src={ImageNotFound} alt="imageNotFound" />
    </div>
  );
}

export default connect()(PageNotFound);
