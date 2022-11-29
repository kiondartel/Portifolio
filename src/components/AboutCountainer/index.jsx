import * as Styled from "./styles";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import SocialNetwork from "../SocialNetwork";

const AboutCountainer = () => {
  return (
    <Styled.Container>
      <Styled.DivContent>
        <Styled.Title>Sobre:</Styled.Title>
        <Styled.P>
          Me chamo Gabriel Lucas, tenho 24 anos, cursando A.D.S
        </Styled.P>
        <Styled.P>
          Atualemte sou desenvolvedor front-end com objetivo de me tornar
          full-stack
        </Styled.P>
      </Styled.DivContent>
      <Styled.DivContent>
        <Styled.Title>Contato:</Styled.Title>
        <Styled.InforCard>
          <AiFillPhone style={{ color: "#e93b81" }} />
          <div>
            <Styled.SubTitle>Whatsapp:</Styled.SubTitle>
            <Styled.P>(31) 99417-7708</Styled.P>
          </div>
        </Styled.InforCard>
        <Styled.InforCard>
          <AiOutlineMail style={{ color: "#6ab5b9" }} />
          <div>
            <Styled.SubTitle>Email:</Styled.SubTitle>
            <Styled.P>gabriellucasseverino@hotmail.com</Styled.P>
          </div>
        </Styled.InforCard>
      </Styled.DivContent>
      <SocialNetwork />
    </Styled.Container>
  );
};

export default AboutCountainer;
