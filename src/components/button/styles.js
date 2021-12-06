import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${(props) => `${props.back}`};
  width: 100px;
  height: ${(props) => `${props.size}px`};
  border-radius: 0.5rem;
`;

export const Text = styled.p`
  color: ${(props) => `${props.color}`};
  font-family: sans-serif;
  font-size: 1rem;
`;
