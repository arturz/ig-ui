import styled from '@emotion/styled';
import { AnimateSharedLayout, motion } from 'framer-motion';
import CircleStep from '../molecules/CircleStep';
import circleStepper from '../variants/circleStepper';

const Ul = styled(motion.ul)`
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
`;

export default function CircleStepper({ active, n }) {
  return (
    <AnimateSharedLayout>
      <Ul variants={circleStepper} initial="hidden" animate="visible">
        {[...Array(n)].map((value, index) => (
          <CircleStep active={active === index} key={index} />
        ))}
      </Ul>
    </AnimateSharedLayout>
  );
}
