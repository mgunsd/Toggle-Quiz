import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { quizData } from './quizData';

export interface QuizState {
  quiz: Quiz;
  status: 'correct' | 'almost' | 'false' | 'idle';
}

const initialState: QuizState = {
  quiz: quizData[0],
  status: 'idle',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<number>) => {
      state.quiz = quizData[action.payload];
    },
    setStatus: (
      state,
      action: PayloadAction<'correct' | 'almost' | 'false' | 'idle'>
    ) => {
      state.status = action.payload;
    },
  },
});

export const { setQuiz, setStatus } = quizSlice.actions;

export const selectedQuiz = (state: RootState) => state.quiz;

export default quizSlice.reducer;
