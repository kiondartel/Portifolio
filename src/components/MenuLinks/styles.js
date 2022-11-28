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
  background: linear-gradient(to right, #cb22d4 0%, #4682b4 50%, #cb22d4 100%);
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
  margin-right: 5rem;
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
