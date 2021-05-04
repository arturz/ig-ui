import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import textInput from '../variants/textInput';

const Input = styled(motion.input)`
  width: 10rem;
  height: 2.5rem;
  font-size: 1rem;
  padding-left: 1rem;
  border: 1px solid white;
  background: transparent;
  color: white;
  border-radius: 2.5rem;
  border-top-left-radius: 0;
  box-shadow: 0 0 0.125rem white;
  font-family: 'Roboto';
`;

export default function TextInput({ value, onChange, id }) {
  return (
    <Input
      type="password"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      id={id}
      variants={textInput}
      whileHover="hover"
      whileFocus="focus"
    />
  );
}
