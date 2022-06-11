import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  button {
    border: 0;
    background-color: transparent;
    width: min-content;

    svg {
      font-size: 2rem;
      color: var(--white);
    }
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  height: 100%;

  span {
    font-weight: bold;
  }
`