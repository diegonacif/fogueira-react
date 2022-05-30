import styled from 'styled-components';
import hallwayImg from './assets/hallway1.jpg'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: url(${hallwayImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 1rem;
`;