const blocks = document.getElementsByClassName('blocks');
const banner = document.getElementsByClassName('banner')[0];

for (var i = 1; i <400; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    blocks[i].style.animationDelay = `${i*0.05}s`;
}
console.log("Hi")