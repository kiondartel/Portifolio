import * as Styled from "./styles";
import logo from "../../image/neon.png";

export const MenuLinks = () => {
  return (
    <Styled.Container>
      <Styled.DivLogo>
        <Styled.Logo src={logo} />
        <Styled.SubTitle>Bem vindo</Styled.SubTitle>
      </Styled.DivLogo>
      <Styled.DivLinks>
        <Styled.Links href="/">Home</Styled.Links>
      </Styled.DivLinks>
    </Styled.Container>
  );
};
