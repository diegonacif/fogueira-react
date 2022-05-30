import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  width: 95vw;
  max-width: 30rem;
  background-color: var(--black-mirror);
  padding: 0.5rem;
  margin-top: 3rem;

  img {
    width: 100%;
  }

  p {
    margin-top: 0.5rem;
    color: var(--white); 
  }
`