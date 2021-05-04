import { toast } from 'react-toastify';
import executeCommand from '../api/bots/executeCommand';
import Button from '../atoms/Button';

export default function CommandButton({ botId, name, title }) {
  function onClick() {
    executeCommand(botId, name).then(toast).catch(toast.error);
  }

  return <Button onClick={onClick}>{title}</Button>;
}
