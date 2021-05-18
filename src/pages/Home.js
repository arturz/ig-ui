import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ButtonSubmit from '../atoms/ButtonSubmit';
import Paragraph from '../atoms/Paragraph';
import ParagraphHeader from '../atoms/ParagraphHeader';
import PageWrapper from '../templates/PageWrapper';

const Box = styled.form`
  max-width: 480px;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <PageWrapper>
      <Box>
        <ParagraphHeader>Hello!</ParagraphHeader>
        <Paragraph>
          This application shows how commonly made actions on Instagram can be automatized.
        </Paragraph>
      </Box>
      <SubmitButtonContainer layout>
        <Link to="/login">
          <ButtonSubmit>Proceed</ButtonSubmit>
        </Link>
      </SubmitButtonContainer>
    </PageWrapper>
  );
}
