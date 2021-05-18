import { render, screen } from '@testing-library/react';
import Header from './Header';

it('renders', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByText(/instagram spider/i)).toBeInTheDocument();
});
