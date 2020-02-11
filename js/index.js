let nav = document.querySelector('.nav-container nav');
window.addEventListener('load', () => nav.style.backgroundColor = 'coral');
let inputNav = document.createElement('input');
nav.appendChild(inputNav);
inputNav.addEventListener('focus', () => inputNav.style.backgroundColor = 'pink');
inputNav.addEventListener('select', () => inputNav.style.color = 'yellow');
let stopLinks = document.querySelectorAll('.nav-link');
stopLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

let siteBody = document.querySelector('body');
siteBody.addEventListener('keydown', () => siteBody.style.backgroundColor = 'lightgrey');
siteBody.addEventListener('click', () => siteBody.style.backgroundColor = 'green');
window.addEventListener('resize', () => siteBody.style.backgroundColor = 'lightblue');

let headerH1 = document.querySelector('.logo-heading');
headerH1.addEventListener('mouseover', () => headerH1.innerHTML = 'you will never touch the logo');
headerH1.addEventListener('drag', () => headerH1.style.color = 'red');

let headerBanner = document.querySelector('.intro img');
headerBanner.addEventListener('wheel', () => headerBanner.style.width = '30%');
headerBanner.addEventListener('dblclick', () => headerBanner.style.width = '100%');

let firstImg = document.querySelector('.content-section .img-content img');
firstImg.addEventListener('mouseenter', () => firstImg.style.transform = "scale(1.2)");
firstImg.addEventListener('mouseenter', () => firstImg.style.transition = "transform 0.5s");
firstImg.addEventListener('mouseout', () => firstImg.style.transform = 'scale(1)')

let bottomBtn = document.querySelector('.destination .btn');
bottomBtn.addEventListener('click', () => {
    document.querySelector('.content-pick').style.backgroundColor = 'orange';
    gsap.to(bottomBtn, {
        duration: 0.6,
        rotateY: 180,
        ease: 'elastice(1, 0.75)'
    })
    event.stopPropagation();
});


