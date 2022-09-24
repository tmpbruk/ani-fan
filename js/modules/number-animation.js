// NUMBER ANIMATION ********************************************

export default function initNumberAnimation() {
  function numberAnimation() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
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
    });
  }
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      numberAnimation();
    }
  }
  observer = new MutationObserver(handleMutation);
  const observeTarget = document.querySelector(".numeros");

  observer.observe(observeTarget, { attributes: true });
}
