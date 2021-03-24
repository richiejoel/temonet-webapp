import React from "react";
import { connect, useSelector } from "react-redux";
import * as S from "./styled";
import "../../styles/theme.scss";

const ProgressBar = ({ progress = 0 }) => {
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <React.Fragment>
      <S.ProgressBar
        className={theme_global.theme}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        width={progress}
      ></S.ProgressBar>
      <div>
        <span>{progress}%</span>
      </div>
    </React.Fragment>
  );
};

export default connect()(ProgressBar);
