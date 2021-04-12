import quizReducer, { setQuiz, setStatus, QuizState } from './quizSlice';
import { quizData } from './quizData';

describe('counter reducer', () => {
  const initialState: QuizState = {
    quiz: quizData[0],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(quizReducer(undefined, { type: 'unknown' })).toEqual({
      quiz: quizData[0],
      status: 'idle',
    });
  });

  it('set the correct quiz', () => {
    const Quiz1 = quizReducer(initialState, setQuiz(1));
    expect(Quiz1.quiz).toEqual(quizData[1]);
  });

  it('should handle status', () => {
    const state = quizReducer(initialState, setStatus('almost'));
    expect(state.status).toEqual('almost');
  });
});
