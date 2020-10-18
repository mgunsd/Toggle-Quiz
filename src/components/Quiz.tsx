import React, { FC } from 'react';
import styled from 'styled-components';
import { Card, Body, H4, Toggle } from './commons';

// this is component with state


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


export const Quiz: FC= () => 
  <QuizContainer>
    <QuizStatement> Choose the best option </QuizStatement>
    <Toggle>Question1</Toggle>
    <Toggle>Question2</Toggle>
    <Toggle>Question3</Toggle>
    <Toggle>Question4</Toggle>
    <QuizSubtext> Not Quite ! </QuizSubtext>
  </QuizContainer>;
 