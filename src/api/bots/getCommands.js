import { SERVER } from '../../config';
import myCustomFetch from '../myCustomFetch';

export default function getCommands(botId) {
  return myCustomFetch(`${SERVER}bots/${botId}/commands`);
}
