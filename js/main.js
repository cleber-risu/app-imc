import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { imc, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const message = `Seu IMC é de ${imc(weight, height)}`;

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
