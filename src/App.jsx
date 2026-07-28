import React from "react";

//internal import
import {
  Home,
  Features,
  Community,
  Blog,
  Pricing,
  Register,
  Navbar,
  Footer,
} from "./components";
import "./global.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Community />
      <Blog />
      <Pricing />
      <Register />
      <Footer />
    </>
  );
}

export default App;
