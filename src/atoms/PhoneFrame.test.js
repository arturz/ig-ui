import { render } from '@testing-library/react';
import PhoneFrame from './PhoneFrame';

it('renders', () => {
  const { asFragment } = render(<PhoneFrame />);
  expect(asFragment()).toMatchSnapshot();
});
