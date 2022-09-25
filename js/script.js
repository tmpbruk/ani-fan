import TabNav from "./modules/tab-nav.js";
import SmoothScroll from "./modules/smooth-scroll.js";
import AccordionList from "./modules/accordion-list.js";
import Modal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimationScroll from "./modules/scroll-animation.js";

const options = { behavior: "smooth", block: "start" };
const smoothScroll = new SmoothScroll(
  '[data-menu="suave"] a[href^="#"]',
  options,
);
smoothScroll.init();
const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();
const tabMenu = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabMenu.init();
const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimationScroll();

// // setTimeout and setInterval start ********************

// const span = document.createElement("span");
// const btnStart = document.createElement("button");
// btnStart.innerText = "Start";
// const btnPause = document.createElement("button");
// btnPause.innerText = "Stop/Reset";

// document.body.appendChild(btnStart);
// document.body.appendChild(btnPause);
// document.body.appendChild(span);

// let i = 0;
// let timer;

// function callback() {}

// function startTimer() {
//   timer = setInterval(() => {
//     span.innerText = i++;
//   }, 100);
//   btnStart.setAttribute("disabled", "");
// }

// function pauseTimer() {
//   clearInterval(timer);
// }

// function resetTimer() {
//   i = 0;
//   span.innerText = i;
//   btnStart.removeAttribute("disabled", "");
// }

// btnStart.addEventListener("click", startTimer);
// btnPause.addEventListener("click", pauseTimer);
// btnPause.addEventListener("dblclick", resetTimer);

// // setTimeout and setInterval end ********************
