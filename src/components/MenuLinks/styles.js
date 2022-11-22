import styled from "styled-components";
import logo from "../../image/logo.jpg";

export const Container = styled.div`
  display: flex;
  min-height: 10vh;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border: 1px solid red;
`;

export const Logo = styled.img`
  float: left;
  background-image: url(${logo});
  background-position: center center;
  background-size: cover;
  width: 50px;
  height: 50px;
  padding-right: 15px;
  border: 1px solid red;
`;

export const DivLinks = styled.div`
  justify-content: right;
  display: flex;
  float: right;
  border: 1px solid red;
`;
export const Links = styled.a`
  float: left;
  margin-left: 5px;

  border: 1px solid red;
  text-decoration: none;
  justify-content: left;
  &:hover {
  }
`;
