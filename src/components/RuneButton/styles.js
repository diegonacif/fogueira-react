import styled from 'styled-components';

export const Container = styled.div `

  width: 4.5rem;
  /* height: 8rem; */

  img {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 4rem;
    transform: scaleX(-1) rotate(92deg);
    transition: all 0.3s;

    &:hover {
      cursor: pointer;

      background-color: rgba(1, 202, 252, 0.35);
      box-shadow: 0 0 10px 6px rgba(1, 202, 252, 0.4);
      transition: all 1s;
    }
  }
`