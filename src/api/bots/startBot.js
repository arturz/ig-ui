import { SERVER } from '../../config';
import myCustomFetch from '../myCustomFetch';

export default function startBot(login, password) {
  return myCustomFetch(`${SERVER}bots/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });
}
