import styled from "styled-components";
import tigre from "../../image/tigre.png";
import tigreE from "../../image/tigre2.png";
import tigreback from "../../image/tigreback.jpg";

export const Container = styled.div`
  align-items: center;
  min-height: 100vh;
  background-color: white;
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
  height: 70vh;
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
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  color: white;
`;

export const DivBtn = styled.div`
  height: 424px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Bnt = styled.a`
  padding: 0.8rem 5rem;
  background: linear-gradient(
    90deg,
    rgb(241, 206, 241) 0%,
    rgb(211, 104, 214) 40%,
    rgb(216, 25, 216) 60%,
    rgb(94, 168, 202) 70%,
    rgb(177, 212, 231) 80%,
    rgb(213, 228, 236) 98%
  );
  color: white;
  font-family: "Gill Sans", "Gill Sans MT";
  font-size: 1.3rem;
  text-decoration: none;
  border-radius: 10px;
  margin-left: 2.5rem;
  border: 1px solid black;
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
`;

export const ProjetosH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  align-self: flex-end;
  margin-bottom: 5px;
`;

export const TigreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TigreD = styled.div`
  background-image: url(${tigreE});
  width: 40%;
  background-position: center center;
  background-size: 100% 100%;
  height: 424px;
  margin-left: 8px;
`;

export const TigreE = styled.div`
  background-image: url(${tigre});
  width: 40%;
  background-position: center center;
  background-size: 100% 100%;
  height: 424px;
  margin-right: 8px;
`;
