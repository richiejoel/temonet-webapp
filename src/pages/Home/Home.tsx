import React, { useState, useRef } from "react";
import { connect, useSelector } from "react-redux";
import CardInfo from "../../components/CardInfo";
import plane from "../../assets/paper_plane.svg";
import ReactPlayer from "react-player";
import { Icon } from "semantic-ui-react";

import ImageActivityText from "../../assets/svg/quiz_multiple_text.svg";
import ImageActivityGraphics from "../../assets/svg/quiz_multiples-images.svg";

import "./Home.scss";
import "../../styles/theme.scss";

function Home(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  const [playing, setPlaying] = useState<boolean>(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<any>(true);
  const player = useRef<ReactPlayer>(null);

  const onStart = () => {
    setPlaying(true);
  };

  const onPause = () => {
    setPlaying(false);
  };

  const onProgress = (data) => {
    console.log(`Joel `);
    console.log(data);
    setPlayedSeconds(data.playedSeconds);
    setTotalSeconds(data.loadedSeconds);
    setSeeking(data);
    setPlayed(data.played);
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
    console.log(`Harry Styles`);
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    player?.current?.seekTo(parseFloat(e.target.value))!;
  };

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
        <h2>¿Qué es la dislexia?</h2>
      </div>
      <div className="content-video-home">
        <div className="video-lesson-home">
          <div className={`player-lesson-video-home`}>
            <ReactPlayer
              ref={player}
              url={`https://www.youtube.com/watch?v=eJQdnM5pOvU`}
              className="play-video-div-home"
              playing={playing}
              onSeek={(e) => console.log("onSeek", e)}
              onProgress={(e) => onProgress(e)}
              loop={true}
            />
            <input
              className="seek-player-video-home"
              type="range"
              min={0}
              max={0.999999}
              step="any"
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={(e) => {
                handleSeekChange(e);
              }}
              onMouseUp={handleSeekMouseUp}
            />
            {playing ? (
              <Icon
                onClick={onPause}
                className="pause-video-std-home"
                name="pause circle outline"
              />
            ) : (
              <Icon
                onClick={onStart}
                className="play-video-std-home"
                name="play circle outline"
              />
            )}
          </div>
        </div>
      </div>
      <div className="home-items">
        <ul>
          <li>La dislexia es una condición común que dificulta leer.</li>
          <li>
            Algunos expertos creen que entre el 5% y el 10% de la población la
            tiene. Otros dicen que el 17% de las personas muestran señales de
            problemas con la lectura.
          </li>
          <li>
            Personas de cualquier edad pueden ser evaluadas para la dislexia,
            aunque las pruebas para adultos son diferentes que las de los niños.
          </li>
        </ul>
      </div>
      <div className="subtitle">
        <h2>¿Qué tipos de dislexia existen?</h2>
      </div>
      <div className="home-bottom">
        <CardInfo
          title="Dislexia superficial"
          description="Se ve afectada por la ruta léxica, por lo que se tiende a leer letra a letra. Estas personas tienen más dificultad para leer palabras con el mismo sonido pero que se escriben diferente"
        />
        <CardInfo
          title="Dislexia fonológica"
          description="Se ve afectada la ruta fonológica, por lo que se tiende a leer la palabra de un golpe. Estas personas tienen más dificultad para leer palabras que no conocen o palabras que no existen"
        />
      </div>
      <div className="home-bottom-two">
        <CardInfo
          title="Dislexia mixta"
          description="Se ven afectadas ambas rutas, por lo que la persona tendría las dificultades tanto de un tipo como del otro"
        />
      </div>
      <div className="footer-home">
        <p id="final-resume">
          La dislexia no se cura, pero existen enfoques de enseñanza y
          estrategias que pueden ayudar a mejorar las habilidades lectoras.
        </p>
        <p id="final-text">
          NO ES MENOS INTELIGENCIA, ES DISTINTA DECODIFICACIÓN
        </p>
      </div>
    </div>
  );
}

export default connect()(Home);
