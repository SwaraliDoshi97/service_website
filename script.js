// const toggleButtons = document.querySelectorAll(".toggle-btn");

// toggleButtons.forEach(button => {
//     button.addEventListener("click", () => {

//         const card = button.parentElement;
//         const moreContents = card.querySelectorAll(".more-content");

//         moreContents.forEach(content => {
//             if (content.style.display === "block") {
//                 content.style.display = "none";
//                 button.textContent = "▼ Show More";
//             } else {
//                 content.style.display = "block";
//                 button.textContent = "▲ Show Less";
//             }
//         });

//     });
// });
const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {

button.addEventListener("click", () => {

const card = button.parentElement;
const moreContent = card.querySelector(".more-content");

moreContent.classList.toggle("show");

if(moreContent.classList.contains("show")){
    button.textContent = "▲ Show Less";
}else{
    button.textContent = "▼ Show More";
}

});

});