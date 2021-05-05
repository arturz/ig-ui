import { SERVER } from '../../config';

export default async function getBotInfo(botId) {
  const response = await fetch(`${SERVER}bots/${botId}`);
  const json = await response.json();
  if (response.ok) {
    return json.message;
  }
  throw json.message;
}
