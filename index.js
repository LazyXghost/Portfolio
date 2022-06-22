// var canvas = document.querySelector('canvas');
// canvas.setAttribute('class','canvas');
// console.log(window.innerWidth); // 1550
// console.log(window.innerHeight); // 770
// var height = window.innerHeight;
var pos = [770, 1300];
$(document).ready(function() {
    shiftLabels();
    addCodeforcesRank();
});
window.addEventListener("scroll", shiftLabels);

function addCodeforcesRank(){
    const Http = new XMLHttpRequest();
    const url = 'https://codeforces.com/api/user.info?handles=Lazyghost';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            console.log(Http.response);
            var response = JSON.parse(Http.response);
            var rank = response['result'][0]['rank'];
            var elem = document.getElementById('rank');
            elem.innerHTML = rank;
        }
    }
}
function shiftLabels(){
    const labels = document.getElementsByClassName('label');
    for(var i = 0;i<labels.length;i++){
        const label = labels[i];
        if(scrollY > pos[i] && scrollY < pos[i] + window.innerHeight - 250){
            label.style.top = (scrollY - pos[i]).toString()+"px";
        }
    }
}