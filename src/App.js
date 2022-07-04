import React from "react";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";






function App() {

  return (
    <div className="flex flex-col min-h-screen">

      <Nav />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
