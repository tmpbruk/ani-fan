import initNumberAnimation from "./number-animation.js";

// FETCH ANIMAIS ***************************

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.numero}</span>`;
    const numerosGrid = document.querySelector(".numeros-grid");
    numerosGrid.appendChild(div);
  }

  async function fetchAnimais(animais) {
    try {
      const animaisResponse = await fetch(animais);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => {
        createAnimal(animal);
      });
      initNumberAnimation();
    } catch (error) {
      console.log(`Um error ocorreu: ${error}`);
    }
  }

  fetchAnimais("./animaisapi.json");
}
