import { render, screen, within } from '@testing-library/react';
import CircleStep from './CircleStep';

it('renders', () => {
  const { asFragment } = render(<CircleStep />);
  expect(asFragment()).toMatchSnapshot();
});

it('active', () => {
  render(<CircleStep active />);
  const { getByTestId } = within(screen.getByTestId('circle-step'));
  expect(getByTestId('circle-outline')).toBeInTheDocument();
});

it('inactive', () => {
  render(<CircleStep />);
  const { queryByTestId } = within(screen.getByTestId('circle-step'));
  expect(queryByTestId('circle-outline')).toBe(null);
});
