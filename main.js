(() => {
  const form = document.querySelector("form");
  const inputWeight = document.querySelector("#weight");
  const inputHeight = document.querySelector("#height");

  const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    button: document.querySelector(".modal button.close"),
    open() {
      this.wrapper.classList.add("open");
    },
    close() {
      this.wrapper.classList.remove("open");
    },
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;
    const message = `Seu IMC é de ${Imc(weight, height)}`;

    Modal.message.innerText = message;
    Modal.open();
  });

  Modal.button.addEventListener("click", () => Modal.close());

  function Imc(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2);
  }
})();
