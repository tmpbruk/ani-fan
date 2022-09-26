// NUMBER ANIMATION ********************************************

export default class NumberAnimation {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;
    // Bind obejct this to the callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Get number from text and incrememnts from 0 to final number
  static incrementNumber(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 30);
  }

  // Activate incrementNumber to each selected number
  numberAnimation() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementNumber(numero);
    });
  }

  // function trigger whenever mutation take place
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.numberAnimation();
    }
  }

  // Add mutationObserver to verify when active class is added to the element
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
