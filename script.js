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