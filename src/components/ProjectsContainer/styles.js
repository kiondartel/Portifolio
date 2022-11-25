import styled from "styled-components";
import tigreback from "../../image/tigreback.jpg";

export const Container = styled.div`
  min-height: 85vh;
  background-color: #fff;
  background-image: url(${tigreback});
  background-size: cover;
  background-position: center center;
`;

export const P = styled.p`
  color: white;
  font-size: 1.2rem;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    background: crimson;
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
  width: 380px;
  height: 350px;
  margin-top: 5rem;
  margin-left: 8rem;
  background: linear-gradient(
    90deg,
    rgb(162, 180, 206) 0%,
    rgb(55, 133, 221) 100%
  );
`;
export const H3 = styled.h3`
  color: #292929;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  margin-bottom: 3px;
`;

export const Button = styled.a`
  padding: 0.8rem 1rem;
  background: linear-gradient(
    90deg,
    rgb(162, 180, 206) 0%,
    rgb(55, 133, 221) 100%
  );
  color: black;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 3rem;
`;
export const ProjectsP = styled.p`
  font-size: 1rem;
  margin-bottom: 0.8rem;
  padding: 5px;
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
    rgb(162, 180, 206) 0%,
    rgb(55, 133, 221) 100%
  );
  color: black;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 1rem;
`;
