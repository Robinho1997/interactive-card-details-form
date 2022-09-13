const formName = document.getElementById("form-name");
const cardName = document.getElementById("card-name");

const formNumber = document.getElementById("form-number");
const cardNumber = document.getElementById("card-number");

const formCvc = document.getElementById("form-cvc");
const cardCvc = document.getElementById("card-cvc");

const formExpireMonth = document.querySelector(".month");
const cardExpireMonth = document.getElementById("card-expire-month");

const formExpireYear = document.querySelector(".year");
const cardExpireYear = document.getElementById("card-expire-year");



formName.addEventListener("input", () => {
     cardName.innerText = formName.value
})

formNumber.addEventListener("input", () => {
    cardNumber.innerText = formNumber.value
})

formCvc.addEventListener("input", () => {
    cardCvc.innerText = formCvc.value
})

formExpireMonth.addEventListener("input", () => {
    cardExpireMonth.innerText = formExpireMonth.value
})

formExpireYear.addEventListener("input", () => {
    cardExpireYear.innerText = formExpireYear.value
})



const formButton = document.getElementById("submitBtn");


formButton.addEventListener("click", () => {
    document.querySelector("form").style.display = "none";

    document.getElementById("thank-you").style.display = "block";
})


const continueButton = document.getElementById("continue-btn");

continueButton.addEventListener("click", () => {
    document.getElementById("thank-you").style.display = "none";

    document.querySelector("form").style.display = "flex";

    
})