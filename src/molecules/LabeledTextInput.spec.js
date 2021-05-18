import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LabeledTextInput from './LabeledTextInput';

it('handles input', () => {
  let text;
  render(<LabeledTextInput label="testlabel" onChange={(newText) => (text = newText)} />);
  userEvent.type(screen.getByRole('textbox', { name: /testlabel/i }), 'Hello, world!');
  expect(screen.getByRole('textbox', { name: /testlabel/i })).toHaveValue('Hello, world!');
  expect(text).toBe('Hello, world!');
});
