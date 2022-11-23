import styled from "styled-components";
import logo from "../../image/logo.jpg";

export const Container = styled.div`
  justify-content: space-between;
  display: flex;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5%;
  align-items: center;
  border-bottom: 0.1rem solid #eeeeee;
`;

export const Logo = styled.img`
  float: left;
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
