import { getAllByTestId, getByText, render, within } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Footer, { routes } from './Footer';

it('works', () => {
  function hasOutlineCircle(step) {
    const { queryByTestId } = within(step);
    return queryByTestId('circle-outline') !== null;
  }

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    const { container } = render(
      <MemoryRouter initialEntries={[route.pathname]}>
        <Route path="*">
          <Footer />
        </Route>
      </MemoryRouter>
    );

    expect(getByText(container, route.name)).toBeInTheDocument();

    const steps = getAllByTestId(container, 'circle-step');
    for (let j = 0; j < steps.length; j++) {
      expect(hasOutlineCircle(steps[j])).toBe(i === j);
    }
  }
});
