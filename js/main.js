import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const message = `Seu IMC é de ${Imc(weight, height)}`;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  Modal.message.innerText = message;
  Modal.open();

  inputWeight.value = "";
  inputHeight.value = "";
});

function Imc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function notNumber(value) {
  return isNaN(value) || value == "";
}
