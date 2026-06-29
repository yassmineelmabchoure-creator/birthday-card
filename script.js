const flowers = document.querySelectorAll(".flower");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const message = document.querySelector(".message");

/* ===== INTRO ANIMATION ON LOAD ===== */
window.addEventListener("load", () => {

    // fade in title
    title.style.opacity = "0";
    title.style.transform = "translateY(20px)";
    title.style.transition = "1.5s ease";

    subtitle.style.opacity = "0";
    subtitle.style.transform = "translateY(20px)";
    subtitle.style.transition = "2s ease";

    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        subtitle.style.opacity = "0.8";
        subtitle.style.transform = "translateY(0)";
    }, 800);

    /* stagger flowers appearance */
    flowers.forEach((flower, index) => {
        flower.style.opacity = "0";
        flower.style.transform = "translateY(40px) scale(0.8)";
        flower.style.transition = "1.5s ease";

        setTimeout(() => {
            flower.style.opacity = "1";
            flower.style.transform = "translateY(0) scale(1)";
        }, 1000 + index * 500);
    });

});/* ===== FLOWER INTERACTION ===== */
flowers.forEach((flower) => {

    // hover effect (soft glow + scale)
    flower.addEventListener("mouseenter", () => {
        flower.style.transform = "translateY(-5px) scale(1.05)";
        flower.style.transition = "0.4s ease";
        flower.style.filter = "drop-shadow(0 0 15px rgba(255,105,180,0.6))";
    });

    flower.addEventListener("mouseleave", () => {
        flower.style.transform = "translateY(0) scale(1)";
        flower.style.filter = "none";
    });

    // click animation (bloom pulse)
    flower.addEventListener("click", () => {

        flower.animate(
            [
                { transform: "translateY(0) scale(1)" },
                { transform: "translateY(-15px) scale(1.08)" },
                { transform: "translateY(0) scale(1)" }
            ],
            {
                duration: 700,
                easing: "ease-in-out"
            }
        );

        // extra glow burst
        flower.style.boxShadow = "0 0 25px rgba(255,105,180,0.8)";

        setTimeout(() => {
            flower.style.boxShadow = "none";
        }, 600);
    });

});

/* ===== TITLE GLOW EFFECT ===== */
setInterval(() => {
    title.style.textShadow =
        "0 0 10px #ff69b4, 0 0 25px #ff85c1, 0 0 40px #ff4d94";
}, 1200);/* ===== MESSAGE REVEAL ===== */
window.addEventListener("load", () => {

    setTimeout(() => {
        if (message) {
            message.style.opacity = "0";
            message.style.transform = "translateY(30px)";
            message.style.transition = "1.5s ease";

            setTimeout(() => {
                message.style.opacity = "1";
                message.style.transform = "translateY(0)";
            }, 500);
        }
    }, 4000);

});

/* ===== SIMPLE STARS EFFECT ===== */
const scene = document.querySelector(".scene");

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.width = "2px";
    star.style.height = "2px";

    star.style.position = "absolute";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.opacity = Math.random();

    scene.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);
}

/* generate stars continuously */
setInterval(createStar, 250);

/* ===== FINAL LOG ===== */
console.log("🌸 FlowerIsBlooming (PRO VERSION) loaded successfully ✨");
