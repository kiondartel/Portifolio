import ProjectsContainer from "../components/ProjectsContainer";
import MainContainer from "../components/MainContainer";
import { MenuLinks } from "../components/MenuLinks";
import GlobalStyled from "../styles/globalstyles";
import AboutCountainer from "../components/AboutCountainer";

import * as Styles from "./styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoTop from "../components/GoTop";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    window && window.scrollTo(0, 0);
  };

  return (
    <Styles.Container>
      <BrowserRouter>
        <MenuLinks />
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
        <ProjectsContainer />
        <AboutCountainer />
        <GoTop handleClick={handleClick} id="top" />
        <GlobalStyled />
      </BrowserRouter>
    </Styles.Container>
  );
}

export default App;
