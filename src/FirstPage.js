function FirstPage() {
    return (
        <div id="firstpage">
            <div id="header">
                <div id="navbar">
                    <div id="navbarlogo">Port<span id="navlogo">folio.</span></div>
                    <div id="navbarlinks">
                        <a class="navbarlink" href="#">Home</a>
                        <a class="navbarlink" href="#">About</a>
                        <a class="navbarlink" href="#">Contact</a>
                    </div>
                </div>

                {/* static folder link */}
                <img src="static/images/Pipe.png" id="Pipe" alt="Pipe"></img>
                {/* static folder link */}

            </div>
            <div id="contactlinks">
                <a href="https://www.linkedin.com/in/rajat-bansal-a25b17218/"><i class="fab fa-linkedin contactlink"></i></a>
                <a href="https://github.com/lazyXghost"><i class="fab fa-github contactlink" id="githubicon"></i></a>
                <a href="https://www.instagram.com/lazyghost_2701/"><i class="fab fa-instagram contactlink" id="instagramicon"></i></a>
            </div>
            <div id="firstpagecontent">
                <div id="intro">
                    <span id="Hi">Hi.</span> My name is <b>Rajat Bansal</b> and I am a second year student at IIT Mandi |
                    CSE.
                </div>
                <div id="art">
                    {/* <img src="https://doodleipsum.com/700/hand-drawn?i=34c625e6dca86d75f482e050e145c82b" /> */}
                    {/* <img src="https://doodleipsum.com/700/hand-drawn?i=a96b513e1e4deb10b96d2d852ebd824e" /> */}

                    {/* static folder link */}
                    <img id="vectorart" src="static/images/finalvectorart.png" />
                    {/* static folder link */}
                </div>
            </div>
        </div>
    );
}

export default FirstPage;
