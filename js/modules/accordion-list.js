// PERGUNTAS - ACCORDION LIST ***************************

export default class AccordionList {
  constructor(links) {
    this.accordionList = document.querySelectorAll(links);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        toggleAccordion(item);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      console.log(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
