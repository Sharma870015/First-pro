import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import GridLayout from "./components/GridLayout";
import Paragraph from "./components/Paragraph";
import ImageBoxes from "./components/ImageBoxes";
import Para2 from "./components/Para2";
import CaseStudies from "./components/CaseStudies";
import Para3 from "./components/Para3";
import Plans from "./components/Plans";
import PhotoBoxes from "./components/PhotoBoxes";
import Para4 from "./components/Para4";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      
      <Heading />
      <Navbar />
      <GridLayout />
      <Paragraph />
      <ImageBoxes />
      <Para2 />
      <CaseStudies />
      <Para3 />
      <Plans />
      <PhotoBoxes />
      <Para4 />
      <FAQ />
    </>
  );
}
function About() {
  return (
    <>
      <Heading />
    </>
  );
}

function Contact() {
  return (
    <>
      <PhotoBoxes />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
