import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import appRightPanelSection from '../variants/appRightPanelSection';

const Box = styled(motion.div)`
  margin-bottom: 0.5rem;
  margin-right: 1rem;
  @media screen and (min-width: 650px) {
    & {
      margin-bottom: 1rem;
    }
  }
  display: inline-block;
`;

export default function AppRightPanelSection({ children }) {
  return <Box variants={appRightPanelSection}>{children}</Box>;
}
