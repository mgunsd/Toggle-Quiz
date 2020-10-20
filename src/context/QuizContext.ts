import buildContext from './buildContext';
import data from 'data/quiz.json';

interface IAction {
  type:string,
  payload:any
}
interface IState {
  correct:boolean,
  count:number,
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
    case 'count':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

const getQuiz = (dispatch:React.Dispatch<IAction>) => (index:number)=> {
  try {
    dispatch({ type: 'quiz', payload: data[index] });
    console.log(data[index]);
  } catch (err) { console.log('an error occured:', err);}
};

const setCount = (dispatch:React.Dispatch<IAction>)=> (correct:number,total:number) => {
  dispatch({ type: 'count', payload: correct/total });
  console.log(correct,"correct",total,"total")
}

export const { Provider, Context } = buildContext(
  QuizReducer,
  { getQuiz, setCount},
  {
    quiz: {
      toptext:' ',
      subtext:' ',
      options:[]
    }
  },
);