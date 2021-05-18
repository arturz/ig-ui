import { render, screen } from '@testing-library/react';
import AppRightPanel from './AppRightPanel';

const grouppedCommands = [
  {
    type: 'test command group',
    commands: [
      {
        name: 'first',
        title: 'First command',
        arity: 0,
      },
      {
        name: 'second',
        title: 'Second command',
        arity: 0,
      },
    ],
  },
];

it('renders correctly', () => {
  render(<AppRightPanel botId={0} commands={grouppedCommands} />);

  expect(screen.getByText(/test command group/i)).toBeInTheDocument();
  expect(screen.getAllByRole('button').length).toBe(2);
});
