import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LabeledPasswordInput from './LabeledPasswordInput';

it('handles input', () => {
  let text;
  render(<LabeledPasswordInput label="password" onChange={(newText) => (text = newText)} />);
  userEvent.type(screen.getByLabelText('password'), 'Hello, world!');
  expect(screen.getByLabelText('password')).toHaveValue('Hello, world!');
  expect(text).toBe('Hello, world!');
});
