import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import executeCommand from '../api/bots/executeCommand';
import ParagraphHeader from '../atoms/ParagraphHeader';
import ParagraphSubheader from '../atoms/ParagraphSubheader';
import AppRightPanelSection from '../molecules/AppRightPanelSection';
import CommandButton from '../molecules/CommandButton';
import appRightPanelSection from '../variants/appRightPanelSection';

const Box = styled(motion.div)`
  @media screen and (min-width: 1001px) {
    padding-left: 3rem;
  }
`;

export default function AppRightPanel({ botId, commands: grouppedCommands }) {
  // false or name of executing command
  const [executing, setExecuting] = useState(false);

  function onStartExecuting(name) {
    setExecuting(name);
  }

  function onEndExecuting() {
    setExecuting(false);
  }

  const [logged, setLogged] = useState(false);
  useEffect(() => {
    // for warm reload
    if (!logged) {
      setLogged(true);
      setExecuting('login');
      const toastId = toast.success('Signing in...', { autoClose: false });
      executeCommand(botId, 'login')
        .then(() => toast.success('Signed in!'))
        .catch(() => toast.error)
        .finally(() => {
          setExecuting(false);
          toast.dismiss(toastId);
        });
    }
  }, []);

  return (
    <Box transition={{ delayChildren: 1, staggerChildren: 0.2 }} initial="hidden" animate="visible">
      <ParagraphHeader variants={appRightPanelSection}>Available actions</ParagraphHeader>
      {grouppedCommands.map(({ type, commands }) => (
        <AppRightPanelSection key={type}>
          <ParagraphSubheader>{type}</ParagraphSubheader>
          {commands.map(({ name, title, arity }) => (
            <CommandButton
              botId={botId}
              name={name}
              title={title}
              arity={arity}
              key={name}
              onStartExecuting={onStartExecuting}
              onEndExecuting={onEndExecuting}
              disabled={executing !== false}
              executing={name === executing}
            />
          ))}
        </AppRightPanelSection>
      ))}
    </Box>
  );
}
