
/*Menu Header*/
const elemHeader = document.querySelector("header");
const elemMenu = document.querySelector(".js-menu");

elemMenu.addEventListener("click", () => {
    const barras = elemMenu.querySelectorAll("div");
    const barraCima = barras[0];
    const barraBaixo = barras[1];
    elemHeader.classList.toggle("grid-rows-[3.75rem_1fr]");
    elemHeader.classList.toggle("h-screen");
    barraCima.classList.toggle("rotate-45");
    barraCima.classList.toggle("translate-y-[0.28125rem]");
    barraBaixo.classList.toggle("-rotate-45");
    barraBaixo.classList.toggle("-translate-y-[0.28125rem]");
})

/*Changing color inside the wallet*/
const ballsColor = document.querySelectorAll(".js-ball-color");
const imgWallet = document.querySelector(".js-img-wallet");
const imgPictureWallet = imgWallet.parentElement;
const imgPictureSourceWallet = imgPictureWallet.querySelector("source")
const colorText = document.querySelector(".js-text-color");

ballsColor.forEach((ballColor) => {
    ballColor.addEventListener("click", () => {
        const newColor = ballColor.getAttribute('data-color');
        const oldColor = imgWallet.getAttribute("old-data-color");
        const textColor = ballColor.getAttribute("data-color-text")
        ballsColor.forEach((elem) => {
            elem.classList.remove("border-black");
            elem.classList.add("border-gray-300");
        })

        ballColor.classList.add("border-black");
        ballColor.classList.remove("border-gray-300");

        colorText.innerHTML = textColor;

        imgWallet.src = imgWallet.src.replaceAll(oldColor, newColor);
        imgPictureSourceWallet.srcset = imgPictureSourceWallet.srcset.replaceAll(oldColor, newColor);

        imgWallet.setAttribute("old-data-color",
            newColor)
    })
})