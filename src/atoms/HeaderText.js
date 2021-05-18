import styled from '@emotion/styled';

export default styled.h1`
  font-family: 'Russo One', sans-serif;
  font-weight: 400;
  font-size: calc(2vw + 1.2rem);
  @media screen and (min-width: 650px) {
    & {
      font-size: 2.4rem;
    }
  }

  color: white;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
