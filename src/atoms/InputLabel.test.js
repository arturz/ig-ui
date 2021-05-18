import { render } from '@testing-library/react';
import InputLabel from './InputLabel';

it('renders', () => {
  const { asFragment } = render(<InputLabel />);
  expect(asFragment()).toMatchSnapshot();
});
