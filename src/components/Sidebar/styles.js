import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  hr.divider {
    margin: 0;
  }  

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

  img {
    width: 6rem;
  }

  a, a:hover, a:focus, a:active {
    color: inherit;
    text-decoration: none;
  }
`