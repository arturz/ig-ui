import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ParagraphHeader from '../atoms/ParagraphHeader';
import ParagraphSubheader from '../atoms/ParagraphSubheader';
import AppRightPanelSection from '../molecules/AppRightPanelSection';
import CommandButton from '../molecules/CommandButton';
import appRightPanelSection from '../variants/appRightPanelSection';

const Box = styled(motion.div)`
  @media screen and (min-width: 1001px) {
    padding: 0 2rem;
  }
`;

export default function AppRightPanel({ botId, commands: grouppedCommands }) {
  return (
    <Box transition={{ delayChildren: 1, staggerChildren: 0.5 }} initial="hidden" animate="visible">
      <ParagraphHeader variants={appRightPanelSection}>Available actions</ParagraphHeader>
      {grouppedCommands.map(({ type, commands }) => (
        <AppRightPanelSection>
          <ParagraphSubheader>{type}</ParagraphSubheader>
          {commands.map(({ name, title }) => (
            <CommandButton botId={botId} name={name} title={title} key={name} />
          ))}
        </AppRightPanelSection>
      ))}
    </Box>
  );
}
