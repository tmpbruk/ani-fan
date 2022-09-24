// SMOOTH SCROLL ******************************************

export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  function ScrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section.offsetTop);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma Alternativa
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", ScrollToSection);
  });
}
