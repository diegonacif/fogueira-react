import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: 2rem auto 0;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-width: 20rem;
  height: max-content;
  color: var(--orange-text);
  background-color: var(--black-mirror);
  padding: 0.75rem 0.5rem;
  border-radius: 1rem;
  border: 3px groove var(--black-border);
  filter: drop-shadow(rgb(0, 0, 0) 15px 15px 15px);

  h1 {
    font-size: 1.8rem;
    font-family: Helvetica;
  }

  p {
    color: var(--white);
    margin-top: 1rem;
    text-align: center;
    font-size: calc(1rem + 0.2vw);
  }
`