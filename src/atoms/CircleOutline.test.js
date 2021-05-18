import { render } from '@testing-library/react';
import CircleOutline from './CircleOutline';

it('renders', () => {
  const { asFragment } = render(<CircleOutline />);
  expect(asFragment()).toMatchSnapshot();
});
