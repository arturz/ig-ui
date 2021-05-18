import { render } from '@testing-library/react';
import RadioCircle from './RadioCircle';

it('renders', () => {
  const { asFragment } = render(<RadioCircle />);
  expect(asFragment()).toMatchSnapshot();
});
