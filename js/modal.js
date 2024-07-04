export const Modal = {
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

Modal.button.addEventListener("click", () => Modal.close());
