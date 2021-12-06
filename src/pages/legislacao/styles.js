import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

export const Selection = styled.div`
  width: 100%;
  border-radius: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #3FBE884C;
  padding: .5rem 0;
  margin-bottom: .5rem;
`;


export const Lista = styled.div`
  overflow: scroll;
  max-height: 78vh;
`