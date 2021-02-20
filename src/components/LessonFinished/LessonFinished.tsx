import React from "react";
import { connect, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ImgLessonFinished from "../../assets/svg/lesson-finished.svg";

import "./LessonFinished.scss";
import "../../styles/theme.scss";

function LessonFinished(): JSX.Element {
  const location: any = useLocation();
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <div className={`lesson-finished ${theme_global.theme}`}>
      <h2 className={`lesson-finished-title`}>Lección finalizada</h2>
      <h2 className="lesson-finished-resume">
        En el trancurso de la semana el profesor subirá su calificación.
      </h2>
      <h3>Número de preguntas contestadas: {location?.state?.questions} </h3>
      <img
        id="image-lesson-finished"
        src={ImgLessonFinished}
        alt="lesson-finished"
      />
    </div>
  );
}

export default connect()(LessonFinished);
