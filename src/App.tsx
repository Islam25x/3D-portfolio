import { useEffect, useState } from "react";
import AOS from "aos";
import Loader from "./components/Loader";
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work/Work"
import Tech from "./components/Tech/Tech"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <header>
            <Header />
          </header>
          <main>
            <Home />
            <About />
            <Work />
            <Tech />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}
export default App
