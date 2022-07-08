import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  max-width: 27rem;
  height: max-content;
  background-color: var(--black-mirror);
  padding: 0.5rem;
  margin-top: 3rem;
  border-radius: 3.5rem 3.5rem 1rem 1rem;
  border: 3px groove var(--black-border);

  h2 {
    color: #f8ffa4;
    text-align: center;
    font-family: Candara;
    font-size: calc(1.5rem + 0.2vw);
    margin-top: 0.5rem;
  }

  .imgWp {
    width: 100%;
    height: 13rem;
    border: 1px groove var(--white-border,);
    border-radius: 3.5rem 3.5rem 1rem 1rem;
    overflow: hidden;
    object-fit: scale-down;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    margin-top: 0.5rem;
    color: var(--white);
    font-size: calc(0.9rem + 0.2vw);
    text-align: justify;
    line-height: 1.5rem;
  }
`