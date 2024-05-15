import { Route, Routes } from "react-router-dom";
import React from "react";
import About from "./nav/about";
import Contact from "./nav/contact";
import Home from "./nav/home";
import Login from "./nav/login";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="flex flex-col h-screem">
      <Header />
      <Main>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;