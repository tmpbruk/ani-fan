export default function initModal() {
  const modal = document.querySelector('[data-modal="container"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const login = document.querySelector('[data-modal="login"]');

  function togleModal(e) {
    e.preventDefault();
    modal.classList.toggle("ativo");
  }
  function handleClickOutsideModal(e) {
    if (e.target === this) {
      togleModal(e);
    }
  }
  if (modal && fecharModal && login) {
    login.addEventListener("click", togleModal);
    fecharModal.addEventListener("click", togleModal);
    modal.addEventListener("click", handleClickOutsideModal);
  }
}
