import { render } from '@testing-library/react';
import LoadingCircle from './LoadingCircle';

it('renders', () => {
  const { asFragment } = render(<LoadingCircle />);
  expect(asFragment()).toMatchSnapshot();
});
