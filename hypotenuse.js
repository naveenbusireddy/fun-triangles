const lengths = document.querySelectorAll(".input-lengths");
const checkHypotenuse = document.querySelector("#check-hypotenuse");
const showMessage = document.querySelector("#output");


function calculateHypotenuse() {
    const hypotenuse = Math.hypot(Number(lengths[0].value), Number(lengths[1].value));

    showMessage.innerText = "The length of hypotenuse is: " + hypotenuse;
}

checkHypotenuse.addEventListener("click", calculateHypotenuse);