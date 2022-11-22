import styled from "styled-components";
import bg from "../../image/main-bg.svg";

export const Container = styled.header`
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  color: #ffffff;
  padding: 6rem;
`;
