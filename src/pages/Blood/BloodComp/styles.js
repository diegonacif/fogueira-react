import styled from 'styled-components';
import { devices } from '../../../assets/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  min-height: calc(100vh - 7rem);
  height: 100%;
  
  .sections {
    width: 100%;
    min-height: calc(100vh - 7rem);
    height: 100%;
    background-color: gray;
    padding-bottom: 3rem;

    img#map {
      width: 100%;
      margin-top: 3rem;
    }
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  max-width: 27rem;
  background-color: var(--black-mirror);
  padding: 0.5rem;
  margin-top: 3rem;
  border-radius: 3.5rem 3.5rem 1rem 1rem;
  border: 3px groove var(--black-border);
   
  &#overView {
    border-radius: 1rem;
    
    img {
      border-radius: 1rem;
    }

    &:last-child {
      margin-bottom: 1rem;
    }
  
  }
  
  h2 {
    color: var(--yellow-title);
    margin: 1rem 0 0 0;
    font-size: calc(1.5rem + 0.2vw);
    line-height: 1rem;    
  }

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

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  background-color: var(--gray-dark);
  /* margin-top: 3rem; */

  h2 {
    margin: 0;
    text-align: center;
    color: var(--white);
    font-size: 1.2rem;
  }
`