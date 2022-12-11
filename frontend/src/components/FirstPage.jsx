import React from "react";

export default function FirstPage() {
    return (
        <div className="page fullPage" id="home">
            <div id="Intro">
                <div id="IntroTitle">
                    Hello<span className="grey">.</span>
                </div>
                <div id="MainIntro">
                    My name is Rajat Bansal. I am a <span className="underline">Programmer and a Web Developer</span> and here's my Portfolio. Have a look.
                </div>
            </div>
            <img src="images/MyImage.png" id="MyImage" alt="Rajat Bansal" />
        </div>
    )
}