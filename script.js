/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    document.addEventListener("click", (e) => {
        if (
            !menuBtn.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            navLinks.classList.remove("active");
        }
    });
}

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

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

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            current &&
            link.getAttribute("href").includes(current)
        ) {
            link.classList.add("active-link");
        }

    });

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".stat-box h2");

let counterStarted = false;

function startCounter() {

    counters.forEach(counter => {

        const original =
        counter.innerText;

        const target =
        parseInt(original);

        let count = 0;

        const increment = target / 100;

        function updateCounter() {

            if (count < target) {

                count += increment;

                if (target === 99) {
                    counter.innerText =
                    Math.ceil(count) + "%";
                } else {
                    counter.innerText =
                    Math.ceil(count) + "+";
                }

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                if (target === 99) {
                    counter.innerText = "99%";
                } else {
                    counter.innerText =
                    target + "+";
                }
            }
        }

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(".stats");

    if (!statsSection) return;

    const statsTop =
    statsSection.offsetTop - 400;

    if (
        window.scrollY > statsTop &&
        !counterStarted
    ) {

        startCounter();
        counterStarted = true;

    }

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".service-card, .project-card, .about-content, .about-image, .process-box, .testimonial-card"
);

function reveal() {

    revealElements.forEach(element => {

        const revealTop =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if (revealTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", reveal);
reveal();

/* ==========================
   CONTACT FORM VALIDATION
========================== */

const form =
document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
        form.querySelector(
        'input[placeholder="Your Name"]'
        );

        const email =
        form.querySelector(
        'input[type="email"]'
        );

        const subject =
        form.querySelector(
        'input[placeholder="Subject"]'
        );

        const message =
        form.querySelector("textarea");

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !subject.value.trim() ||
            !message.value.trim()
        ) {

            alert(
            "Please fill all fields before sending."
            );

            return;
        }

        alert(
        "Thank you! Your message has been sent successfully."
        );

        form.reset();

    });

}

/* ==========================
   PAGE LOAD EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});
