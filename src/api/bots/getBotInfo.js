import { SERVER } from '../../config';
import myCustomFetch from '../myCustomFetch';

export default function getBotInfo(botId) {
  return myCustomFetch(`${SERVER}bots/${botId}`);
}
