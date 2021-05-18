import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommandButton from './CommandButton';

it('sends request', () => {
  global.fetch = jest.fn(async () => ({
    message: 'some response',
  }));
  render(<CommandButton botId={0} name="command" title="Test command" arity={0} />);
  userEvent.click(screen.getByRole('button', { name: /Test command/i }));
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
