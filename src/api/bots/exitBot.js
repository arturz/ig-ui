import { SERVER } from '../../config';

export default async function exitBot(botId) {
  const response = await fetch(`${SERVER}/bots/${botId}/exit`);
  const json = await response.json();
  if (response.ok) {
    return json.message;
  }
  throw json.message;
}
