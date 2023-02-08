import "./App.scss";

import Header from "./sections/Header/Header";
import About from "./sections/AboutMe/About";
import Experience from "./sections/MyExperience/Experience";
import Portfolio from "./sections/Portfolio/Portfolio";
import Contact from "./sections/ContactMe/Contact";
import Footer from "./sections/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
