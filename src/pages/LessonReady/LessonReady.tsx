import React from "react";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { RouteComponentProps, useHistory, useLocation } from "react-router";
import CompoundQuestion from "../../components/CompoundQuestion";
import CompoundQuestionImage from "../../components/CompoundQuestionImage";
import CompoundQuestionImageSecond from "../../components/CompoundQuestionImageSecond";
import GuessQuestionAudio from "../../components/GuestQuestionAudio";
import GuessQuestionImages from "../../components/GuestQuestionImages";
import GuessQuestionVideo from "../../components/GuestQuestionVideo";
import GuessQuestionVideoSecond from "../../components/GuestQuestionVideoSecond";
import GuessQuestion from "../../components/GuessQuestion";
import GuessQuestionSecond from "../../components/GuessQuestionSecond";
import Loading from "../../components/Loading";
import ProgressBar from "../../components/ProgressBar";
import Answer from "../../models/Answer";
import Word from "../../models/Word";
import http from "../../utils/http";
import * as S from "./styled";
//import { Logger, ConsoleLogger } from "react-console-logger";
import Data from "../../data/lesson.json";
import Data1 from "../../data/terapia_1.json";
import Data2 from "../../data/terapia_2.json";
import Data3 from "../../data/terapia_3.json";
import Data4 from "../../data/terapia_4.json";
import Data5 from "../../data/terapia_5.json";
import Data6 from "../../data/terapia_6.json";
import "../../styles/theme.scss";

function generateJSON(location): any {
 
  if(location?.state?.typeLesson === "terapia_1"){
    const data = JSON.stringify(Data1);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  } else if(location?.state?.typeLesson === "terapia_2"){
    const data = JSON.stringify(Data2);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  } else if(location?.state?.typeLesson === "terapia_3"){
    const data = JSON.stringify(Data3);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  } else if(location?.state?.typeLesson === "terapia_4"){
    const data = JSON.stringify(Data4);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  } else if(location?.state?.typeLesson === "terapia_5"){
    const data = JSON.stringify(Data5);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  } else if(location?.state?.typeLesson === "tearapia_6"){
    const data = JSON.stringify(Data6);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  } else {
    const data = JSON.stringify(Data);
    const dataJSON = JSON.parse(data);
    return dataJSON;
  }
  
}

