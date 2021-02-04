import styled from 'styled-components';

interface IProgressBarProps {
  width: number;
}

export const ProgressBar = styled.div.attrs(props => ({
  className: props.className,
}))`
  background-color: var(--theme-color);
  background-image: none;
  height: 10px;
  width: ${({width}: IProgressBarProps) => width}%
  transition: width 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
`;
