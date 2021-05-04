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

export default () => (
  <PageWrapper>
    <Box>
      <ParagraphHeader>Purpose</ParagraphHeader>
      <Paragraph>This application allows you to automatize common tasks on Instagram.</Paragraph>
    </Box>
    <SubmitButtonContainer layout>
      <Link to="/login">
        <ButtonSubmit>Proceed</ButtonSubmit>
      </Link>
    </SubmitButtonContainer>
  </PageWrapper>
);
