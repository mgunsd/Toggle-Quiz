import buildContext from './buildContext';
import data from 'data/quiz.json';

interface IAction {
  type:string,
  payload:any
}
interface IState {
  correct:boolean,
  quiz: {
    toptext:string,
    subtext:string,
    options:any
  }
}

const QuizReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'quiz':
      return { ...state, quiz: action.payload };
    default:
      return state;
  }
};


const getQuiz = (dispatch:React.Dispatch<IAction>) => (index:number)=> {

  try {
    console.log(data[index]);
    dispatch({ type: 'quiz', payload: data[index] });
  } catch (err) { console.log('error occured:', err);}
  };


export const { Provider, Context } = buildContext(
  QuizReducer,
  { getQuiz },
  {
    correct:false,
    quiz: {
      toptext:' ',
      subtext:' ',
      options:[]
    }
  },
);