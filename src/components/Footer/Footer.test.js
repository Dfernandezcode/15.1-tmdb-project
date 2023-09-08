import { render } from '@testing-library/react';
import Footer from './Footer';
describe('Footer component', () => {
  test('Check that footer renders correct', () => {
    const { container } = render(<Footer></Footer>);
    const footerElement = container.querySelector('div');
    expect(footerElement).toHaveClass('footer');
  });
  test('Check that footer renders correct', () => {
    const { container } = render(<Footer></Footer>);
    const footerElement = container.querySelector('img');
    expect(footerElement).toHaveClass('footer__img');
  });
});
