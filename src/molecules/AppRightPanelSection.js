import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import appRightPanelSection from '../variants/appRightPanelSection';

const Box = styled(motion.div)`
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  display: inline-block;
`;

export default function AppRightPanelSection({ children }) {
  return <Box variants={appRightPanelSection}>{children}</Box>;
}
