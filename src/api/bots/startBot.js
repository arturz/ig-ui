import { SERVER } from '../../config';

export default async function startBot(login, password) {
  const response = await fetch(`${SERVER}/bots/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  });

  const json = await response.json();
  if (response.ok) {
    return json.message;
  }
  throw json.message;
}
