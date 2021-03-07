import React from "react";
import Word from "../../models/Word";
import * as S from "./styled";

import "./CompoundQuestionImageSecond.scss";

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

  return (
    <div>
      <S.QuestionRow>
      <h1>{questionObject.terapia}</h1>
        <h1>{questionObject.title_terapia}</h1>
        <h3>{questionObject.instructions}</h3>
        <h3>{question}</h3>
      </S.QuestionRow>
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
    </div>
  );
};

(CompoundQuestionImage as any).whyDidYouRender = true;

export default CompoundQuestionImage;
