import styled from '@emotion/styled';
import CredentialsContainer from '../organisms/CredentialsContainer';
import PageWrapper from '../templates/PageWrapper';

const Box = styled.form`
  max-width: 480px;
`;

export default function Login() {
  return (
    <PageWrapper>
      <Box>
        <CredentialsContainer />
      </Box>
    </PageWrapper>
  );
}
