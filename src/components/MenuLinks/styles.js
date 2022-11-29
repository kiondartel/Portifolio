import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 7.5%;
  background: linear-gradient(to right, #cb22d4 16%, #4682b4 45%, #cb22d4 80%);
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 100px;

  @media (max-width: 556px) {
    width: 130px;
    height: 75px;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  width: 350px;
  height: 75px;
  @media (max-width: 556px) {
    margin-left: 0;
  }
`;

export const DivLinks = styled.div`
  margin-right: 5rem;

  @media (max-width: 556px) {
    margin-right: 1rem;
  }
`;
export const Links = styled.a`
  margin-left: 3rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: white;

  &:hover {
    border-bottom: 0.2rem solid white;
  }

  @media (max-width: 556px) {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-left: 5px;

  @media (max-width: 556px) {
    font-size: 20px;
  }
`;
