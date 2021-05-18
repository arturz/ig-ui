import { render } from '@testing-library/react';
import HeaderSpider from './HeaderSpider';

it('renders', () => {
  const { asFragment } = render(<HeaderSpider />);
  expect(asFragment()).toMatchSnapshot();
});
