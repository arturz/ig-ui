import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import HeaderLine from '../atoms/HeaderLine';
import HeaderSpider from '../atoms/HeaderSpider';
import HeaderText from '../atoms/HeaderText';

const Container = styled.header`
  display: flex;
  padding: 1rem 0;
`;

const RightSection = styled(motion.div)`
  margin-left: 1rem;
  flex-grow: 1;
  pointer-events: none;
  user-select: none;
`;

export default function Header() {
  return (
    <Container>
      <HeaderSpider />
      <RightSection
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <HeaderText>Instagram Spider</HeaderText>
        <HeaderLine />
      </RightSection>
    </Container>
  );
}
