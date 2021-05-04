import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import button from '../variants/button';

const StyledMotionButton = styled(motion.button)`
  padding: 0.7rem 1rem;
  background: transparent;
  border-radius: 2.5rem;
  border: 1px solid white;
  cursor: pointer;
  color: white;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  font-weight: 400;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
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
