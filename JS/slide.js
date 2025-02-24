let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

let slide1_1 = document.getElementById("slide1-1");
let slide1_2 = document.getElementById("slide1-2");

let slide2_1 = document.getElementById("slide2-1");
let slide2_2 = document.getElementById("slide2-2");

let slide3_1 = document.getElementById("slide3-1");
let slide3_2 = document.getElementById("slide3-2");

slide1.addEventListener("click", () => {
    slide1_1.classList.add("slide-left");
    slide1_2.classList.add("slide-right");
    slide1_1.style.opacity = "1";
    slide1_2.style.opacity = "1";

    slide2_1.classList.remove("slide-left");
    slide2_2.classList.remove("slide-right");
    slide2_1.style.opacity = "0";
    slide2_2.style.opacity = "0";

    slide3_1.classList.remove("slide-left");
    slide3_2.classList.remove("slide-right");
    slide3_1.style.opacity = "0";
    slide3_2.style.opacity = "0";
});

slide2.addEventListener("click", () => {
    slide2_1.classList.add("slide-left");
    slide2_2.classList.add("slide-right");
    slide2_1.style.opacity = "1";
    slide2_2.style.opacity = "1";

    slide1_1.classList.remove("slide-left");
    slide1_2.classList.remove("slide-right");
    slide1_1.style.opacity = "0";
    slide1_2.style.opacity = "0";

    slide3_1.classList.remove("slide-left");
    slide3_2.classList.remove("slide-right");
    slide3_1.style.opacity = "0";
    slide3_2.style.opacity = "0";
});

slide3.addEventListener("click", () => {
    slide3_1.classList.add("slide-left");
    slide3_2.classList.add("slide-right");
    slide3_1.style.opacity = "1";
    slide3_2.style.opacity = "1";

    slide1_1.classList.remove("slide-left");
    slide1_2.classList.remove("slide-right");
    slide1_1.style.opacity = "0";
    slide1_2.style.opacity = "0";

    slide2_1.classList.remove("slide-left");
    slide2_2.classList.remove("slide-right");
    slide2_1.style.opacity = "0";
    slide2_2.style.opacity = "0";
});


//  second slider on second section

const pre = document.getElementById('pre');
const next = document.getElementById('next');
const btnCon = document.getElementById('card-con');

pre.addEventListener('click', () => {
    btnCon.scrollBy({left: -500, behavior: 'smooth'});
});

next.addEventListener('click', () => {
    btnCon.scrollBy({left: 500, behavior: 'smooth'});
});