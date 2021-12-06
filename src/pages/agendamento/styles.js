import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
`;

export const Calendar = styled.div`
  border: 1px solid #3fbe88;
  border-radius: 1rem;
  padding: 0 1rem;
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

export const Text = styled.p`
  font-family: sans-serif;
  margin: 1rem 0;
`;

export const HeaderTable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 5vh;
  background: #efb72c;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #003499;
  font-family: sans-serif;
  font-size: 13px;
`;

export const GridTable = styled.div`
  width: 100%;
  max-height: 34.4vh;
  overflow: auto;
`;
