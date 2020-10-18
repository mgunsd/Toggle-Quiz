import buildContext from './buildContext';
//import quiz from 'api/quiz';

interface IAction {
  type:string,
  payload:any
}
interface IState {
  quiz:[]
}

const QuizReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'quiz':
      return { ...state, quiz: action.payload };
    default:
      return state;
  }
};


const getQuiz = (dispatch:any) => ()=> {
  dispatch({ type: 'quiz', payload: [{ Q1: 'Q1' }, { Q2: "Q2" }] });
};

// const getQuiz = dispatch => async (quiz) => {
//   try {
//     const response = await quiz.get('/current');
//     //console.log(response);
//     dispatch({ type: 'quiz', payload: response.data })

//   } catch (err) {
//     console.log(err);
//     dispatch({ type: 'error', payload: err });
//   }
// };

export const { Provider, Context } = buildContext(
  QuizReducer,
  { getQuiz },
  {
    quiz: []
  },
);