import { render, screen } from '@testing-library/react';
import Circle from './Circle';

it('renders', () => {
  const { asFragment } = render(<Circle data-testid="circle" />);
  expect(asFragment()).toMatchSnapshot();
  expect(screen.queryByTestId('circle')).toBeInTheDocument();
});
