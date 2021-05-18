import { render } from '@testing-library/react';
import BotStream from './BotStream';

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

  const { container } = render(<BotStream botId={0} />);
  expect(container).toBeEmptyDOMElement();
});

it('starts receiving stream', () => {
  const mocked = jest.fn(() => eventSource);
  global.EventSource = function (url) {
    return mocked();
  };

  render(<BotStream botId={0} />);

  expect(mocked).toHaveBeenCalledTimes(1);
});
