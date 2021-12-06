import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
`;

export const Main = styled.div`
  width: 35vh;
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto;
`;
export const Description = styled.p`
  color: #000000;
  padding-bottom: 1rem;
  font-family: sans-serif;
`;

export const Selection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
