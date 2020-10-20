import React, { FC , useContext, useEffect, useState} from 'react';
import { QuizContext } from 'context';
import styled from 'styled-components';
import { Card, Body, H4, Toggle } from './commons';
//import data from 'data/quiz.json';


const QuizContainer = styled.div<{count: number}>`
 ${Card}
  background-color: ${props => getColor(props.count)};
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


const getColor = (value:number) =>{
  //value from 0 to 1
  const hue=((1-value)*120).toString(10);
  return ["hsl(",hue,",100%,50%)"].join("");
};


export const Quiz: FC= () => {
  
  const createDefaultValues = () => {
    console.log("initial values",quiz.options.map((option:any) => Math.round(Math.random())));
     return quiz.options.map((option:any) => Math.round(Math.random()));
  }
  const { state:{quiz, count}, getQuiz, setCount } = useContext(QuizContext);
  const [answers, setAnswers] = useState(createDefaultValues());

  useEffect(() => {
    getQuiz(0)
  }, []);

  console.log("initial answers",answers);
  console.log("initial count",count);
  
  const countCorrect = (i:number,a:boolean)=>{
    console.log("answers",answers);
    let copy = [...answers];
      copy[i]=a?1:0;
      console.log("copy",copy);
      setAnswers(copy)
      setCount(copy.filter(a=>a===1).length,  quiz.options.length);
  }

  return (
    <QuizContainer  count={count}>
      <QuizStatement> {quiz.toptext} </QuizStatement>
      {quiz.options.map((option:any, i:number) => {
          return <Toggle key={i} {...option} onClick={(a:boolean)=>countCorrect(i,a)} />
        })}    
      <QuizSubtext> {quiz.subtext.false} </QuizSubtext>
    </QuizContainer>
  )
};