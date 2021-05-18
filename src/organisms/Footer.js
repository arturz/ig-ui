import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router';
import StepperText from '../atoms/StepperText';
import CircleStepper from './CircleStepper';

const Container = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  margin-bottom: 10vh;
  text-align: center;
`;

export const routes = [
  { pathname: '/', name: 'home' },
  { pathname: '/login', name: 'auth' },
  { pathname: '/app', name: 'app' },
];

export default function Footer() {
  const location = useLocation();
  const index = routes.findIndex((route) => route.pathname === location.pathname);

  return (
    <Container initial="hidden" animate="visible">
      <StepperText>{routes[index].name}</StepperText>
      <CircleStepper active={index} n={routes.length} />
    </Container>
  );
}
