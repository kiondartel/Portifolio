import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  background-color: #fff;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
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
    height: 2px;
    width: 8.3%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 94%;
`;
export const ProjectDiv = styled.div`
  width: 382px;
  height: 350px;
  margin-top: 2rem;
  margin-left: 8rem;
  background: linear-gradient(90deg, rgb(44, 43, 44) 0%, rgb(0, 2, 10) 98%);
  border-radius: 10px;
`;
export const H3 = styled.h3`
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

export const Button = styled.a`
  padding: 0.8rem 1rem;
  background: linear-gradient(
    90deg,
    rgb(188, 108, 212) 0%,
    rgb(208, 35, 231) 100%
  );
  color: white;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 3rem;
  border: 1px solid white;
`;
export const ProjectsP = styled.p`
  font-size: 1rem;
  margin-bottom: 0.8rem;
  padding: 5px;
  color: white;
`;

export const Netflximg = styled.img`
  border-radius: 10px;
  width: 377px;
  height: 220px;
  margin-bottom: 3px;
`;

export const GitBnt = styled.div`
  display: block;
  height: 60px;
  justify-content: center;
  margin-top: 7rem;
  text-align: center;
`;

export const Bnt = styled.a`
  padding: 0.8rem 4rem;
  background: linear-gradient(
    90deg,
    rgb(188, 108, 212) 0%,
    rgb(208, 35, 231) 100%
  );
  color: white;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 1rem;
  border: 1px solid black;
`;
