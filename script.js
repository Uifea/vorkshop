const buttonOpen = document.querySelector('.burger-open');
const buttonClosed = document.querySelector('.burger-closed');
const burgerMenu = document.querySelector('.burger-menu');

buttonOpen.addEventListener("click", () => {
    buttonClosed.classList.remove("hide");
    burgerMenu.classList.remove("hide");
})
buttonClosed.addEventListener("click", () => {
    buttonClosed.classList.add("hide");
    burgerMenu.classList.add("hide");
})