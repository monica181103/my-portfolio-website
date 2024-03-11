let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
const sr = ScrollReveal({
    distance:'40px',
    duration:2500,
    reset:true
});
sr.reveal('.logo',{delay:200,orgin:'left'});
sr.reveal('.navbar',{delay:250,orgin:'top'});
sr.reveal('.menu-btn',{delay:300,orgin:'right'});
sr.reveal('.home-text span',{delay:350,orgin:'top'});
sr.reveal('.home-text h1',{delay:400,orgin:'left'});
sr.reveal('.home-text p',{delay:450,orgin:'right'});
sr.reveal('.main-btn',{delay:500,orgin:'left'});

sr.reveal('.share',{delay:550,orgin:'bottom'});
sr.reveal('.home-img',{delay:600,orgin:'right'});
