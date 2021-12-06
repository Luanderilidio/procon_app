import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  max-width: 770px;
  margin: 0 auto;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem;
`;

export const Welcome = styled.div`
  padding: .5rem;
  background: #3fbe8826;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 1.3rem;
  margin-bottom: 1rem;
`;
export const Title = styled.h4`
  font-size: 0.86rem;
  font-family: sans-serif;
`;

export const Description = styled.p`
  text-align: center;
  color: #5c5f65;
  font-size: 0.86rem;
  font-family: sans-serif;
`;

export const Message = styled.p`
  margin-bottom: 0.5rem;
  text-align: left;
  color: #000000;
  font-size: 1.1rem;
  font-family: sans-serif;
`;
export const Services = styled.div`
  display: flex;
  padding: 1rem .5rem;
  border: 2px solid #3fbe884d;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 1rem;
`;
