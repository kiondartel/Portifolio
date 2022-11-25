import styled from "styled-components";
import bg from "../../image/main-bg.svg";
import tigre from "../../image/tigre.png";
import tigreE from "../../image/tigre2.png";

export const Container = styled.div`
  align-items: center;
  min-height: 110vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
`;

export const Background = styled.div`
  display: block;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 5rem;
  color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  color: #fff;
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
  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 5px;
`;

export const TigreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TigreD = styled.div`
  display: ;
  background-image: url(${tigreE});
  width: 45%;
  background-position: center center;
  background-size: 100% 100%;
  height: 424px;
  margin-left: 8px;
`;

export const TigreE = styled.div`
  background-image: url(${tigre});
  width: 45%;
  background-position: center center;
  background-size: 100% 100%;
  height: 424px;
  margin-right: 8px;
`;
