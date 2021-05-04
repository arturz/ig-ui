export default () => ({
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
});
