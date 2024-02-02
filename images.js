const THUMBNAILS = document.querySelectorAll(".image img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

THUMBNAILS.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src
        currentImgIndex = index
    });
});

POPUP_CLOSE.addEventListener("click",() =>{
    POPUP.classList.add("hidden");
});

ARROW_RIGHT.addEventListener("click", () =>{
    currentImgIndex = currentImgIndex + 1;
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
});
ARROW_LEFT.addEventListener("click", () =>{
    currentImgIndex = currentImgIndex - 1;
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
});