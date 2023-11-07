import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('is defined', () => {
    expect(Button).toBeDefined();
  });

  it('can be rendered', () => {
    const { container } = render(
      <Button
        datatestid=""
        icon=""
        onclick={() => {}}
      />
    );
    expect(container).toBeVisible();
  });

  it('can be clicked', () => {
    const handleOnClick = jest.fn();

    const { getByTestId } = render(
      <Button
        datatestid="button"
        icon=""
        onclick={handleOnClick}
      />
    );
    const element = getByTestId('button');

    fireEvent.click(element);

    expect(handleOnClick).toBeCalled();
  });
});
