import { render } from '@testing-library/react';
import HeaderText from './HeaderText';

it('renders', () => {
  const { asFragment } = render(<HeaderText />);
  expect(asFragment()).toMatchSnapshot();
});
