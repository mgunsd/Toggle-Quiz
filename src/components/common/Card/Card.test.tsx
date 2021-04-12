import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card';

test('renders text Card by default', () => {
  render(<Card />);
});
