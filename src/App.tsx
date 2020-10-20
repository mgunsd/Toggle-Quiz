import React, { FC } from 'react';
import { Theme, GlobalStyles } from 'styles';
import { QuizProvider } from 'context';
import { Base, Quiz} from 'components';

const ToggleQuiz: FC = () =>
  <Base>
    <Quiz/>
  </Base>


const App: FC = () => {
  return (
    <Theme>
      <QuizProvider>
        <GlobalStyles />
        <ToggleQuiz />
      </QuizProvider>
    </Theme>
  );
};
export default App;