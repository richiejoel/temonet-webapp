import React, { useState, useRef } from "react";
import Word from "../../models/Word";
import * as S from "./styled";
import ReactPlayer from "react-player";
import { Icon } from "semantic-ui-react";
import NoImage from "../../assets/svg/no-audio.svg";

import "./GuestQuestionImages.scss";

interface IProps {
  options: Word[];
  question: string;
  onChange: Function;
  questionObject: Word;
}

const GuessQuestionImages = ({
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


  return (
    <div>
      <S.LocalQuestionRow>
        <h2>{localQuestion}</h2>
      </S.LocalQuestionRow>
      <div className="content-image">
        {
          questionObject.num_images === 1 ? (
            <div className="image-lesson">
              <h3>{questionObject.name_one}</h3>
              <img
                className="img-image-fix"
                src={questionObject.image_one}
                alt="lesson-fix-figure"
              />
            </div>
          ) : questionObject.num_images === 2 ? (
            <>
             <div className="image-lesson">
          <h3>{questionObject.name_one}</h3>
          <img
            className="img-image-fix"
            src={questionObject.image_one}
            alt="lesson-fix-figure"
          />
        </div>
        <div className="image-lesson">
          <h3>{questionObject.name_two}</h3>
          <img
            className="img-image-fix"
            src={questionObject.image_two}
            alt="lesson-fix-figure"
          />
        </div>
            </>
          ) : questionObject.num_images === 3 ? (
            <>
            <div className="image-lesson">
          <h3>{questionObject.name_one}</h3>
          <img
            className="img-image-fix"
            src={questionObject.image_one}
            alt="lesson-fix-figure"
          />
        </div>
        <div className="image-lesson">
          <h3>{questionObject.name_two}</h3>
          <img
            className="img-image-fix"
            src={questionObject.image_two}
            alt="lesson-fix-figure"
          />
        </div>
        <div className="image-lesson">
          <h3>{questionObject.name_three}</h3>
          <img
            className="img-image-fix"
            src={questionObject.image_three}
            alt="lesson-fix-figure"
          />
        </div>
            </>
          ) : (
            <>
            </>
          )
        }
        
      </div>
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

(GuessQuestionImages as any).whyDidYouRender = true;

export default GuessQuestionImages;
