import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import LabeledPasswordInput from '../molecules/LabeledPasswordInput';
import LabeledTextInput from '../molecules/LabeledTextInput';
import credentials from '../variants/credentials';

const Container = styled(motion.div)`
  margin-left: 2rem;
`;

export default function Credentials({ onChange }) {
  const [state, setState] = useState({
    login: '',
    password: '',
  });

  useEffect(() => onChange(state), [state]);

  return (
    <Container layout variants={credentials} initial="hidden" animate="visible" exit="exit">
      <LabeledTextInput
        label="login"
        value={state.login}
        onChange={(login) => setState((newState) => ({ ...newState, login }))}
      />
      <LabeledPasswordInput
        label="password"
        value={state.password}
        onChange={(password) => setState((newState) => ({ ...newState, password }))}
      />
    </Container>
  );
}
