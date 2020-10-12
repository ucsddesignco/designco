import React from "react";
import NavbarSony from "./components/NavbarSony";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "../../components/Navbar";

function Sony() {
  return (
    <div>
      <NavbarSony />
      <Hero />
      <About />
      <Timeline />
      <Faq />
    </div>
  );
}

export default Sony;
