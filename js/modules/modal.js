export default class Modal {
  constructor(botaoAbrir, botaoFechar, modalContainer) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }
  handleClickOutsideModal(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal(e);
    }
  }
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.handleClickOutsideModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
