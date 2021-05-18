import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import simpleHiddenVariant from '../variants/simpleHiddenVariant';

const Styled = styled(motion.span)`
  font-family: 'Poppins', Roboto, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  text-transform: lowercase;
`;

export default function StepperText({ children }) {
  return (
    <Styled variants={simpleHiddenVariant} transition={{ delay: 2.5, duration: 1 }}>
      {children}
    </Styled>
  );
}
