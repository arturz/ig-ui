import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

it('renders without onClick', () => {
  render(<Button>Some button</Button>);
  screen.getByRole('button', { name: /some button/i });
});

it('handles clicks', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Button for testing</Button>);
  fireEvent.click(screen.getByRole('button', { name: /button for testing/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
