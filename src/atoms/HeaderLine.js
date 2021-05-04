import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import headerLine from '../variants/headerLine';

const Line = styled(motion.div)`
  height: 1px;
  background: linear-gradient(90deg, #ae4bb9, transparent);
`;

export default function HeaderLine() {
  return <Line variants={headerLine} initial="hidden" animate="visible" />;
}
