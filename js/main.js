import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateImc, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateImc(weight, height);
  displayResultMessage(result);

  inputWeight.value = "";
  inputHeight.value = "";
});

inputWeight.addEventListener("input", () => AlertError.close());

inputHeight.addEventListener("input", () => AlertError.close());

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}
