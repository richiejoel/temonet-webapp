import React from "react";
import { Button } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";

import Card from "../../components/Card";
import MenuLeft from "../../components/MenuLeft";
import plane from "../../assets/paper_plane.svg";

import ImageActivityText from "../../assets/svg/quiz_multiple_text.svg";
import ImageActivityGraphics from "../../assets/svg/quiz_multiples-images.svg";

import "./Home.scss";
import "../../styles/theme.scss";

function Home(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <div className={`home ${theme_global.theme}`}>
      <div className="home-top">
        <h1>TEMONET</h1>
        <img id="plane-one" src={plane} alt="plane_one" />
        <div className="resume">
          <p>
            La dislexia se presenta en niños con niveles normales de
            inteligencia y visión. Algunos de los síntomas son el retraso para
            aprender a hablar y leer, y la dificultad para aprender nuevas
            palabras. La mayoría de los niños con dislexia puede salir adelante
            en la escuela con la ayuda de tutores o programas de educación
            especializada.
          </p>
        </div>
      </div>
      <div className="subtitle">
        <h2>Qué es la dislexia?</h2>
      </div>
    </div>
  );
}

export default connect()(Home);
