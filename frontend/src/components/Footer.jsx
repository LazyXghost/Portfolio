import React from "react";
export default function Footer() {
    return (
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
    )
}