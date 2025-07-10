let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");    
};

const typed = new Typed(".multiple-text", {
    strings: ["Fullstack Developer", "Software Developer", "Designer", "Software Engineer", "Cyber Protecter"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function toggleText() {
  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("toggleBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const yourMessage = document.getElementById('yourMessage').value;

    // Construct mailto URL
    const recipientEmail = 'ruzni2003@gmail.com'; // Replace with your email
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(
        `Name: ${fullName}\nEmail: ${emailAddress}\nPhone: ${mobileNumber}\n\nMessage:\n${yourMessage}`
    );

    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.style.display = "block";
    setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    setTimeout(() => {
    }, 1000);
    ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 1500,
    delay: 150
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: "bottom" });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });
    }, 1000);
});

const typed1 = new Typed(".mlt-load", {
    strings: ["Compiling <span>Awesome...</span>"],
    typeSpeed: 20,
});

const typed2 = new Typed(".mlt-load1", {
    strings: ["Please <span>Wait...</span>"],
    typeSpeed: 20,
});

const typed3 = new Typed(".mlt-load2", {
    strings: ["It's <span>Ruzni's</span> Universe..."],
    typeSpeed: 20,
});
