import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { selectedQuiz, setStatus } from '../../store/quizSlice';
import { Card, Toggle } from '../common';
import './ToggleQuiz.scss';

interface ToggleQuizProps {}

export const ToggleQuiz: React.FC<ToggleQuizProps> = () => {
  const [answers, setAnswers] = useState([0]);
  const { quiz, status } = useAppSelector(selectedQuiz);
  const dispatch = useAppDispatch();

  const countCorrect = (i: number, a: boolean) => {
    let ans = [...answers];
    ans[i] = a ? 1 : 0;
    setAnswers(ans);

    const count = ans.filter((a) => a === 1).length;

    if (count === quiz.options.length) {
      dispatch(setStatus('correct'));
    } else if (count === quiz.options.length - 1) {
      dispatch(setStatus('almost'));
    } else {
      dispatch(setStatus('false'));
    }
  };

  return (
    <Card status={status}>
      <div className="statement">{quiz.toptext}</div>
      {quiz.options.map((option: [string[], number], i: number) => {
        return (
          <Toggle
            key={i}
            choices={option}
            locked={status === 'correct'}
            onToggle={(a: boolean) => countCorrect(i, a)}
          />
        );
      })}
      <div className="text">
        {status === 'correct' ? quiz.subtext.true : quiz.subtext.false}
      </div>
    </Card>
  );
};
