import React, { useState, useRef } from "react";
import Word from "../../models/Word";
import * as S from "./styled";
import ReactPlayer from "react-player";
import { Icon } from "semantic-ui-react";
import NoImage from "../../assets/svg/no-audio.svg";

import "./GuestQuestionVideoSecond.scss";

interface IProps {
  options: Word[];
  question: string;
  onChange: Function;
  questionObject: Word;
}

const GuessQuestionVideo = ({
  question,
  options,
  onChange,
  questionObject,
}: IProps) => {
  const [localQuestion] = React.useState(question);
  const [localOptions, setLocalOptions] = React.useState([...options]);

  const [playing, setPlaying] = useState<boolean>(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<any>(true);
  const player = useRef<ReactPlayer>(null);

  const getAnswer = (option: Word) => {
    cleanSelectedAnswers();
    const newOptions = [
      ...localOptions.filter((o) => o.id !== option.id),
      option,
    ].sort((a, b) => a.id - b.id);
    setLocalOptions(newOptions);
    option.selected = true;
    onChange(option);
  };

  const cleanSelectedAnswers = () => {
    options.forEach((option: Word) => {
      option.selected = false;
    });
  };

  const onStart = () => {
    setPlaying(true);
  };

  const onPause = () => {
    setPlaying(false);
  };

  const onProgress = (data) => {
    console.log(`Harr `);
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
    console.log(`Harry`);
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    player?.current?.seekTo(parseFloat(e.target.value))!;
  };
  //https://www.youtube.com/watch?v=XXYlFuWEuKI
  //http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
  return (
    <div>
      <S.LocalQuestionRow>
      <h1>{questionObject.terapia}</h1>
        <h1>{questionObject.title_terapia}</h1>
        <h3>{questionObject.instructions}</h3>
        <h3>{questionObject.instructions_text}</h3>
      </S.LocalQuestionRow>
      <div className="content-video">
        <div className="video-lesson">
          <div className={`player-lesson-video`}>
            <ReactPlayer
              ref={player}
              url={questionObject.video}
              className="play-video-div"
              playing={playing}
              onSeek={(e) => console.log("onSeek", e)}
              onProgress={(e) => onProgress(e)}
              loop={true}
            />
            <input
              className="seek-player-video"
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
                className="pause-video-std"
                name="pause circle outline"
              />
            ) : (
              <Icon
                onClick={onStart}
                className="play-video-std"
                name="play circle outline"
              />
            )}
          </div>
        </div>
      </div>
      <S.LocalQuestionRow>
        <h2>{localQuestion}</h2>
      </S.LocalQuestionRow>
      <S.QuestionsContainer>
        {localOptions.map((option: any) => (
          <S.QuestionContainer key={option.id}>
            <S.QuestionOption
              selected={option.selected}
              onClick={() => getAnswer(option)}
            >
              {option.text}
            </S.QuestionOption>
          </S.QuestionContainer>
        ))}
      </S.QuestionsContainer>
    </div>
  );
};

(GuessQuestionVideo as any).whyDidYouRender = true;

export default GuessQuestionVideo;
