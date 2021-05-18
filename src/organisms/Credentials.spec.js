import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Credentials from './Credentials';

it('works', () => {
  let credentials;
  const onChange = jest.fn((newCredentials) => (credentials = newCredentials));

  render(<Credentials onChange={onChange} />);

  userEvent.type(screen.getByRole('textbox', { name: /login/i }), 'hello');
  userEvent.type(screen.getByLabelText('password'), 'world!');
  expect(credentials.login).toBe('hello');
  expect(credentials.password).toBe('world!');
});
