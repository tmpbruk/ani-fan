import NumberAnimation from "./number-animation.js";

// FETCH ANIMAIS ***************************

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  // Create div with info - total animal's number
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.numero}</span>`;
    numerosGrid.appendChild(div);
  }

  // Animate numbers of each animals
  function animalsNumberAnimation() {
    const numberAnimation = new NumberAnimation(
      "[data-numero]",
      ".numeros",
      "ativo",
    );
    numberAnimation.init();
  }

  // Pull animals through json file and create each animal using createAnimal()
  async function createAnimais() {
    try {
      // fetch and wai t for response
      const animaisResponse = await fetch(url);
      // Transform into json
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => {
        createAnimal(animal);
      });
      animalsNumberAnimation();
    } catch (error) {
      console.log(`Um error ocorreu: ${error}`);
    }
  }

  return createAnimais();
}
