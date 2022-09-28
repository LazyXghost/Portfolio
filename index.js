const areas = {}
$(document).ready(function() {
    const aboutArea = document.querySelector('#aboutContent').getBoundingClientRect();
    areas["aboutLabel"] = [aboutArea.y, aboutArea.bottom-300, 40];
    const projectArea = document.querySelector('#projectContent').getBoundingClientRect();
    areas["projectLabel"] = [projectArea.y, projectArea.bottom-300, 70];
})
window.addEventListener("scroll", shiftLabels, true);

const windowGap = 40;
function shiftLabel(labelClass) {
    const label = document.getElementsByClassName(labelClass)[0];
    const scrollY = document.body.scrollTop;
    const labelPosMin = areas[labelClass][0];
    const labelPosMax = areas[labelClass][1];
    const defaultGap = areas[labelClass][2];

    if(scrollY < labelPosMin - windowGap)
        label.style.top = (defaultGap).toString() + 'px';
    else if(scrollY < labelPosMax)
        label.style.top = ((scrollY - labelPosMin + windowGap) + defaultGap).toString() + 'px';
}

function shiftLabels() {
    shiftLabel('aboutLabel');
    shiftLabel('projectLabel');
}

function addCodeforcesRank() {
    const Http = new XMLHttpRequest();
    const url = 'https://codeforces.com/api/user.info?handles=Lazyghost';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(Http.response);
            var rank = response['result'][0]['rank'];
            var elem = document.getElementById('rank');
            elem.innerHTML = rank;
        }
    }
}

const displayValue = "flex";
function toggleScroll() {
    const slidingNavbar = document.getElementById("slidingnavbar");
    (slidingNavbar.style.display == displayValue) ? disableScroll() : enableScroll();
}
function toggleNavbar() {
    const slidingNavbar = document.getElementById("slidingnavbar");
    slidingNavbar.style.display = (slidingNavbar.style.display == displayValue) ? "none" : displayValue;
}