import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  overflow: hidden;
`;

const Styled = styled(motion.h1)`
  font-weight: 800;

  font-size: calc(2vw + 1rem);
  @media screen and (min-width: 650px) {
    & {
      font-size: 2.2rem;
    }
  }
  color: white;
  font-family: 'Poppins', Roboto, Helvetica, sans-serif;
  margin: 0;
  margin-bottom: 1.5rem;
`;

const variants = {
  hidden: { y: '200%' },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: 'circOut',
    },
  },
};

export default ({ children }) => {
  return (
    <Container>
      <Styled initial="hidden" animate="visible" variants={variants}>
        {children}
      </Styled>
    </Container>
  );
};
