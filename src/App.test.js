import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { routes } from './organisms/Footer';
import AppRoute from './pages/App';
import Home from './pages/Home';
import Login from './pages/Login';
import SiteWrapper from './templates/SiteWrapper';

test('test app', () => {
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <SiteWrapper>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/app" component={AppRoute} />
          <Route path="/" component={Home} />
        </Switch>
      </SiteWrapper>
    </MemoryRouter>
  );

  expect(screen.getByText(routes[0].name)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /proceed/i }));

  expect(screen.getByText(routes[1].name)).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /proceed/i }));

  expect(screen.getByText(routes[2].name)).toBeInTheDocument();
});
