import ProjectsContainer from "./components/ProjectsContainer";
import MainContainer from "./components/MainContainer";
import { MenuLinks } from "./components/MenuLinks";
import GlobalStyled from "./styles/globalstyles";
import AboutCountainer from "./components/AboutCountainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoTop from "./components/GoTop";

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    window && window.scrollTo(0, 0);
  };

  return (
    <section>
      <BrowserRouter>
        <MenuLinks />
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
        <ProjectsContainer />
        <AboutCountainer />
        <GoTop handleClick={handleClick} />
        <GlobalStyled />
      </BrowserRouter>
    </section>
  );
}

export default App;
