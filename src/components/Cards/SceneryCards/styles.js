import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  max-width: 35rem;
  background-color: var(--black-mirror);
  padding: 0.5rem;
  margin-top: 3rem;
  border-radius: 3.5rem 3.5rem 1rem 1rem;
  border: 3px groove var(--black-border);
  filter: drop-shadow(rgb(0, 0, 0) 15px 15px 15px);

  img {
    width: 100%;
    border: 1px groove var(--white-border,);
    border-radius: 3.5rem 3.5rem 1rem 1rem;
  }

  p {
    margin-top: 1rem;
    color: var(--white);
    font-size: calc(1rem + 0.2vw);
    text-align: justify;
  }
`