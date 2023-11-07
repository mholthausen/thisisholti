import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Numbers from './Numbers';

describe('Numbers', () => {
  it('is defined', () => {
    expect(Numbers).toBeDefined();
  });

  it('can be rendered', () => {
    const initValue: number = 0;
    const { container } = render(<Numbers initValue={initValue} />);
    expect(container).toBeVisible();
  });

  it('can be incremented', () => {
    const initValue: number = 0;
    const { container, getByTestId } = render(
      <Numbers initValue={initValue} />
    );
    const incrementBtn = getByTestId('increment');
    fireEvent.click(incrementBtn);
    const result = getByTestId('result');

    expect(result.textContent).toBe('Number is 1');
  });

  it('can be decremented', () => {
    const initValue: number = 1;
    const { container, getByTestId } = render(
      <Numbers initValue={initValue} />
    );
    const incrementBtn = getByTestId('decrement');
    fireEvent.click(incrementBtn);
    const result = getByTestId('result');

    expect(result.textContent).toBe('Number is 0');
  });
});
