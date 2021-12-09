import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import Footer from "./components/Footer/Footer";
// import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume/Resume";
// import PortfolioContainer from "./components/PortfolioContainer";

function App() {

  return (
    <>
    <Router>
    {/* <PortfolioContainer /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/resume" element={<Resume/>}/>
        <Route exact path="/contact-info" element={<ContactInfo/>} />
      </Routes>
      <Footer/>     
      </Router>
      </>
  );
}

export default App;
