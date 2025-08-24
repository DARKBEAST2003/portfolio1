ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 150
});

ScrollReveal().reveal('.top', { origin: "top" });
ScrollReveal().reveal('.bot', { origin: "bottom" });
ScrollReveal().reveal('.left', { origin: "left" });
ScrollReveal().reveal('.right', { origin: "right" });

const themeSwitch = document.getElementById("themeSwitch");
const toggle = document.getElementById('themeSwitch');
const label = document.getElementById('modeLabel');

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light", !themeSwitch.checked);
});

toggle.addEventListener('change', () => {
    label.innerText = !toggle.checked ? 'LIGHT MODE' : 'DARK MODE';
});