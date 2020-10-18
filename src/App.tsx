import React, { FC } from 'react';
import { Theme, GlobalStyles } from 'styles';
import { QuizProvider } from 'context';
import { ToggleQuiz } from 'pages/ToggleQuiz';

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
