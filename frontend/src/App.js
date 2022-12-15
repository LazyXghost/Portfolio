import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactLinks from "./components/ContactLinks.jsx";
import Navbar from "./components/Navbar.jsx";
import FirstPage from "./components/FirstPage.jsx";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";
import Footer from "./components/Footer.jsx";
import RBTVisualiser from "./components/RBTVisualiser.jsx";

class App extends React.Component {
  componentDidMount() {
    if (window.location.href === 'http://localhost:3000/') {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  }

  handleScroll = () => {
    let aboutContent = document.querySelector('#aboutContent');
    let aboutLabel = document.querySelector('.aboutLabel');
    const topValue = String(aboutContent.getBoundingClientRect().bottom - aboutContent.getBoundingClientRect().top - 60) + "px";

    if (120 - aboutContent.getBoundingClientRect().bottom > 0) {
      aboutLabel.style.top = topValue;
      aboutLabel.style.position = "relative";
    }
    else {
      aboutLabel.style.top = "0px";
      aboutLabel.style.position = "sticky";
    }
  };

  render() {
    return (
      <>
        <ContactLinks />
        <Navbar />
        <Router>
          <Routes >
            <Route path="/" element={<><FirstPage /><SecondPage /><ThirdPage />{/* <FourthPage /> */}</>} />
            <Route path="/visualiser" element={<><RBTVisualiser /></>} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
