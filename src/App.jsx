import ProjectsContainer from "./components/ProjectsContainer";
import MainContainer from "./components/MainContainer";
import { MenuLinks } from "./components/MenuLinks";
import GlobalStyled from "./styles/globalstyles";
import AboutCountainer from "./components/AboutCountainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section>
      <BrowserRouter>
        <MenuLinks />
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
        <ProjectsContainer />
        <AboutCountainer />
        <GlobalStyled />
      </BrowserRouter>
    </section>
  );
}

export default App;
