// ===== Background Music =====

const bgMusic = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
}, { once: true });

// ===== Slideshow =====

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

}

setInterval(()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

},3000);

// ===== Floating Hearts =====

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,500);
// ===== No Button Moving =====

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});

// ===== Love Letter =====

const letter = `

Dear Vanshika ❤️,

Jab se tum meri life me aayi ho,
har din aur bhi khoobsurat lagta hai.

Tum meri smile ho,
meri happiness ho,
aur meri sabse favourite person ho.

Main promise karta hu ki
har situation me tumhara saath dunga.

I Love You So Much ❤️

Will You Be Mine Forever?

`;

const typeText = document.getElementById("typeText");

let i = 0;

function typeWriter(){

    if(i < letter.length){

        typeText.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

// ===== Yes Button =====

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click",()=>{

    alert("❤️ YAYYY!! I LOVE YOU FOREVER ❤️");

    if(typeText.innerHTML===""){

        typeWriter();

    }

    document.querySelector(".letter").scrollIntoView({

        behavior:"smooth"

    });

});

// ===== Start Button =====

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click",()=>{

    document.querySelector(".gallery").scrollIntoView({

        behavior:"smooth"

    });

});