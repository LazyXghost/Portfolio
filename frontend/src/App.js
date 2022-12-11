import React from 'react';
import ContactLinks from "./components/ContactLinks.jsx";
import FirstPage from "./components/FirstPage.jsx";
import SecondPage from "./components/SecondPage.jsx";
import ThirdPage from "./components/ThirdPage.jsx";
import Footer from "./components/Footer.jsx";

let areas = {};

class App extends React.Component {
  componentDidMount() {
    const aboutArea = document.querySelector('#aboutContent').getBoundingClientRect();
    areas["aboutLabel"] = [aboutArea.y, aboutArea.bottom - 200, 40];
    const projectArea = document.querySelector('#projectContent').getBoundingClientRect();
    areas["projectLabel"] = [projectArea.y, projectArea.bottom - 300, 70];
    // const galleryArea = document.querySelector('#galleryContent').getBoundingClientRect();
    // areas["galleryLabel"] = [galleryArea.y, galleryArea.bottom - 250, 70];

    window.addEventListener('scroll', this.handleScroll, true);
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
        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>
        <Footer />
      </>
    );
  }
}

export default App;
