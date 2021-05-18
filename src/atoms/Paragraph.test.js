import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

it('renders', () => {
  const { asFragment } = render(<Paragraph />);
  expect(asFragment()).toMatchSnapshot();
});
