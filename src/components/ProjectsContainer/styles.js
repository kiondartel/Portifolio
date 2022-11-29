import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 80vh;
  background-color: #fff;

  @media (max-width: ) {
  }
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 736px) {
    margin-bottom: 0.5rem;
  }
`;
export const P = styled.p`
  color: black;
  font-size: 1.2rem;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 6px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    background: black;
    min-height: 2px;
    width: 8.3%;
  }

  @media (max-width: 736px) {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      background: black;
      min-height: 2px;
      width: 20%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 94%;

  @media (max-width: 1442px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ProjectDiv = styled.div`
  width: 382px;
  min-height: 350px;
  margin-top: 2rem;
  margin-left: 8rem;
  background: linear-gradient(90deg, rgb(44, 43, 44) 0%, rgb(0, 2, 10) 98%);
  border-radius: 10px;

  @media (max-width: 1442px) {
    margin-left: 0;
  }
  @media (max-width: 736px) {
    width: 300px;
    height: 300px;
    margin-top: 4.5rem;
  }
`;
export const H3 = styled.h3`
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

export const Button = styled.a`
  padding: 0.8rem 1rem;
  background: linear-gradient(to right, #cb22d4 0%, #4682b4 100%);
  color: white;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 3rem;
  border: 1px solid white;

  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #4682b4 0%, #cb22d4 100%);
  }

  @media (max-width: 736px) {
    padding: 0.5rem 0.5rem;
  }
`;
export const ProjectsP = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 5px;
  color: white;

  @media (max-width: 736px) {
    margin-bottom: 0.5rem;
  }
`;

export const Netflximg = styled.img`
  border-radius: 10px;
  width: 377px;
  min-height: 220px;
  margin-bottom: 3px;

  @media (max-width: 736px) {
    width: 98%;
    height: 198px;
  }
`;

export const GitBnt = styled.div`
  display: block;
  min-height: 60px;
  justify-content: center;
  margin-top: 7rem;
  text-align: center;
`;

export const Bnt = styled.a`
  padding: 0.8rem 4rem;
  background: linear-gradient(to right, #cb22d4 0%, #4682b4 100%);
  color: white;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 1rem;
  border: 1.5px solid black;

  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    background: linear-gradient(to right, #4682b4 0%, #cb22d4 100%);
  }

  @media (max-width: 736px) {
    padding: 0.5rem 2rem;
  }
`;
