import { SERVER } from '../../config';

export default function exitBotUsingBeacon(botId) {
  navigator.sendBeacon(`${SERVER}bots/${botId}/exit`);
}
