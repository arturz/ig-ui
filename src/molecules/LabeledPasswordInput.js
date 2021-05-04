import styled from '@emotion/styled';
import InputLabel from '../atoms/InputLabel';
import PasswordInput from '../atoms/PasswordInput';

const Container = styled.div`
  margin-bottom: 1rem;
`;

export default function LabeledPasswordInput({ label, value, onChange }) {
  return (
    <Container>
      <InputLabel htmlFor={`label-${label}`}>{label}</InputLabel>
      <PasswordInput id={`label-${label}`} value={value} onChange={onChange} />
    </Container>
  );
}
