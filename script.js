const flowers = document.querySelectorAll(".flower");

flowers.forEach((flower, index) => {
    flower.style.animationDelay = `${index * 0.5}s`;

    flower.addEventListener("mouseenter", () => {
        flower.style.transform = "scale(1.08)";
        flower.style.transition = "0.3s ease";
    });

    flower.addEventListener("mouseleave", () => {
        flower.style.transform = "scale(1)";
    });
});

const title = document.querySelector(".title h1");

let glow = true;

setInterval(() => {
    if (glow) {
        title.style.textShadow =
            "0 0 10px #ffffff, 0 0 20px #ff69b4, 0 0 35px #ff69b4";
    } else {
        title.style.textShadow = "none";
    }

    glow = !glow;
}, 1000);const message = document.querySelector(".message");

window.addEventListener("load", () => {
    message.style.opacity = "0";
    message.style.transform = "translateY(30px)";
    message.style.transition = "all 1.5s ease";

    setTimeout(() => {
        message.style.opacity = "1";
        message.style.transform = "translateY(0)";
    }, 500);
});

flowers.forEach((flower) => {
    flower.addEventListener("click", () => {
        flower.animate(
            [
                { transform: "translateY(0) scale(1)" },
                { transform: "translateY(-15px) scale(1.05)" },
                { transform: "translateY(0) scale(1)" }
            ],
            {
                duration: 600,
                iterations: 1
            }
        );
    });
});

console.log("🌸 Flower Is Blooming loaded successfully!");
