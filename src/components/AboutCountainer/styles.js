import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  border: 1px solid red;
  background: linear-gradient(
    90deg,
    rgba(250, 82, 82, 1) 0%,
    rgba(221, 36, 118, 1) 100%
  );
`;

export const DivContent = styled.div`
  width: 374px;
  height: 204px;
  border-radius: 5px;
  padding: 15px;
  margin-left: 5px;
  background-color: #4f4f4f;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  position: relative;
  margin-bottom: 1rem;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: crimson;
    height: 2px;
    width: 50%;
  }
`;

export const P = styled.p`
  color: white;
  font-family: "helvetica";
  margin-bottom: 1rem;
`;

export const InforCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid black;
  width: 100%;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
`;
