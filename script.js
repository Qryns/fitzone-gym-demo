/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);
});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuBtn.innerHTML =
        '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';
    }

});


/* =========================
   CLOSE MENU ON LINK CLICK
========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    });

});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.padding = "15px 8%";
        header.style.background =
        "rgba(0,0,0,0.95)";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.5)";

    }else{

        header.style.padding = "20px 8%";

        header.style.background =
        "rgba(0,0,0,0.85)";

        header.style.boxShadow = "none";
    }

});


/* =========================
   FADE ANIMATION
========================= */

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.2
}

);


const animateItems = document.querySelectorAll(
".about-card,.plan-card,.trainer-card,.testimonial,.stat-box"
);

animateItems.forEach(item => {

item.style.opacity = "0";

item.style.transform =
"translateY(60px)";

item.style.transition =
"all 0.8s ease";

observer.observe(item);

});


/* =========================
   STATS COUNTER
========================= */

const counters =
document.querySelectorAll(".stat-box h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

const statsSection =
document.querySelector(".stats");

if(!statsSection) return;

const sectionTop =
statsSection.offsetTop - 300;

if(window.scrollY > sectionTop &&
!counterStarted){

counterStarted = true;

counters.forEach(counter => {

let target =
counter.innerText.replace(/\D/g,'');

target = parseInt(target);

let count = 0;

const speed = target / 100;

const updateCounter = () => {

if(count < target){

count += speed;

counter.innerText =
Math.floor(count) + "+";

requestAnimationFrame(
updateCounter
);

}
else{

counter.innerText =
target + "+";

}

};

updateCounter();

});

}

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(window.pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active-link");

if(
link.getAttribute("href")
=== "#" + current
){
link.classList.add("active-link");
}

});

});


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",

function(e){

const circle =
document.createElement("span");

const diameter =
Math.max(
this.clientWidth,
this.clientHeight
);

circle.style.width =
circle.style.height =
`${diameter}px`;

circle.style.left =
`${e.offsetX - diameter/2}px`;

circle.style.top =
`${e.offsetY - diameter/2}px`;

circle.classList.add("ripple");

const ripple =
this.querySelector(".ripple");

if(ripple){
ripple.remove();
}

this.appendChild(circle);

});

});


/* =========================
   PARALLAX HERO
========================= */

window.addEventListener("scroll", () => {

const hero =
document.querySelector(".hero");

let scroll =
window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

});


/* =========================
   CONTACT FORM DEMO
========================= */

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",

function(e){

e.preventDefault();

alert(
"Thank You! Your message has been received."
);

form.reset();

});

}


/* =========================
   TRAINER CARD HOVER
========================= */

document.querySelectorAll(
".trainer-card"
).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px) scale(1.03)";

card.style.transition =
"0.4s";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0) scale(1)";

});

});


/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
document.createElement("div");

scrollBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
background:#ff3c00;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
cursor:pointer;
font-size:18px;
z-index:999;
opacity:0;
transition:0.3s;
box-shadow:0 10px 20px rgba(0,0,0,.3);
`;

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

scrollBtn.style.opacity = "1";

}else{

scrollBtn.style.opacity = "0";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});


/* =========================
   CONSOLE BRANDING
========================= */

console.log(
"%cFITZONE GYM WEBSITE",
"color:#ff3c00;font-size:20px;font-weight:bold;"
);

console.log(
"%cDeveloped by Your Name",
"color:white;font-size:14px;"
);