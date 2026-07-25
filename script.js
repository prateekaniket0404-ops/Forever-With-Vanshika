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

Meri Jaan Vanshika ❤️,

Firstly... I love you a lot baby. ❤️

Baby, main koi pretend nahi kar raha, na koi dikhava kar raha hoon. Jo bhi feel karta hoon, woh genuinely mere dil se aata hai.

Tumhare saath hota hoon to sab kuch better lagta hai. Tumhari smile dekhkar main khush ho jata hoon, aur bas hamesha tumhe khush dekhna chahta hoon.

Mujhe tumhare liye change hona achha lagta hai. Main apna best version banna chahta hoon, jaisa tum deserve karti ho. Main chahta hoon ki tumhe hamesha meri wajah se sukoon aur khushi mile.

Main tumhe din bhar yaad karta hoon. Shayad kabhi kabhi tumhe lage ki main over ho jata hoon... lekin jaisa bhi hoon, bas tumhara hi rehna chahta hoon. ❤️

Mujhe tumhare saath sirf kuch months ya kuch years nahi bitane... I want to spend my whole life with you. Tumhare saath hasna hai, rona hai, ladna hai, manana hai, memories banana hai... sab kuch.

Aur haan... mujhe pata hai tumhe lambe paragraphs pasand nahi hain 😅, lekin kya karun...

Mere deep heart se... lungs se... kidney se... small intestine se... large intestine se... RBC, WBC... meri body ke har ek part se bas ek hi baat aati hai...

I LOVE YOU SO MUCH BABY. ❤️🧿

Will You Stay With Me Forever? 💍❤️.

Forever Yours,
Prateek ❤️
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
