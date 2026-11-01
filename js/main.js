
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = document.getElementById("progress");

    if (documentHeight > 0) {
        progress.style.width =
            (scrollTop / documentHeight) * 100 + "%";
    }
});

document.getElementById("year").textContent =
    new Date().getFullYear();
