import { render } from '@testing-library/react';
import Loading from './Loading';

it('renders', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
