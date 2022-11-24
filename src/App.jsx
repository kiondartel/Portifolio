import ProjectsContainer from "./components/ProjectsContainer";
import MainContainer from "./components/MainContainer";
import { MenuLinks } from "./components/MenuLinks";
import GlobalStyled from "./styles/globalstyles";
import AboutCountainer from "./components/AboutCountainer";

function App() {
  return (
    <section>
      <div className="App">
        <MenuLinks />
        <MainContainer />
        <ProjectsContainer />
        <AboutCountainer />
        <GlobalStyled />
      </div>
    </section>
  );
}

export default App;
