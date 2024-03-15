import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Backdrop from "./Components/Backdrop/Backdrop";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Backdrop />
      <div className="container">
        <Title subTitle="OUR SERVICES" title="What We Offer" />
        <Services />
        <About />
        <Title subTitle="GALLERY" title="Events" />
        <Events />
        <Title subTitle="Testimonials" title="What our Customers Say" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
