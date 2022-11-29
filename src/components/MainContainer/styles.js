import styled from "styled-components";
import tigre from "../../image/tigre.png";
import tigreE from "../../image/tigre2.png";
import tigreback from "../../image/tigreback.jpg";

export const Container = styled.div`
  align-items: center;
  min-height: 100vh;
  background-color: white;

  @media (max-width: 986px) {
    min-height: 88vh;
  }

  @media (max-width: 526px) {
    min-height: 50vh;
  }
`;

export const BackgroundHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TigreBackground = styled.div`
  background-image: url(${tigreback});
  background-size: cover;
  background-position: center center;
  min-height: 75vh;
  max-width: 100%;

  @media (max-width: 527px) {
    min-height: 65vh;
  }

  @media (max-width: 375px) {
    min-height: 75vh;
  }
`;

export const Background = styled.div`
  display: block;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 5rem;
  color: white;
  padding-top: 5rem;
  padding-bottom: 1rem;

  @media (max-width: 527px) {
    font-size: 2.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  color: white;

  @media (max-width: 527px) {
    font-size: 1rem;
  }
`;

export const BackgroundPhoto = styled.div`
  display: block;
  text-align: center;
  border-radius: 50%;
`;

export const Image = styled.img`
  max-height: 300px;
  border-radius: 50%;
  height: 260px;
  width: 260px;
  object-fit: cover;
  margin-top: 4rem;

  @media (max-width: 527px) {
    height: 240px;
    width: 240px;
  }

  @media (max-width: 375px) {
    height: 200px;
    width: 200px;
  }
`;

export const TigreContainer = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 986px) {
    #box1 {
      display: none;
    }
    #box2 {
      display: none;
    }
  }

  @media (max-width: 1110) {
    height: 74vh;
  }

  @media (max-width: 986) {
    height: 30vh;
  }
`;

export const DivBtn = styled.div`
  display: flex;
  align-items: center;
  height: 420px;
  width: 20%;

  @media (max-width: 1288px) {
    height: 360px;
  }

  @media (max-width: 1114px) {
    height: 300px;
    justify-content: center;
    margin-right: 3rem;
  }

  @media (max-width: 986px) {
    height: 80px;
    margin-right: 3rem;
  }
`;

export const Bnt = styled.a`
  padding: 0.8rem 5rem;
  background: linear-gradient(to right, #cb22d4 0%, #4682b4 100%);
  color: white;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.3rem;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 2.5rem;

  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    background: linear-gradient(to right, #4682b4 0%, #cb22d4 100%);
  }

  @media (max-width: 1440px) {
    padding: 0.8rem 4rem;
  }

  @media (max-width: 1290px) {
    padding: 0.8rem 3rem;
  }

  @media (max-width: 1114px) {
    padding: 0.8rem 2rem;
  }
`;

export const TigreD = styled.div`
  background-image: url(${tigreE});
  width: 40%;
  background-position: center center;
  background-size: 100% 100%;
  height: 424px;
  margin-left: 8px;

  @media (max-width: 1288px) {
    height: 360px;
  }

  @media (max-width: 1114px) {
    height: 300px;
  }
`;

export const TigreE = styled.div`
  background-image: url(${tigre});
  width: 40%;
  background-position: center center;
  background-size: 100% 100%;
  height: 424px;
  margin-right: 8px;

  @media (max-width: 1288px) {
    height: 360px;
  }

  @media (max-width: 1114px) {
    height: 300px;
  }
`;

export const ProjetosH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  align-self: flex-end;
  margin-bottom: 5px;
`;
