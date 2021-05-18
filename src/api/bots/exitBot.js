import { SERVER } from '../../config';
import myCustomFetch from '../myCustomFetch';

export default function exitBot(botId) {
  return myCustomFetch(`${SERVER}bots/${botId}/exit`);
}
