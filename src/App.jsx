import Cursor from "./component/Cursor";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from './component/About'
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);


  
  return (
    <>
      <Cursor />
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}


export default App;