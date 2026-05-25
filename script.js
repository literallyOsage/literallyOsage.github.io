/* FADE IN */
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

faders.forEach((el) => observer.observe(el));

/* CURSOR TRAIL */
document.addEventListener("mousemove", (e) => {
    const dot = document.createElement("div");
    dot.classList.add("cursor-dot");

    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 1200);
});

/* OCCASIONAL FRAME JITTER */
const frame = document.querySelector(".media-frame");

setInterval(() => {
    frame.style.transform =
        `rotate(${(-0.5 + Math.random()).toFixed(2)}deg)`;

    setTimeout(() => {
        frame.style.transform = "rotate(-0.3deg)";
    }, 120);
}, 7000);
