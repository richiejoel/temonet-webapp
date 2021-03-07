import React from "react";
import Word from "../../models/Word";
import * as S from "./styled";

interface IProps {
  options: Word[];
  question: string;
  onChange: Function;
  questionObject: Word;
}

const GuessQuestionSecond = ({ question, options, onChange, questionObject }: IProps) => {
  const [localQuestion] = React.useState(question);
  const [localOptions, setLocalOptions] = React.useState([...options]);

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

  return (
    <div>
      <S.LocalQuestionRow>
        <h1>{questionObject.terapia}</h1>
        <h1>{questionObject.title_terapia}</h1>
        <h3>{questionObject.instructions}</h3>
        <h3>{questionObject.instructions_text}</h3>
        <p>{questionObject.history}</p>
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

//(GuessQuestionSecond as any).whyDidYouRender = true;

export default GuessQuestionSecond;
