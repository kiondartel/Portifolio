import * as Styled from "./styles";
import gabriel from "../../image/gabriel.jpg";

const ProjectsContainer = () => {
  return (
    <Styled.Container>
      <Styled.Background>
        <Styled.H1>Gabriel Lucas</Styled.H1>
        <Styled.H3>Desenvolver Front End</Styled.H3>
      </Styled.Background>
      <Styled.BackgroundPhoto>
        <Styled.Image src={gabriel} alt="Gabriel" />
      </Styled.BackgroundPhoto>
      <Styled.TigreContainer>
        <Styled.TigreD />
        <Styled.ProjetosH1>Projetos</Styled.ProjetosH1>
        <Styled.TigreE />
      </Styled.TigreContainer>
    </Styled.Container>
  );
};

export default ProjectsContainer;
