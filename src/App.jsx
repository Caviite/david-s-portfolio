import { useState } from "react";
import Splashscreen from "./page/Splashscreen";
import Portifolio from "./page/portfolio";
import About from "./page/About";
import Skills from "./page/Skills";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Footer from "./page/Fotter";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div>
      {showSplash && <Splashscreen onComplete={() => setShowSplash(false)} />}
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