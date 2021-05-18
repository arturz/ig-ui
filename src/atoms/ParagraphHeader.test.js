import { render } from '@testing-library/react';
import ParagraphHeader from './ParagraphHeader';

it('renders', () => {
  const { asFragment } = render(<ParagraphHeader />);
  expect(asFragment()).toMatchSnapshot();
});
