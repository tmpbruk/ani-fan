// SCROLL ANIMATION ********************************************

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfScreen = window.innerHeight * 0.6;

    //Bind
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Get distance of each item in relation to the top of the website
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfScreen),
      };
    });
  }

  // verify distance of each object in relation to website scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.add("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // remove event from scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
