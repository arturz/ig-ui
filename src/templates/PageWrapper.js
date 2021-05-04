import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import pageWrapper from '../variants/pageWrapper';

const Center = styled.div`
  margin: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

// centers elements and makes route animate
export default function PageWrapper({ children }) {
  return (
    <motion.div variants={pageWrapper} initial="hidden" animate="visible" exit="exit">
      <Center>{children}</Center>
    </motion.div>
  );
}
