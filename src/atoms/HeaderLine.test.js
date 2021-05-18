import { render } from '@testing-library/react';
import HeaderLine from './HeaderLine';

it('renders', () => {
  const { asFragment } = render(<HeaderLine />);
  expect(asFragment()).toMatchSnapshot();
});
