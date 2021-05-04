import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import button from '../variants/button';

const StyledMotionButton = styled(motion.button)`
  width: 10rem;
  height: 2.5rem;
  background: transparent;
  border-radius: 2.5rem;
  border: 1px solid white;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  font-weight: 600;
`;

export default function Button({ onClick, children }) {
  return (
    <StyledMotionButton
      {...(onClick && {
        onClick(e) {
          e.preventDefault();
          onClick(e);
        },
      })}
      variants={button}
      whileHover="hover"
    >
      {children}
    </StyledMotionButton>
  );
}
