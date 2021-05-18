import { render } from '@testing-library/react';
import ParagraphSubheader from './ParagraphSubheader';

it('renders', () => {
  const { asFragment } = render(<ParagraphSubheader />);
  expect(asFragment()).toMatchSnapshot();
});
