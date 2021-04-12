import * as React from 'react';
import { render } from '@testing-library/react';
import { Toggle } from './Toggle';
import { quizData } from '../../../store/quizData';

test('renders text Toggle by default', () => {
  render(
    <Toggle
      choices={quizData[0].options[0]}
      locked={false}
      onToggle={() => {}}
    />
  );
});
