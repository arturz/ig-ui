import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Circle from '../atoms/Circle';
import CircleOutline from '../atoms/CircleOutline';
import circleStep from '../variants/circleStep';

const Step = styled(motion.li)`
  display: block;
  margin: 0 1rem;
  position: relative;
`;

export default function CircleStep({ active }) {
  return (
    <Step variants={circleStep} active={active}>
      <Circle />
      {active && <CircleOutline layoutId="step" thin />}
    </Step>
  );
}
