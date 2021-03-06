import styled from 'styled-components';
import { devices } from '../../assets/devices';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.25rem;
  padding: 0 1rem;

  background-color: var(--gray-dark);
  color: var(--orange-text);

  h1 {
    font-size: 1.7rem;
  }

  img {
    
    &#torch-image {
      display: none;      
    }

    &#drive-folder {
      width: 3rem;
    }
  }

  /* button {
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
  } */

  @media only screen and (min-width:${devices.tablet}) {
    padding: 0 3rem;
    transition: all 0.3s;
  }

  @media only screen and (min-width:${devices.laptop}) {
    padding: 0 4rem;
    transition: all 0.3s;
  }

  @media only screen and (min-width:${devices.desktop}) {
    padding: 0 5rem;
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
