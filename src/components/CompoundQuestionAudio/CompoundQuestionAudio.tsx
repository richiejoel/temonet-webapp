import React,{ useState, useRef } from "react";
import Word from "../../models/Word";
import * as S from "./styled";
import ReactPlayer from "react-player";
import { Icon } from "semantic-ui-react";
import NoImage from "../../assets/svg/no-audio.svg";

import "./CompoundQuestionAudio.scss";

interface IProps {
  question: string;
  options: Word[];
  onChange: Function;
  questionObject: Word;
}

const byIdAscending: (a: Word, b: Word) => number = (a: Word, b: Word) =>
  a.id - b.id;

const CompoundQuestionImage = ({ question, options, onChange, questionObject }: IProps) => {
  const [availableWords, setAvailableWords] = React.useState<Word[]>([
    ...options,
  ]);
  const [selectedWords, setSelectedWords] = React.useState<Word[]>([]);

  const [playing, setPlaying] = useState<boolean>(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<any>(true);
  const player = useRef<ReactPlayer>(null);

  const selectWord = (option: Word): void => {
    if (option.selected) {
      return;
    }
    option.selected = true;
    const chosenWords: Word[] = [...selectedWords, option];
    const availableWords: Word[] = [
      option,
      ...options.filter((el: Word) => el.id !== option.id),
    ].sort(byIdAscending);
    setAvailableWords(availableWords);
    setSelectedWords(chosenWords);
    getAnswer(chosenWords);
  };

  const deselectWord = (option: Word): void => {
    option.selected = false;
    const chosenWords: Word[] = selectedWords.filter(
      (el: Word) => el.id !== option.id
    );
    const availableWords: Word[] = [
      option,
      ...options.filter((el: Word) => el.id !== option.id),
    ].sort(byIdAscending);
    setAvailableWords(availableWords);
    setSelectedWords(chosenWords);
    getAnswer(chosenWords);
  };

  const getAnswer = (selectedWords: Word[]): void => {
    onChange(selectedWords);
  };

  const onStart = () => {
    setPlaying(true);
  };

  const onPause = () => {
    setPlaying(false);
  };

  const onProgress = (data) => {
    console.log(`Harry `);
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
      <S.QuestionRow>
      <h1>{questionObject.terapia}</h1>
        <h1>{questionObject.title_terapia}</h1>
        <h3>{questionObject.instructions}</h3>
        <h3>{question}</h3>
      </S.QuestionRow>
      <div className="content-audio">
        <div className="audio-lesson">
          <img className="img-audio-fix" src={NoImage} alt="audio-lesson-fix" />
          <div className={`player-lesson-audio`}>
            <ReactPlayer
              ref={player}
              url={questionObject.audio}
              className="play-audio-div"
              playing={playing}
              onSeek={(e) => console.log("onSeek", e)}
              onProgress={(e) => onProgress(e)}
              loop={true}
            />
            <input
              className="seek-player-audio"
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
                className="pause-audio"
                name="pause circle outline"
              />
            ) : (
              <Icon
                onClick={onStart}
                className="play-audio"
                name="play circle outline"
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <S.AvailableWordsContainer>
          {availableWords.map((option: Word) => (
            <S.WordBox
              key={option.id}
              selected={option.selected}
              onClick={() => selectWord(option)}
            >
              {option.text}
            </S.WordBox>
          ))}
        </S.AvailableWordsContainer>
      </div>
      <div>
        <S.SelectedWordsContainer>
          <S.SelectedWordsBox>
            {selectedWords.map((option: Word) => (
              <S.WordBox
                key={option.id}
                selected={false}
                onClick={() => deselectWord(option)}
              >
                {option.text}
              </S.WordBox>
            ))}
          </S.SelectedWordsBox>
        </S.SelectedWordsContainer>
      </div>
    </div>
  );
};

(CompoundQuestionImage as any).whyDidYouRender = true;

export default CompoundQuestionImage;
