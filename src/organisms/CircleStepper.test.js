import { render, screen, within } from '@testing-library/react';
import CircleStepper from './CircleStepper';

it('renders properly', () => {
  render(<CircleStepper n={3} active={1} />);

  function hasOutlineCircle(step) {
    const { queryByTestId } = within(step);
    return queryByTestId('circle-outline') !== null;
  }

  const steps = screen.getAllByTestId('circle-step');
  expect(hasOutlineCircle(steps[0])).toBe(false);
  expect(hasOutlineCircle(steps[1])).toBe(true);
  expect(hasOutlineCircle(steps[2])).toBe(false);
});
