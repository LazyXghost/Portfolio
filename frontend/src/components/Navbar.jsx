import React from "react";

export default function Navbar() {
    const displayValue = "flex";
    function toggleNavbar() {
        const slidingNavbar = document.getElementById("slidingnavbar");
        slidingNavbar.style.display = (slidingNavbar.style.display === displayValue) ? "none" : displayValue;
    }
    // function toggleScroll() {
        // const slidingNavbar = document.getElementById("slidingnavbar");
        // (slidingNavbar.style.display == displayValue) ? disableScroll() : enableScroll();
    // }
    // function navbarClick() {
        // toggleScroll();
        // toggleNavbar();
    // }

    return (
        <div className="header">
            <div id="navbar">
                <a href="/">
                    <div id="navbarlogo">Lazy<span id="navlogo">X</span>ghost</div>
                </a>
                <div id="navbarlinks">
                    <a className="navbarlink" href="/#home">Home</a>
                    <a className="navbarlink" href="/#about">About</a>
                    <a className="navbarlink" href="/#projects">Projects</a>
                    <a className="navbarlink" href="/visualiser">Visualiser</a>
                    {/* <a className="navbarlink" href="#gallery">Gallery</a> */}
                </div>
                <div id="slidingnavbaricon" onClick={toggleNavbar}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div id="slidingnavbar">
                <div id="slidingnavbarlinks">
                    <div className="slidingnavbarlink">
                        <a href="/#home" onClick={toggleNavbar}>Home</a>
                    </div>
                    <div className="slidingnavbarlink">
                        <a href="/#about" onClick={toggleNavbar}>About</a>
                    </div>
                    <div className="slidingnavbarlink">
                        <a href="/#projects" onClick={toggleNavbar}>Projects</a>
                    </div>
                    <div className="slidingnavbarlink">
                        <a href="/visualiser" onClick={toggleNavbar}>Visualiser</a>
                    </div>
                    {/* <div className="slidingnavbarlink">
                        <a href="#gallery" onClick={toggleNavbar}>Gallery</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}