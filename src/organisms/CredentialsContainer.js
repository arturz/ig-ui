import styled from '@emotion/styled';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonSubmit from '../atoms/ButtonSubmit';
import Paragraph from '../atoms/Paragraph';
import ParagraphHeader from '../atoms/ParagraphHeader';
import Radio from '../molecules/Radio';
import Credentials from './Credentials';

const RadiosContainer = styled.div`
  padding-left: 0.5rem;
`;

const SubmitButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const TEST_ACCOUNT = 'test';
const OWN_ACCOUNT = 'own';

const options = [
  { value: TEST_ACCOUNT, title: 'Account for testing purposes' },
  { value: OWN_ACCOUNT, title: 'My own account' },
];

export default function CredentialsContainer() {
  const [checked, setChecked] = useState(options[0].value);
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  });

  return (
    <AnimateSharedLayout>
      <motion.div layout>
        <ParagraphHeader>Authentication</ParagraphHeader>
        <Paragraph>Which Instagram account would you like to use?</Paragraph>
        <RadiosContainer>
          {options.map(({ value, title }) => (
            <Radio
              layout
              name="account"
              value={value}
              checked={checked === value}
              onChangeChecked={setChecked}
              key={value}
            >
              {title}
            </Radio>
          ))}
        </RadiosContainer>
      </motion.div>
      <AnimatePresence>
        {checked === OWN_ACCOUNT && <Credentials onChange={setCredentials} />}
      </AnimatePresence>
      <SubmitButtonContainer layout>
        <Link
          to={{
            pathname: '/app',
            state: { credentials },
          }}
        >
          <ButtonSubmit>Proceed</ButtonSubmit>
        </Link>
      </SubmitButtonContainer>
    </AnimateSharedLayout>
  );
}
