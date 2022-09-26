// SCROLL ANIMATION ********************************************

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfScreen = window.innerHeight * 0.6;

    //Bind
    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.halfScreen < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.scrollAnimation();
      window.addEventListener("scroll", this.scrollAnimation);
    }
  }
}
