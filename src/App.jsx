import Portifolio from "./page/portfolio";
import About from "./page/About";
import Skills from "./page/Skills";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Footer from "./page/Fotter";
function App() {
  return (
    <div className="App">
      <Portifolio />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;