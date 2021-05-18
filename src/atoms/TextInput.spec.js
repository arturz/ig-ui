import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

it('handles input', () => {
  let text;
  render(<TextInput onChange={(newText) => (text = newText)} />);
  userEvent.type(screen.getByRole('textbox'), 'Hello, world!');
  expect(screen.getByRole('textbox')).toHaveValue('Hello, world!');
  expect(text).toBe('Hello, world!');
});
