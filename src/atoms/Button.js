import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import button from '../variants/button';

const StyledMotionButton = styled(motion.button)`
  position: relative;
  background: transparent;
  border-radius: 2.5rem;
  border: 1px solid white;

  ${({ disabled }) => (disabled ? '' : 'cursor: pointer;')}
  color: white;
  font-size: calc(1vw + 0.5rem);
  padding: 0.5rem 0.75rem;
  @media screen and (min-width: 650px) {
    & {
      font-size: 0.9rem;
      padding: 0.7rem 1rem;
    }
  }

  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  font-weight: 400;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export default function Button({ onClick, children, disabled }) {
  return (
    <StyledMotionButton
      {...(onClick && {
        onClick(e) {
          e.preventDefault();
          onClick(e);
        },
      })}
      variants={disabled ? undefined : button}
      whileHover="hover"
      disabled={disabled ? 1 : undefined}
    >
      {children}
    </StyledMotionButton>
  );
}
