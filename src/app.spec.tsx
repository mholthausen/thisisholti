import {
  render
} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './app';

describe('App', () => {
  it('can be rendered', () => {
    const {
      container
    } = render(<App />, {});

    expect(container).toBeVisible();
  });
});
