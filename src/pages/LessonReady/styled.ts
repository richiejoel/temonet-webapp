import styled from 'styled-components';

interface ICheckButtonProps {
  isCorrect: boolean;
  isVisible?: boolean;
};

export const LessonContainer = styled.div`
  @import "../../scss/index.scss";
  font-family: "dyslexicRegular";
  height: 100%;
  justify-content: center;
`;

export const CheckButtonRow = styled.div`
@import "../../scss/index.scss";
font-family: "dyslexicRegular";
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  // margin: 20px;
  position: fixed;
  bottom: 100px;
  right: -40%;
  z-index: 1;
  

  button {
    width: 15%;
    background-color: ${({isCorrect}: ICheckButtonProps) => isCorrect ? 'green' : 'red'}
    color: white;
    font-weight: bold;
    font-family: "dyslexicBold";
   
  }
`;

export const SuccessBox = styled.div`
@import "../../scss/index.scss";
font-family: "dyslexicRegular";
  position: fixed;
  bottom: ${({isVisible}) => isVisible ? '0px' : '-230px'};
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 230px;
  justify-content: flex-start;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${({isCorrect}: ICheckButtonProps) => isCorrect ? 'limegreen' : '#cd3232'};
  transition: bottom .3s ease;
  h2{
    font-family: "dyslexicRegular"; 
  }
`;

export const ProgressBarRow = styled.div.attrs(props => ({
  className: props.className,
}))`
@import "../../scss/index.scss";
font-family: "dyslexicRegular";
  display: flex;
  flex-flow: column;
  margin: 20px;
`;
