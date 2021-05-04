import { SERVER } from '../../config';

export default async function getCommands(botId) {
  const response = await fetch(`${SERVER}/bots/${botId}/commands`);
  const json = await response.json();
  if (response.ok) {
    return json.message;
  }
  throw json.message;
}
