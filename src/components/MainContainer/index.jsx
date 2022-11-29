import * as Styled from "./styles";
import gabriel from "../../image/gabriel.jpg";

const ProjectsContainer = () => {
  return (
    <Styled.Container>
      <Styled.TigreBackground>
        <Styled.BackgroundHeader>
          <Styled.H1>Gabriel Lucas</Styled.H1>
          <Styled.H3>Desenvolver Front End</Styled.H3>
        </Styled.BackgroundHeader>
        <Styled.BackgroundPhoto>
          <Styled.Image src={gabriel} alt="Gabriel" />
        </Styled.BackgroundPhoto>
      </Styled.TigreBackground>
      <Styled.TigreContainer>
        <Styled.TigreD id="box1" />
        <Styled.DivBtn>
          <Styled.Bnt href="https://github.com/kiondartel">
            Curriculo
          </Styled.Bnt>
        </Styled.DivBtn>
        <Styled.TigreE id="box2" />
      </Styled.TigreContainer>
    </Styled.Container>
  );
};

export default ProjectsContainer;
