import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  max-width: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;  
  justify-content: space-around;
  padding-top: .80rem;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100vh;
  width: 100vw;
  /* padding: 1rem; */
`;

export const Text = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
  padding-right: 9px;
`

export const ContainerLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
`

export const Line = styled.div`
  background: #00349972;
  height: 2px;
  width: 90%;
`

export const Process = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: row;

`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 80%;

`
export const Icons = styled.div`
  display: flex;
  border: 1px solid red;
`
export const Description = styled.p`
  border: 1px solid red;
  font-family: sans-serif;
`