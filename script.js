/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* ==========================
   CLOSE MENU ON CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#000";
        navbar.style.boxShadow =
        "0 5px 20px rgba(255,153,51,0.15)";

    } else {

        navbar.style.background =
        "rgba(0,0,0,0.90)";

        navbar.style.boxShadow = "none";
    }

});

/* ==========================
   ACTIVE MENU HIGHLIGHT
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            .includes(current)
        ){

            link.classList.add("active-link");
        }

    });

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".stat-box h2");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
        parseInt(counter.innerText);

        let count = 0;

        const increment =
        target / 100;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count) + "+";

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                if(target === 99){

                    counter.innerText = "99%";

                } else {

                    counter.innerText =
                    target + "+";
                }
            }
        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(".stats");

    const statsTop =
    statsSection.offsetTop - 400;

    if(
        window.scrollY > statsTop &&
        !counterStarted
    ){

        startCounter();
        counterStarted = true;
    }

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".service-card, .project-card, .about-content, .about-image, .process-box, .testimonial-card, .info-box"
);

function reveal(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

/* ==========================
   FORM SUBMIT DEMO
========================== */

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert(
    "Thank you! Your message has been sent successfully."
    );

    form.reset();

});

}

/* ==========================
   PRELOADER EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 0.8s ease";

        document.body.style.opacity = "1";

    },100);

});