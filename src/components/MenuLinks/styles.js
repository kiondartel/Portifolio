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
  height: 6%;
  background: linear-gradient(
    90deg,
    rgb(222, 82, 250) 0%,
    rgb(231, 221, 231) 40%,
    rgb(206, 36, 221) 98%
  );
  align-items: center;
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
  margin-left: 3rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: white;

  &:hover {
    border-bottom: 0.2rem solid white;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1rem;
`;
