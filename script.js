const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;
        const moreContent = card.querySelector(".more-content");

        moreContent.classList.toggle("show");

        if (moreContent.classList.contains("show")) {
            button.textContent = "▲ Show Less";
        } else {
            button.textContent = "▼ Show More";
        }

    });

});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");    

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

function toggleCard(card) {
    document.querySelectorAll(".card").forEach(c => {
        if (c !== card) {
            c.classList.remove("active");
            c.querySelector(".more-content")?.classList.remove("show");
        }
    });

    card.classList.toggle("active");
    card.querySelector(".more-content").classList.toggle("show");
}

const words = [ "Digital", "Scalable", "Software"];
let currentIndex = 0;
const wordElement = document.getElementById("changing-word");

setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;
    
    // Add a fade-out effect
    wordElement.style.opacity = 0;
    
    setTimeout(() => {
        wordElement.textContent = words[currentIndex];
        wordElement.style.opacity = 1;
    }, 500); // Wait for fade out before changing text
}, 2500);

const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeBtn.addEventListener('click', () => {
    // Toggle the light-mode class on the body
    body.classList.toggle('dark');
    

    // Change the icon and save preference
    if (body.classList.contains('dark')) {
        themeIcon.textContent = '☀️'; // Sun icon
    } else {
        themeIcon.textContent = '🌙'; // Moon icon
    }
    
});
