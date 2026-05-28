const eyeButton = document.querySelector(".eye-btn");
const balanceTitle = document.querySelector("#balance-title");

let visible = true;

eyeButton.addEventListener("click", () => {

  visible = !visible;

  balanceTitle.textContent = visible
    ? "€ 12,480.00"
    : "••••••••";

  eyeButton.innerHTML = visible
    ? '<i class="fa-regular fa-eye"></i>'
    : '<i class="fa-regular fa-eye-slash"></i>';
});