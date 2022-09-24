// PERGUNTAS - ACCORDION LIST ***************************

export default function initAccordionList() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );

  function activeAccordion() {
    this.classList.toggle("ativo");

    this.nextElementSibling.classList.toggle("ativo");
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
