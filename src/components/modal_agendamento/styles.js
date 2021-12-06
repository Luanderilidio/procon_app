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
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 380px;
  flex-direction: column;
  background: #ffffff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  margin: auto 1.5rem;
`;
export const Description = styled.p`
  margin-bottom: 1rem;
  color: #000000;
  font-family: sans-serif;
`;

export const Selection = styled.div`
  display: flex;
  justify-content: space-around;
`;
