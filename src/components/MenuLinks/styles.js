import styled from "styled-components";
import logo from "../../image/logo.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5%;
  background: linear-gradient(
    90deg,
    rgba(250, 82, 82, 1) 0%,
    rgba(221, 36, 118, 1) 100%
  );
  align-items: center;
  border-bottom: 0.1rem solid crimson;
`;

export const Logo = styled.img`
  background-image: url(${logo});
  background-position: center center;
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-left: 8rem;
`;

export const DivLinks = styled.div`
  margin-right: 20px;
`;
export const Links = styled.a`
  margin-left: 15px;
  text-decoration: none;
  font-size: 1.5rem;
  color: black;

  &:hover {
    border-bottom: 0.2rem solid crimson;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
`;
