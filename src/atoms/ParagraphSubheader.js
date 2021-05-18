import styled from '@emotion/styled';

export default styled.h1`
  font-weight: 400;
  font-size: calc(2vw + 0.8rem);
  margin: 0;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 650px) {
    & {
      font-size: 1.8rem;
    }
  }

  color: white;
  font-family: 'Poppins', Roboto, Helvetica, sans-serif;
`;
