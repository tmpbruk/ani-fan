import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    this.menuList.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);

    outsideClick(this.menuButton, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
