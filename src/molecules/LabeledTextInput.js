import styled from '@emotion/styled';
import InputLabel from '../atoms/InputLabel';
import TextInput from '../atoms/TextInput';

const Container = styled.div`
  margin-bottom: 1rem;
`;

export default function LabeledTextInput({ label, value = '', onChange }) {
  return (
    <Container>
      <InputLabel htmlFor={`label-${label}`}>{label}</InputLabel>
      <TextInput id={`label-${label}`} value={value} onChange={onChange} />
    </Container>
  );
}
