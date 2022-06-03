import styled from 'styled-components';
import { devices } from '../../assets/devices';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4.5rem;
  padding: 0 2rem;

  background-color: var(--black-mirror);
  filter: drop-shadow(rgb(0, 0, 0) 15px 15px 15px);
  color: var(--orange-text);

  h1 {
    font-size: 1.9rem;
  }

  img {
    &#torch-image {
      display: none;      
    }

    &#drive-folder {
      width: 3rem;
    }
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

  @media only screen and (min-width:${devices.tablet}) {
    padding: 0 3rem;
    transition: all 0.3s;
  }

  @media only screen and (min-width:${devices.laptop}) {
    padding: 0 3rem;
    transition: all 0.3s;
  }

  @media only screen and (min-width:${devices.desktop}) {
    padding: 0 3rem;
    transition: all 0.3s;

    img#torch-image {
      display: inherit;
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40rem;
    }
  }
`
