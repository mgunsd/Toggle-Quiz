import React, { FC , useContext, useEffect} from 'react';
import { QuizContext } from 'context';
import styled from 'styled-components';
import { Card, Body, H4, Toggle } from './commons';
//import data from 'data/quiz.json';

interface IState {
  correct:boolean,
  quiz: {
    toptext:string,
    subtext:string,
    options:any
  }
}

const QuizContainer = styled.div`
 ${Card}
  background-image: linear-gradient(to bottom, hsla(19, 94%, 68%, 0.7), hsla(8, 93%, 54%, 0.69));
`;

const QuizStatement = styled(H4)`
  text-align: center;
  margin: 24px auto;
`;
const QuizSubtext = styled(Body)`
  text-align: center;
  margin: 14px 0;
`;


export const Quiz: FC= () => {
 const { state:{quiz, correct}, getQuiz } = useContext(QuizContext);
 //const quiz= data[0]; use directly from data bypass context sys

useEffect(() => {
    getQuiz(0)
  }, []);

return (
  <QuizContainer>
    <QuizStatement> {quiz.toptext} </QuizStatement>
    {quiz.options.map((option:any, i:number) => {
        return <Toggle key={i} {...option} />
      })}    
    <QuizSubtext> {quiz.subtext.false} </QuizSubtext>
  </QuizContainer>
)
};