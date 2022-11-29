import styled from "styled-components";

export const Container = styled.a`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  width: 2.5rem;
  height: 2.5rem;
  bottom: 2rem;
  right: 2rem;
  z-index: 6;
  border-radius: 50%;
  color: black;

  @media (max-width: 520px) {
    width: 2rem;
    height: 2rem;
  }
`;
