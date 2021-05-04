import { SERVER } from '../../config';

export default async function executeCommand(botId, name, payload) {
  const response = await fetch(`${SERVER}/bots/${botId}/command`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, payload }),
  });

  const json = await response.json();
  if (response.ok) {
    return json.message;
  }
  throw json.message;
}
