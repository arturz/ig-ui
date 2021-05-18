import { fireEvent, render, screen } from '@testing-library/react';
import ButtonSubmit from './ButtonSubmit';

it('renders without onClick', () => {
  render(<ButtonSubmit>Some button</ButtonSubmit>);
  screen.getByRole('button', { name: /some button/i });
});

it('handles clicks', () => {
  const handleClick = jest.fn();
  render(<ButtonSubmit onClick={handleClick}>Button for testing</ButtonSubmit>);
  fireEvent.click(screen.getByRole('button', { name: /button for testing/i }));
  fireEvent.click(screen.getByRole('button', { name: /button for testing/i }));
  expect(handleClick).toHaveBeenCalledTimes(2);
});
