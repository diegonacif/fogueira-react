import styled from 'styled-components';
import { devices } from '../../assets/devices';

import Image from '../../assets/torch.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4.5rem;
  padding: 0 4rem;
  background-color: var(--black-mirror);
  filter: drop-shadow(rgb(0, 0, 0) 15px 15px 15px);
  color: var(--orange-text);

  h1 {
    font-size: 2.5rem;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }

  img {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 7rem;
  }

  button {
    width: 9rem;
    height: 2.5rem;
    color: var(--orange-text);
    background: transparent;
    font-size: 1.2rem;
    border: 2px solid var(--orange-text);
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--white);
      transition: all 0.3s;
    }
  }
`
