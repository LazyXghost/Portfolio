import React, { useEffect, useState } from "react";

export default function SecondPage() {
    const [rank, setRank] = useState([]);
    useEffect(() => {
        const Http = new XMLHttpRequest();
        const url = 'https://codeforces.com/api/user.info?handles=Lazyghost';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var response = JSON.parse(Http.response);
                setRank(response['result'][0]['rank']);
            }
        }
    }, []);

    return (
        <div className="page fullPage" id="about">
            <div className="aboutLabel">About</div>
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
                        I am a <span className="underline"><a href="https://codeforces.com/profile/Lazyghost">
                            {rank} on codeforces
                        </a></span>. I am open to working on new projects as long as i get to learn something new.
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
                            <div className="iconLabel">JS</div>
                        </div>
                        <div className="iconContainer">
                            <i className="toolsAndTechIcon fa-brands fa-node"></i>
                            <div className="iconLabel">Node JS</div>
                        </div>
                        <div className="iconContainer">
                            <i>
                                <svg className="toolsAndTechIcon" style={{color: "grey"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>MongoDB</title>
                                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" fill="grey"></path>
                                </svg>
                            </i>
                            <div className="iconLabel">Mongo DB</div>
                        </div>
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
    )
}