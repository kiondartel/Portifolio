import About from "./components/About";
import MainContainer from "./components/MainContainer";
import { MenuLinks } from "./components/MenuLinks";
import GlobalStyled from "./styles/globalstyles";

function App() {
  return (
    <section>
      <div className="App">
        <MenuLinks />
        <MainContainer />
        <About />
        <GlobalStyled />
      </div>
    </section>
  );
}

export default App;
