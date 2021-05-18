import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router-dom';
import CredentialsContainer from './CredentialsContainer';

it('works', () => {
  render(
    <MemoryRouter>
      <Route path="*">
        <CredentialsContainer />
      </Route>
    </MemoryRouter>
  );

  expect(screen.getByText(/authentication/i)).toBeInTheDocument();
  expect(screen.getByText(/instagram account/i)).toBeInTheDocument();

  userEvent.click(screen.getByLabelText(/test/i));
  expect(screen.getByLabelText(/test/i)).toBeChecked();
  expect(screen.queryByRole('textbox', { name: /login/i })).toBe(null);
  expect(screen.queryByLabelText('password')).toBe(null);

  userEvent.click(screen.getByLabelText(/own/i));
  expect(screen.getByLabelText(/own/i)).toBeChecked();
  expect(screen.getByRole('textbox', { name: /login/i })).toBeInTheDocument();
  expect(screen.getByLabelText('password')).toBeInTheDocument();
});
