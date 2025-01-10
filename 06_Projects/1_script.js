const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

btn.forEach(button => {
    button.addEventListener("click", () => {
       body.style.backgroundColor = button.id;
    });
});