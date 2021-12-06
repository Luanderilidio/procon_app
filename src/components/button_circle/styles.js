import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => `${props.back}`};
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  margin: .2rem;
`
export const Button = styled.div`
  
  display: flex;
  justify-content: center;
  background: transparent;
  color: ${props => `${props.icon}`};
  font-size: 50px;
`;

export const Text = styled.p`
color: #FFFFFF;
font-family: sans-serif;
font-size: .80rem;
`;
