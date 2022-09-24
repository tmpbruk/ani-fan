// NUMBER ANIMATION ********************************************

export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  if (
    diaSemana.includes(diaAgora) &&
    horarioAgora >= horarioSemana[0] &&
    horarioAgora < horarioSemana[1]
  ) {
    funcionamento.classList.add("aberto");
  }
}

// CALCULAR FUTURO ************
// const futuro = new Date("Oct 16 2022 23:59");

// function transformDays(time) {
//   return time / (24 * 60 * 60 * 1000);
// }

// const diashoje = transformDays(dataAgora.getTime());
// const diasFuturo = transformDays(futuro.getTime());
