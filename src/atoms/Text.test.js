import { render } from '@testing-library/react';
import Text from './Text';

it('renders', () => {
  const { asFragment } = render(<Text />);
  expect(asFragment()).toMatchSnapshot();
});
