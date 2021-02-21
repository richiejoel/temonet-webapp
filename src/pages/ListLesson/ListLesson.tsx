import React from "react";
import Card from "../../components/Card";
import { Progress } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import ImageActivityText from "../../assets/svg/quiz_multiple_text.svg";
import ImageActivityGraphics from "../../assets/svg/quiz_multiples-images.svg";

import "./ListLesson.scss";
import "../../styles/theme.scss";

function ListLesson(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  const history = useHistory();
  var valueProgress: number = parseInt(sessionStorage.getItem("progressBar")!);
  const handlerPage = (typeLesson: string) => {
    console.log("Joel");
    if (parseInt(sessionStorage.getItem("progressBar")!) < 9) {
      valueProgress++;
      sessionStorage.setItem("progressBar", valueProgress.toString());
    }
    history.push({
      pathname: "/lessonReady",
      state: {
        typeLesson: typeLesson,
      },
    });
  };
  return (
    <div className={`list-lesson ${theme_global.theme}`}>
      <Progress
        progress="percent"
        value={parseInt(sessionStorage.getItem("progressBar")!)}
        total={9}
        size="small"
      />

      <span className="list-title">Lista de actividades</span>
      <div className="list-lesson__container">
        <Card
          src={ImageActivityText}
          title="Comprensión Oral"
          description="Actividad para mejorar su comprensión oral."
          onClick={() => {
            handlerPage("oral");
          }}
        />
        <Card
          src={ImageActivityGraphics}
          title="Lógica Matemática"
          description="Actividad para evaluar su lógica matemática."
          onClick={() => {
            handlerPage("matematica");
          }}
        />
        <Card
          src={ImageActivityText}
          title="Comprensión Escrita"
          description="Actividad para mejorar su comprensión escrita."
          onClick={() => {
            handlerPage("escrita");
          }}
        />
      </div>
      <div className="list-lesson__container">
        <Card
          src={ImageActivityText}
          title="Ortografía"
          description="Actividad para evaluar su ortografía."
          onClick={() => {
            handlerPage("ortografia");
          }}
        />
        <Card
          src={ImageActivityGraphics}
          title="Entorno natural y social"
          description="Actividad para evaluar su entorno natural."
          onClick={() => {
            handlerPage("social");
          }}
        />
        <Card
          src={ImageActivityText}
          title="Lenguaje y comunicación"
          description="Actividad para evaluar su la lengua española."
          onClick={() => {
            handlerPage("lenguaje");
          }}
        />
      </div>
      <div className="list-lesson__container">
        <Card
          src={ImageActivityText}
          title="Geometría"
          description="Actividad para evaluar su lógica matemática."
          onClick={() => {
            handlerPage("geometria");
          }}
        />
        <Card
          src={ImageActivityGraphics}
          title="Historia"
          description="Actividad para mejorar su conocimiento en historia."
          onClick={() => {
            handlerPage("historia");
          }}
        />
        <Card
          src={ImageActivityText}
          title="Geografía"
          description="Actividad para evaluar su conocimiento en geografía."
          onClick={() => {
            handlerPage("geografia");
          }}
        />
      </div>
    </div>
  );
}

export default connect()(ListLesson);
