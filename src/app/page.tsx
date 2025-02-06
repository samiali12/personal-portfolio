import About from "./components/About/About";
import Hero from "./components/Header/Hero";
import Navbar from "./components/Header/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
