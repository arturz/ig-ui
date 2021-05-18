import styled from '@emotion/styled';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

// with #root stylings makes <Footer /> stay on the bottom if content is not scrollable
const WrapperForFooter = styled.div`
  flex: 1 0 auto;
`;

const Center = styled.div`
  margin: auto;
  max-width: 1240px;
  padding: 0 1rem;
`;

export default function MainTemplate({ children }) {
  return (
    <>
      <WrapperForFooter>
        <Center>
          <Header />
          {children}
        </Center>
      </WrapperForFooter>
      <Center>
        <Footer />
      </Center>
    </>
  );
}
