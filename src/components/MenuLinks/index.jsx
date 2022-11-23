import * as Styled from "./styles";
import logo from "../../image/logo.jpg";

export const MenuLinks = () => {
  return (
    <Styled.Container>
      <Styled.Logo img={logo} />
      <Styled.DivLinks>
        <Styled.Links href="#">Sobre</Styled.Links>
        <Styled.Links href="#">Projetos</Styled.Links>
      </Styled.DivLinks>
    </Styled.Container>
  );
};
