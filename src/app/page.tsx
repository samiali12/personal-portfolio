import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Header/Hero";
import Navbar from "./components/Header/Navbar";
import Project from "./components/Project/Project";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
