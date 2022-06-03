import styled from 'styled-components';
import hallwayImg from './assets/hallway1.jpg';
import { devices } from './assets/devices';

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: url(${hallwayImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 3rem;
`;

export const World = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  height: max-content;

  @media only screen and (min-width:${devices.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width:${devices.laptop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width:${devices.desktop}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`