import { render } from '@testing-library/react';
import PasswordInput from './PasswordInput';

it('renders', () => {
  const { asFragment } = render(<PasswordInput />);
  expect(asFragment()).toMatchSnapshot();
});
