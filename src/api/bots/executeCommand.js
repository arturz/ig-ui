import { SERVER } from '../../config';
import myCustomFetch from '../myCustomFetch';

export default function executeCommand(botId, name, payload) {
  return myCustomFetch(`${SERVER}bots/${botId}/command`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, payload }),
  });
}
