import { Suspense, lazy, useEffect, useState } from "react";
import AOS from "aos";
import Loader from "./components/Loader";
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Work from "./components/Work/Work"
import LanguageSwitcher from "./components/LanguageSwitcher"
import { preloadAppAssets } from "./utils/preload";

import "aos/dist/aos.css";

const Tech = lazy(() => import("./components/Tech/Tech"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const TestimonialsSection = lazy(() => import("./components/Testimonials/TestimonialsSection"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    const preload = async () => {
      await Promise.allSettled([
        preloadAppAssets(),
        import("./components/Tech/Tech"),
        import("./components/Projects/Projects"),
        import("./components/Testimonials/TestimonialsSection"),
        import("./components/Contact/Contact"),
      ]);
      if (isMounted) setLoading(false);
    };
    preload();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <header>
            <Header />
          </header>
          <LanguageSwitcher />
          <main>
            <Home />
            <About />
            <Work />
            <Suspense fallback={null}>
              <Tech />
            </Suspense>
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
            <Suspense fallback={null}>
              <TestimonialsSection />
            </Suspense>
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </main>
        </>
      )}
    </>
  )
}
export default App
