import React, {FC } from 'react';
import { Base, Card } from 'components/commons';
import { Quiz } from 'components/Quiz';


// const QuizStatement: string = 'Choose right option'
// interface CardProps {
//   quiz:[],
// }

export const ToggleQuiz: FC = () =>
  <Base>
    <Quiz/>
  </Base>
