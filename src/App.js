import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Contact />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
