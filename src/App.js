import React, { useEffect, useState } from "react";
import Home from "./components/home/Home";
import Service from "./components/service/Service";
import Spray from "./components/spray/Spray";
import Panel from "./components/panel/Panel";
import Blog from "./components/blog/Blog";
import Prior from "./components/prior/Prior";
import Contact from "./components/contact/Contact";
import Address from "./components/address/Address";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";






function App() {

  return (
    <div className="flex flex-col min-h-screen">

      <Nav />

      <Home />

      <Service />

      <Spray />

      <Panel />

      {/* <Blog />

      <Prior /> */}

      <Contact />

      <Address />

      <Footer />

    </div>
  );
}

export default App;
