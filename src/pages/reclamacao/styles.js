import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210vw;
  width: 100vw;
  max-width: auto;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: auto;
  margin: 0 1rem;
`;

export const Description = styled.p`
  font-family: sans-serif;
  color: #5c5f65;
  font-size: 1rem;
  margin-bottom: .2rem;
`;
export const Uploads = styled.div`
  padding: .5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  height: 25vh;
  flex-direction: column;
  border: 2px solid #3fbe884d;
  justify-content: space-around;
  border-radius: 1rem;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
`;
