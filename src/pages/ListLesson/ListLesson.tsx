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
    if (parseInt(sessionStorage.getItem("progressBar")!) < 11) {
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
        total={11}
        size="small"
      />

      <span className="list-title">Lista de Terapias</span>
      <div className="list-lesson__container">
        <Card
          src={ImageActivityText}
          title="Terapia 1"
          description="Significado de la palabra según el contexto"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_1");
          }}
        />
        <Card
          src={ImageActivityGraphics}
          title="Terapia 2"
          description="Formando palabras"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_2");
          }}
        />
        <Card
          src={ImageActivityText}
          title="Terapia 3"
          description="Discriminación visual de una palabra real"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_3");
          }}
        />
      </div>
      <div className="list-lesson__container">
        <Card
          src={ImageActivityText}
          title="Terapia 4"
          description="Formulación de preguntas"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_4");
          }}
        />
        <Card
          src={ImageActivityGraphics}
          title="Terapia 5"
          description="Encontrar letras en palabras"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_5");
          }}
        />
        <Card
          src={ImageActivityText}
          title="Terapia 6"
          description="Miscelánea"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_6");
          }}
        />
      </div>
      <div className="list-lesson__container">
        <Card
          src={ImageActivityText}
          title="Terapia 7"
          description="Miscelánea"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_7");
          }}
        />
        <Card
          src={ImageActivityGraphics}
          title="Terapia 8"
          description="Miscelánea"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_8");
          }}
        />
        <Card
          src={ImageActivityText}
          title="Terapia 9"
          description="Miscelánea"
          min={5}
          percent={`100%`}
          onClick={() => {
            handlerPage("terapia_9");
          }}
        />
      </div>
    </div>
  );
}

export default connect()(ListLesson);
