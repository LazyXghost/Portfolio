import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactLinks from "./components/ContactLinks.jsx";
import Navbar from "./components/Navbar.jsx";
import FirstPage from "./components/FirstPage.jsx";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";
import Footer from "./components/Footer.jsx";
import RBTVisualiser from "./components/RBTVisualiser.jsx";

let areas = {};

class App extends React.Component {
  componentDidMount() {
    if (window.location.href !== 'http://localhost:3000/projects') {
      const aboutArea = document.querySelector('#aboutContent').getBoundingClientRect();
      areas["aboutLabel"] = [aboutArea.y, aboutArea.bottom - 200, 40];
      const projectArea = document.querySelector('#projectContent').getBoundingClientRect();
      areas["projectLabel"] = [projectArea.y, projectArea.bottom - 300, 70];
      // const galleryArea = document.querySelector('#galleryContent').getBoundingClientRect();
      // areas["galleryLabel"] = [galleryArea.y, galleryArea.bottom - 250, 70];

      window.addEventListener('scroll', this.handleScroll, true);
    }
  }

  shiftLabel = (labelClass) => {
    const windowGap = 40;
    const label = document.getElementsByClassName(labelClass)[0];
    const scrollY = document.body.scrollTop;
    const labelPosMin = areas[labelClass][0];
    const labelPosMax = areas[labelClass][1];
    const defaultGap = areas[labelClass][2];

    if (scrollY < labelPosMin - windowGap)
      label.style.top = (defaultGap).toString() + 'px';
    else if (scrollY < labelPosMax)
      label.style.top = ((scrollY - labelPosMin + windowGap) + defaultGap).toString() + 'px';
  }

  handleScroll = () => {
    this.shiftLabel('aboutLabel');
    this.shiftLabel('projectLabel');
    // this.shiftLabel('galleryLabel');
  };

  render() {
    return (
      <>
        <ContactLinks />
        <Navbar />
        <Router>
          <Routes >
            <Route path="/" element={<><FirstPage /><SecondPage /><ThirdPage />{/* <FourthPage /> */}</>} />
            <Route path="/projects" element={<><RBTVisualiser /></>} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
