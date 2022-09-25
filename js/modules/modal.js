export default class Modal {
  constructor(botaoAbrir, botaoFechar, modalContainer) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(modalContainer);
  }

  togleModal(e) {
    e.preventDefault();
    this.modalContainer.classList.toggle("ativo");
  }
  handleClickOutsideModal(e) {
    if (e.target === this.modalContainer) {
      this.togleModal(e);
    } else {
      console.log("dif");
    }
  }
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", (e) => {
      console.log(e.target);
      this.togleModal(e);
    });
    this.botaoFechar.addEventListener("click", (e) => {
      this.togleModal(e);
    });
    this.modalContainer.addEventListener("click", (e) => {
      this.handleClickOutsideModal(e);
    });
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvent();
    }
  }
}
