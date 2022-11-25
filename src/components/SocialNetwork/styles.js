import styled from "styled-components";

export const Container = styled.div`
  width: 374px;
  height: 204px;
  border-radius: 5px;
  padding: 15px;
  margin-left: 5px;
  background-color: #4f4f4f;

  svg {
    width: 50px;
    height: 50px;
    padding: 0.6rem;
    background-color: white;
    border-radius: 5px;
    color: black;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-left: 1.5;
    background: linear-gradient(
      90deg,
      rgba(250, 82, 82, 1) 0%,
      rgba(221, 36, 118, 1) 100%
    );
    &:hover {
      background: linear-gradient(
        90deg,
        rgb(194, 145, 145) 0%,
        rgb(136, 66, 97) 100%
      );
    }
  }
`;

export const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const A = styled.a``;

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