import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import CircleOutline from '../atoms/CircleOutline';
import RadioCircle from '../atoms/RadioCircle';
import Text from '../atoms/Text';

const Label = styled(motion.label)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  & .radio-circle {
    transition: 0.5s all;
  }
  &:hover:not([data-checked]) .radio-circle {
    background: white;
  }
  &[data-checked] .radio-circle {
    background: white;
  }

  & .circle-container {
    transition: 0.5s all;
  }
  &:hover:not([data-checked]) .circle-container {
    margin-right: 1.5rem;
  }
`;

const CircleContainer = styled(motion.div)`
  position: relative;
  display: block;
  margin-right: 1rem;
`;

const Input = styled.input`
  display: none;
`;

export default function Radio({ name, value, children, checked, onChangeChecked }) {
  return (
    <div>
      <Input
        type="radio"
        name={name}
        value={value}
        id={`option-${value}`}
        onChange={(e) => onChangeChecked(e.currentTarget.value)}
      />
      <Label htmlFor={`option-${value}`} data-checked={checked ? '1' : undefined}>
        <CircleContainer className="circle-container">
          <RadioCircle />
          {checked && <CircleOutline layoutId={name} />}
        </CircleContainer>
        <Text>{children}</Text>
      </Label>
    </div>
  );
}
