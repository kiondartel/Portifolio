import * as Styled from "./styles";
import netflix from "../../image/netflx.jpg";
import finance from "../../image/finance.png";
import landing from "../../image/landing.png";
const ProjectsContainer = () => {
  return (
    <Styled.Container>
      <Styled.H1>Projetos</Styled.H1>
      <Styled.P>Confira meus projetos</Styled.P>
      <Styled.Content>
        <Styled.ProjectDiv>
          <Styled.Netflximg src={netflix} />
          <Styled.ProjectsP>React</Styled.ProjectsP>
          <Styled.H3>Netflix</Styled.H3>
          <Styled.ProjectsP>
            Clone netflix, consumindo uma api externa de filmes
          </Styled.ProjectsP>
          <Styled.Button href="https://netflix-cl-56f7d.web.app">
            Ver Projeto
          </Styled.Button>
        </Styled.ProjectDiv>
        <Styled.ProjectDiv>
          <Styled.Netflximg src={finance} />
          <Styled.ProjectsP>React</Styled.ProjectsP>
          <Styled.H3>Finance Control</Styled.H3>
          <Styled.ProjectsP>
            Aplicativo de controle de finanças
          </Styled.ProjectsP>
          <Styled.Button href="https://finance-control-dev.web.app">
            Ver Projeto
          </Styled.Button>
        </Styled.ProjectDiv>
        <Styled.ProjectDiv>
          <Styled.Netflximg src={landing} />
          <Styled.ProjectsP>React</Styled.ProjectsP>
          <Styled.H3>Landing Pages</Styled.H3>
          <Styled.ProjectsP>Projeto de curso Landing Page</Styled.ProjectsP>
          <Styled.Button href="https://github.com/kiondartel/Landing_Pages">
            Ver Projeto
          </Styled.Button>
        </Styled.ProjectDiv>
      </Styled.Content>
      <Styled.GitBnt>
        <Styled.Bnt href="https://github.com/kiondartel">
          Confira Mais{" "}
        </Styled.Bnt>
      </Styled.GitBnt>
    </Styled.Container>
  );
};

export default ProjectsContainer;
