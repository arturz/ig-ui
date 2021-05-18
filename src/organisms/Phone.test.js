import { render } from '@testing-library/react';
import Phone from './Phone';

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

const eventSource = {
  CLOSED: 0,
  CONNECTING: 0,
  OPEN: 0,
  dispatchEvent() {
    return false;
  },
  onerror: jest.fn(),
  onmessage: jest.fn(),
  onopen: jest.fn(),
  readyState: 0,
  url: '',
  withCredentials: false,
  addEventListener: () => {},
  close: () => {},
  removeEventListener: () => {},
};

it('renders', () => {
  const mocked = jest.fn(() => eventSource);
  global.EventSource = function (url) {
    return mocked();
  };

  const { asFragment } = render(<Phone botId={0} commands={grouppedCommands} />);
  expect(asFragment()).toMatchSnapshot();
});
