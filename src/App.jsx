import MainLayout from "./layouts/MainLayout";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";

/**
 * App
 * ----------------------------------------------------------------------------
 * Root composition of the portfolio. Delegates chrome (nav, footer) to
 * MainLayout and declares the ordered flow of content sections.
 */
function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </MainLayout>
  );
}

export default App;
