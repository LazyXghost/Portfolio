// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
      {/* <!-- ---------- CONTACT LINKS ----------- --> */}
      <div id="contactlinks">
        <a href="mailto:b20123@students.iitmandi.ac.in"><i className="fas fa-envelope contactlink" id="mailicon"></i></a>
        <a href="https://www.linkedin.com/in/rajat-bansal-a25b17218/"><i className="fab fa-linkedin contactlink" id="linkedinicon"></i></a>
        <a href="https://github.com/lazyXghost"><i className="fab fa-github contactlink" id="githubicon"></i></a>
        <a href="https://www.instagram.com/lazyghost_2701/"><i className="fab fa-instagram contactlink" id="instagramicon"></i></a>
      </div>
      {/* <!-- ------------------------------------ --> */}
      {/* <!-- ------------- FIRST PAGE ------------- --> */}
      <div className="page fullPage" id="home">
        {/* <!-- ------ Top header ------- --> */}
        <div className="header">
          <div id="navbar">
            <a href="/">
              <div id="navbarlogo">Lazy<span id="navlogo">X</span>ghost</div>
            </a>
            <div id="navbarlinks">
              <a className="navbarlink" href="#home">Home</a>
              <a className="navbarlink" href="#about">About</a>
              <a className="navbarlink" href="#projects">Projects</a>
              <a className="navbarlink" href="#gallery">Gallery</a>
            </div>
            <i id="slidingnavbaricon" className="fas fa-bars" onClick="toggleNavbar();toggleScroll();"></i>
          </div>
          <div id="slidingnavbar">
            <div id="slidingnavbarlinks">
              <div className="slidingnavbarlink">
                <a href="#home" onClick="toggleNavbar();toggleScroll();">Home</a>
              </div>
              <div className="slidingnavbarlink">
                <a href="#about" onClick="toggleNavbar();toggleScroll();">About</a>
              </div>
              <div className="slidingnavbarlink">
                <a href="#projects" onClick="toggleNavbar();toggleScroll();">Projects</a>
              </div>
              <div className="slidingnavbarlink">
                <a href="#gallery" onClick="toggleNavbar();toggleScroll();">Gallery</a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- -------------------------- --> */}
        {/* <!-- --- First page content --- --> */}
        <div id="Intro">
          <div id="IntroTitle">
            Hello<span className = "grey">.</span>
          </div>
          <div id="MainIntro">
            My name is Rajat Bansal. I am a <span className = "underline">Programmer and a Web Developer</span> and here's my Portfolio. Have a look.
          </div>
        </div>
        <img src="images/MyImage.png" id="MyImage" alt="Rajat Bansal"/>
      </div>
      {/* <!-- -------------------------- --> */}
      {/* <!-- ------------------------------------ --> */}
      {/* <!-- ------------ SECOND PAGE ----------- --> */}
      <div className="page fullPage" id="about">
        <div className="label aboutLabel">About</div>
        <div id="aboutContent">
          <div id="aboutContentTitle">About Me</div>
          <div id="aboutContentMain">
            <p>
              I am Rajat Bansal, a 3<sup>rd</sup> year student at IIT Mandi, pursuing B.Tech in computer science.
              Personality wise i am an introvert. I am ready to make new friends, so don't hesitate to start a convo with me :) . I like watching movies, animes and playing both video and physical games. I am also a manga reader.
            </p>
            <p>
              In programming languages i know C++ ,Python and basic Javascript.
              I like doing competitive programming and my dream is to become a software development engineer.
              I am a <underline><a href="https://codeforces.com/profile/Lazyghost">
                <rank id="rank">Specialist</rank> on codeforces
              </a></underline>. I am open to working on new projects as long as i get to learn something new.
            </p>
            <div id="toolsAndTechTitle">Tools And Technologies</div>
            <div id="toolsAndTechContent">
              <div className="iconContainer">
                <i className="toolsAndTechIcon fa-brands fa-html5"></i>
                <div className="iconLabel">HTML</div>
              </div>
              <div className="iconContainer">
                <i className="toolsAndTechIcon fa-brands fa-css3"></i>
                <div className="iconLabel">CSS</div>
              </div>
              <div className="iconContainer">
                <i className="toolsAndTechIcon fab fa-js"></i>
                <div className="iconLabel">Javascript</div>
              </div>
              <div className="iconContainer">
                <i className="toolsAndTechIcon fa-brands fa-node"></i>
                <div className="iconLabel">Node JS</div>
              </div>
              {/* <div className="iconContainer">
                <i>
                  <svg className="toolsAndTechIcon" style="color: grey" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>MongoDB</title>
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="grey"></path>
                  </svg>
                </i>
                <div className="iconLabel">MongoDB</div>
              </div> */}
              <div className="iconContainer">
                <i className="toolsAndTechIcon fa-brands fa-python"></i>
                <div className="iconLabel">Python</div>
              </div>
              <div className="iconContainer">
                <i>
                  <svg className="toolsAndTechIcon" viewBox="0 0 128 128">
                    <path fill="grey" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>\
                    <path fill="grey" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                    <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                    <path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"></path>
                  </svg>
                </i>
                <div className="iconLabel">C++</div>
              </div>
              <div className="iconContainer">
                <i className="toolsAndTechIcon fa-brands fa-git"></i>
                <div className="iconLabel">Git</div>
              </div>
              <div className="iconContainer">
                <i className="toolsAndTechIcon fa-brands fa-github"></i>
                <div className="iconLabel">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------ --> */}
      {/* <!-- ------------ THIRD PAGE ----------- --> */}
      <div className="page fullPage" id="projects">
        <div className="label projectLabel">Projects</div>
        <div className="row" id="projectContent">
          <div className="column">
            <div className="card">
              <img src="images/projectPortal.png" className="cardImage" alt="" />
              <div className="cardContent">
                <div className="cardContentTitle">
                  Project Portal
                </div>
                <div className="cardContentMain">
                  This is a full stack web application on which students and faculty can float and apply on different projects.
                </div>
                <div className="cardContentTechnologies">
                  <div className="cardContentTechnology">Django</div>
                  <div className="cardContentTechnology">Python</div>
                  <div className="cardContentTechnology">HTML</div>
                  <div className="cardContentTechnology">CSS</div>
                  <div className="cardContentTechnology">Javascript</div>
                </div>
                <div className="projectLinks">
                  <a href="https://github.com/naveensaigit/project_portal"><i className="fab fa-github projectLink"></i></a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src="images/mazinda.png" className="cardImage" alt="" />
              <div className="cardContent">
                <div className="cardContentTitle">
                  Mazinda
                </div>
                <div className="cardContentMain">
                  This is a full stack web application on which students and faculty can float and apply on different projects.
                </div>
                <div className="cardContentTechnologies">
                  <div className="cardContentTechnology">NodeJS</div>
                  <div className="cardContentTechnology">ExpressJS</div>
                  <div className="cardContentTechnology">MongoDB</div>
                  <div className="cardContentTechnology">HTML</div>
                  <div className="cardContentTechnology">CSS</div>
                  <div className="cardContentTechnology">JS</div>
                </div>
                <div className="projectLinks">
                  <a href="https://github.com/naveensaigit/project_portal"><i className="fab fa-github projectLink"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="column shifted">
            <div className="card">
              <img src="images/projectPortal.png" className="cardImage" alt="" />
              <div className="cardContent">
                <div className="cardContentTitle">
                  Project Portal
                </div>
                <div className="cardContentMain">
                  This is a full stack web application on which students and faculty can float and apply on different projects.
                </div>
                <div className="cardContentTechnologies">
                  <div className="cardContentTechnology">Django</div>
                  <div className="cardContentTechnology">Python</div>
                  <div className="cardContentTechnology">HTML</div>
                  <div className="cardContentTechnology">CSS</div>
                  <div className="cardContentTechnology">Javascript</div>
                </div>
                <div className="projectLinks">
                  <a href="https://github.com/naveensaigit/project_portal"><i className="fab fa-github projectLink"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ------------------------------------ --> */}
      {/* <!-- ------------ FOURTH PAGE ----------- --> */}
      {/* <!-- <div className="page fullPage" id="gallery">
          <div className="label galleryLabel">Gallery</div>
          <div className="row" id="galleryContent">
            <img src="images/AlbumImages/4.jpg" className="portrait" alt="" style="left:20px; top:20px; z-index:100;">
            <img src="images/AlbumImages/15.jpg" className="portrait" alt="" style="left:240px; top:150px; z-index:100;">
            <img src="images/AlbumImages/8.jpg" className="portrait" alt="" style="left:550px; top:45px; z-index: 100;">
            <img src="images/AlbumImages/17.jpg" className="portrait" alt="" style="left: 1000px;top: 30px;z-index: 100;">
            <img src="images/AlbumImages/10.jpg" className="portrait" alt="" style="left: 1450px;top: 10px;z-index: 100;">
            <img src="images/AlbumImages/2.jpg" className="portrait" alt="" style="left: 930px;top: 420px;z-index: 100;">
            <img src="images/AlbumImages/13.jpg" className="portrait landscape" alt="" style="left: 1330px;top: 390px;z-index: 100;">
            <img src="images/AlbumImages/3.jpg" className="force-portrait" alt="" style="left: 0px;top: 540px;z-index: 100;">
            <img src="images/AlbumImages/1.jpg" className="landscape" alt="" style="left: 370px;top: 660px;z-index: 100;">
            <img src="images/AlbumImages/6.jpg" className="landscape" alt="" style="left: 1050px;top: 800px;z-index: 100;">
            <img src="images/AlbumImages/11.jpg" className="portrait" alt="" style="left: 1420px;top: 700px;z-index: 100;">
          </div>
        </div> --> */}
      {/* <!-- ------------------------------------ --> */}
      <div className="footer">
        <div className="footerNav">
          <div className="footerNavLink"><a href="#home">HOME</a></div>/
          <div className="footerNavLink"><a href="#about">ABOUT</a></div>/
          <div className="footerNavLink"><a href="#projects">PROJECTS</a></div>
        </div>
        <div className="copyright">
          &copy 2022 Rajat Bansal, All Rights Reserved
        </div>
        <div className="location">
          Kaithal - Haryana - India.
        </div>
      </div>
    </>
  );
}

export default App;
