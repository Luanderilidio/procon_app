import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => `${props.back}`};
  width: 30vw;
  height: 25vw;
  border-radius: .8rem;
  margin: .2rem;

`
export const Button = styled.div`
  
  display: flex;
  justify-content: center;
  background: transparent;
  color: ${props => `${props.icon}`};
  font-size: 50px;
`;