const LessonReady = (props: RouteComponentProps) => {
  const [answers, setAnswers] = React.useState<Answer[]>([]);
  const [isCorrect, setCorrect] = React.useState(true);
  const location: any = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [disabledCheckButton, setDisabledCheckButton] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [questions, setQuestions] = React.useState<Word[]>(generateJSON(location));
  const [visibleAnswerBox, setVisibleAnswerBox] = React.useState(false);
  const isButtonDisabled = () => disabledCheckButton && !answers.length;
  const dispatch = useDispatch();
  const history = useHistory();
  

  //setQuestions(prueba());
  //const myLogger = new Logger();

  //myLogger.log("holaa");

  /*const dispatchReachGoal = React.useCallback(
    () => dispatch(actions.reachGoal()),
    [dispatch]
  );*/

  /*React.useEffect(() => {
    const { id } = props.match.params as any;
    http
      .get(`${process.env.REACT_APP_API}/lessons/${id}/questions`)
      .then((response: AxiosResponse) => {
        setQuestions(response.data);
      });
  }, [props.match.params]);*/

  /*http
    .get(`https://duopettaja-api.herokuapp.com/lessons/1/questions`)
    .then((response: AxiosResponse) => {
      setQuestions(response.data);
      console.log(`RICHIII`);
    });*/

  const getAnswer = (answer: any) => {
    if (questions[currentQuestionIndex].category === "compound") {
      let currentAnswer: Answer = answers[currentQuestionIndex];
      if (currentAnswer === undefined) {
        currentAnswer = new Answer();
      }
      currentAnswer.options = [...answer];
      answers[currentQuestionIndex] = currentAnswer;
    } else if (questions[currentQuestionIndex].category === "compoundImage") {
      let currentAnswer: Answer = answers[currentQuestionIndex];
      if (currentAnswer === undefined) {
        currentAnswer = new Answer();
      }
      currentAnswer.options = [...answer];
      answers[currentQuestionIndex] = currentAnswer;
    } else if (questions[currentQuestionIndex].category === "compoundImageSecond") {
      let currentAnswer: Answer = answers[currentQuestionIndex];
      if (currentAnswer === undefined) {
        currentAnswer = new Answer();
      }
      currentAnswer.options = [...answer];
      answers[currentQuestionIndex] = currentAnswer;
    }
    else {
      answers[currentQuestionIndex] = answer;
    }
    setAnswers(answers);
    console.log(answers.length);
    setDisabledCheckButton(false);
  };

  const checkAnswer = () => {
    const currentQuestion: Word = questions[currentQuestionIndex];
    const currentAnswer: Answer = answers[currentQuestionIndex];
    let currentProgress: number;
    if (currentQuestion.category === "guess") {
      setCorrect(currentAnswer.correct);
      setDisabledCheckButton(true);
      setVisibleAnswerBox(true);
      currentProgress = currentAnswer.correct
        ? questions[currentQuestionIndex].weight
        : -questions[currentQuestionIndex].weight;
      questions[currentQuestionIndex].correct = currentAnswer.correct;
    } else if (currentQuestion.category === "guessSecond") {
      setCorrect(currentAnswer.correct);
      setDisabledCheckButton(true);
      setVisibleAnswerBox(true);
      currentProgress = currentAnswer.correct
        ? questions[currentQuestionIndex].weight
        : -questions[currentQuestionIndex].weight;
      questions[currentQuestionIndex].correct = currentAnswer.correct;
    } else if (currentQuestion.category === "audio") {
      setCorrect(currentAnswer.correct);
      setDisabledCheckButton(true);
      setVisibleAnswerBox(true);
      currentProgress = currentAnswer.correct
        ? questions[currentQuestionIndex].weight
        : -questions[currentQuestionIndex].weight;
      questions[currentQuestionIndex].correct = currentAnswer.correct;
    } else if (currentQuestion.category === "images") {
      setCorrect(currentAnswer.correct);
      setDisabledCheckButton(true);
      setVisibleAnswerBox(true);
      currentProgress = currentAnswer.correct
        ? questions[currentQuestionIndex].weight
        : -questions[currentQuestionIndex].weight;
      questions[currentQuestionIndex].correct = currentAnswer.correct;
    } else if (currentQuestion.category === "video") {
      setCorrect(currentAnswer.correct);
      setDisabledCheckButton(true);
      setVisibleAnswerBox(true);
      currentProgress = currentAnswer.correct
        ? questions[currentQuestionIndex].weight
        : -questions[currentQuestionIndex].weight;
      questions[currentQuestionIndex].correct = currentAnswer.correct;
    } else if (currentQuestion.category === "videoSecond") {
      setCorrect(currentAnswer.correct);
      setDisabledCheckButton(true);
      setVisibleAnswerBox(true);
      currentProgress = currentAnswer.correct
        ? questions[currentQuestionIndex].weight
        : -questions[currentQuestionIndex].weight;
      questions[currentQuestionIndex].correct = currentAnswer.correct;
    } else {
      // check if there is any incorrect word
      const hasWrongWord: boolean = currentAnswer.options
        .map((x: Answer) => x.correct)
        .includes(false);
      if (hasWrongWord) {
        setCorrect(false);
        setDisabledCheckButton(true);
        setVisibleAnswerBox(true);
        currentProgress = 0;
      } else {
        // check if the words are in the correct order
        const areWordsOrdered = orderedAnswers(
          currentAnswer.options.map((x) => x.order)
        );
        if (areWordsOrdered && isSentenceComplete(currentAnswer.options)) {
          setCorrect(true);
          setDisabledCheckButton(true);
          setVisibleAnswerBox(true);
          currentProgress = currentQuestion.weight;
          questions[currentQuestionIndex].correct = true;
        } else {
          setCorrect(false);
          setDisabledCheckButton(true);
          setVisibleAnswerBox(true);
          currentProgress = 0;
          questions[currentQuestionIndex].correct = false;
        }
      }
    }
    setProgress(progress + currentProgress);
  };

  const nextQuestion = () => {
    //const { id } = props.match.params as any;
    const nextStep: number = currentQuestionIndex + 1;
    if (nextStep < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setDisabledCheckButton(false);
      setVisibleAnswerBox(false);
    } else {
      //http.post(`https://duopettaja-api.herokuapp.com/lessons/1`, {});
      /*dispatchReachGoal();*/
      history.push({
        pathname: "/lessonFinished",
        state: { questions: questions.length },
      });
      /*props.history.push({
        pathname: "/lessonFinished",
        state: {
          lessonId: (props.match.params as any).id,
          questions: questions,
        },
      });*/
    }

    setAnswers([]);
    setDisabledCheckButton(true);
    setCorrect(true);
  };

  const handleCheckNextButton = () =>
    answers.length && disabledCheckButton ? nextQuestion() : checkAnswer();

  const orderedAnswers = (a: any[], b: number = 0): boolean => {
    let m: number = 0;
    let currentNum: number;
    let nextNum: number;
    let result: boolean = !!a;
    let test: boolean;
    if (a !== undefined) {
      if (a.constructor === Array) {
        result = true;
        while (m < a.length) {
          currentNum = a[m];
          nextNum = a[m + 1];
          if (typeof currentNum === "number" && typeof nextNum === "number") {
            if (b === 1) {
              test = currentNum <= nextNum;
            } else {
              test = currentNum >= nextNum;
            }
            if (test) {
              result = false;
              break;
            }
          }
          m += 1;
        }
      }
    }
    return result;
  };

  const isSentenceComplete = (options: Answer[]) => {
    const requiredOptions = questions[currentQuestionIndex].options.filter(
      (x) => x.order > 0
    );
    for (const x of requiredOptions) {
      if (!options.includes(x)) {
        return false;
      }
    }
    return true;
  };

  if (questions.length) {
    let question: JSX.Element;
    const currentQuestion = questions[currentQuestionIndex];

    switch (currentQuestion.category) {
      case "audio":
        question = (
          <GuessQuestionAudio
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
            questionObject={currentQuestion}
          />
        );
        break;

      case "images":
        question = (
          <GuessQuestionImages
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
            questionObject={currentQuestion}
          />
        );
        break;

      case "video":
        question = (
          <GuessQuestionVideo
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
            questionObject={currentQuestion}
          />
        );
        break;

        case "videoSecond":
        question = (
          <GuessQuestionVideoSecond
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
            questionObject={currentQuestion}
          />
        );
        break;

      case "guess":
        question = (
          <GuessQuestion
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
            questionObject={currentQuestion}
          />
        );
        break;

        case "guessSecond":
        question = (
          <GuessQuestionSecond
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
            questionObject={currentQuestion}
          />
        );
        break;

      case "compound":
        question = (
          <CompoundQuestion
            question={currentQuestion.expression}
            options={currentQuestion.options}
            onChange={getAnswer}
          />
        );
        break;

      case "compoundImage":
        question = (
          <CompoundQuestionImage
              question={currentQuestion.expression}
              options={currentQuestion.options}
              onChange={getAnswer}
              questionObject={currentQuestion}
          />
        );
        break;

        case "compoundImageSecond":
        question = (
          <CompoundQuestionImageSecond
              question={currentQuestion.expression}
              options={currentQuestion.options}
              onChange={getAnswer}
              questionObject={currentQuestion}
          />
        );
        break;

      default:
        question = <div></div>;
        break;
    }

    const nextStepBox: JSX.Element = (
      <S.SuccessBox isCorrect={isCorrect} isVisible={visibleAnswerBox}>
        <h2>{isCorrect ? "Correct" : "Incorrect"}!</h2>
      </S.SuccessBox>
    );

    return (
      <S.LessonContainer>
        <S.ProgressBarRow className={`fix`}>
          <ProgressBar progress={progress} />
        </S.ProgressBarRow>
        {question}
        <S.CheckButtonRow isCorrect={isCorrect}>
          <button disabled={isButtonDisabled()} onClick={handleCheckNextButton}>
            {visibleAnswerBox ? "Next" : "Check"}
          </button>
        </S.CheckButtonRow>
        {nextStepBox}
      </S.LessonContainer>
    );
  } else {
    // props.history.goBack()
    return (
      <div>
        <Loading />
      </div>
    );
  }
};

export default LessonReady;
