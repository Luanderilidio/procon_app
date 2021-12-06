import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 100vw;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0 1rem;
`;

export const Description = styled.p`
  font-family: sans-serif;
  color: #5c5f65;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
export const Uploads = styled.div`
  padding: 1rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  border: 2px solid #3fbe884d;
  justify-content: space-around;
  border-radius: 1rem;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
`;
