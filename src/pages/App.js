import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import getCommands from '../api/bots/getCommands';
import startBot from '../api/bots/startBot';
import AppRightPanel from '../organisms/AppRightPanel';
import Phone from '../organisms/Phone';
import PageWrapper from '../templates/PageWrapper';

function assignBoxCss({ loaded }) {
  if (loaded) {
    return `
      width: 100%;
    `;
  }

  return '';
}

const Box = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  ${assignBoxCss}
`;

export default (props) => {
  const {
    location: { state },
  } = props;
  const login = state?.credentials?.login;
  const password = state?.credentials?.password;
  const [botId, setBotId] = useState(null);
  const [commands, setCommands] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function start() {
      try {
        const newBotId = await startBot(login, password);
        setBotId(newBotId);
        if (window.sessionStorage) {
          window.sessionStorage.botId = newBotId;
        }
      } catch (error) {
        toast.error(error);
      }
    }

    start();
  }, []);

  useEffect(() => {
    if (botId !== null) {
      getCommands(botId).then(setCommands).catch(toast.error);
    }
  }, [botId]);

  return (
    <PageWrapper>
      <Box loaded={loaded}>
        <Phone botId={botId} commands={commands} onLoad={() => setLoaded(true)} />
        {loaded && <AppRightPanel commands={commands} botId={botId} />}
      </Box>
    </PageWrapper>
  );
};
