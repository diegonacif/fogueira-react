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
  align-items: center;
  row-gap: 1rem;
  width: 100%;
  height: 100%;
  /* background-color: var(--black); */

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    width: 100%;
  }
  
  span {
    font-weight: bold;
    line-height: 2.5rem;
    font-size: 1.25rem;
  }

  img {
    width: 6rem;

    &:hover {
      cursor: pointer;
    }
  }

  a, a:hover, a:focus, a:active {
    color: inherit;
    text-decoration: none;
  }
`