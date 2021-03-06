import styled, { StyledComponent } from "styled-components";

interface IQuestionOptionProps {
  selected: boolean;
}

export const QuestionsContainer: StyledComponent<"div", any, {}, never> = styled.div`
@import "../../scss/index.scss";
font-family: "dyslexicRegular";  
display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 10% 0 10%;
`;

export const QuestionContainer: StyledComponent<"div", any, {}, never> = styled.div`
@import "../../scss/index.scss";
font-family: "dyslexicRegular";
  width: 50%;
  height: 50px;
`;

export const QuestionOption: StyledComponent<"div", any, IQuestionOptionProps> = styled.div`
  background-color: ${(props: IQuestionOptionProps) => props.selected ? "aqua" : "white"};
  @import "../../scss/index.scss";
font-family: "dyslexicRegular";
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: gray;
  margin: 5px;
  height: 40px;
  border-radius: 15px;
`;

export const LocalQuestionRow = styled.div`
  margin: 20px;
  @import "../../scss/index.scss";
  h3{
    font-family: "dyslexicItalic"; 
    padding-top: 2px;
    padding-bottom: 2px;
  }

h1, h2{
  font-family: "dyslexicRegular"; 
  padding-top: 2px;
  padding-bottom: 2px;
}
`;