import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import executeCommand from '../api/bots/executeCommand';
import Button from '../atoms/Button';
import MySwal from '../wrappers/MySwal';
import Loading from './Loading';

const LoadingBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.3);
`;

export default function CommandButton({
  botId,
  name,
  title,
  arity,
  onStartExecuting,
  onEndExecuting,
  disabled,
  executing,
}) {
  async function onClick() {
    let payload = undefined;

    if (arity === 1) {
      const { value, isConfirmed } = await Swal.fire({
        title,
        input: 'text',
        inputLabel: 'This command requires one argument:',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!';
          }
        },
      });

      if (!isConfirmed) return;

      payload = value;
    }

    onStartExecuting(name);

    executeCommand(botId, name, payload)
      .then((message) => {
        switch (name) {
          case 'createDevTools':
            MySwal.fire(
              `${title} response`,
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ textAlign: 'left' }}>
                  Link:{' '}
                  <a href={message} target="__blank">
                    Chrome DevTools
                  </a>
                  <br />
                  Login: <code>hire</code>
                  <br />
                  Password: <code>me</code>
                </p>
              </div>
            );
            break;

          default:
            toast(message);
        }
      })
      .catch(toast.error)
      .finally(onEndExecuting);
  }

  return (
    <Button onClick={onClick} disabled={disabled}>
      <span {...(executing && { style: { opacity: 0 } })}>{title}</span>
      <AnimatePresence>
        {executing && (
          <LoadingBox>
            <Loading />
          </LoadingBox>
        )}
      </AnimatePresence>
    </Button>
  );
}
