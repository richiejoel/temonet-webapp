import React from "react";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import ImgLessonFinished from "../../assets/svg/lesson-finished.svg";

import "./LessonFinished.scss";
import "../../styles/theme.scss";

function LessonFinished(): JSX.Element {
  const location: any = useLocation();
  const history = useHistory();
  const theme_global = useSelector((state: any) => state.theme_global);

  const handlerPageTherapies = () => {
    history.push({
      pathname: "/listLesson",
    });
  }

  return (
    <div className={`lesson-finished ${theme_global.theme}`}>
      <h2 className={`lesson-finished-title`}>Lección finalizada</h2>
      <h3>Número de preguntas contestadas: {location?.state?.questions} </h3>
      <img
        id="image-lesson-finished"
        src={ImgLessonFinished}
        alt="lesson-finished"
      />
      <Button className="btn-go" onClick={handlerPageTherapies}>Ir a mis Terapias</Button>
    </div>
  );
}

export default connect()(LessonFinished);
