import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('Check that footer renders correct', () => {
    const { container } = render(<App />);
    const headerElement = container.querySelector('div');
    expect(headerElement).toHaveClass('header');
  });
});
