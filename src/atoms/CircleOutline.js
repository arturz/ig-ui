import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const styledFn = (params) => {
  if (params.thin) {
    return `
      top: -0.4rem;
      left: -0.4rem;
      right: -0.4rem;
      bottom: -0.4rem;
      border: 0.2rem solid #aaa;
  `;
  }

  return `
    top: -0.5rem;
    left: -0.5rem;
    right: -0.5rem;
    bottom: -0.5rem;
    border: 0.25rem solid white;
  `;
};

const Styled = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  ${styledFn}
`;

export default function CircleOutline({ layoutId, thin }) {
  return (
    <Styled
      layout
      layoutId={layoutId}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 25,
      }}
      thin={thin}
    />
  );
}
