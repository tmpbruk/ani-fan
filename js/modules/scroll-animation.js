// SCROLL ANIMATION ********************************************

export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  function ScrollAnimation() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const halfScreen = window.innerHeight * 0.6;
      const isSectionVisible = sectionTop - halfScreen < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
    });
  }
  ScrollAnimation();

  if (sections.length) {
    window.addEventListener("scroll", ScrollAnimation);
  }
}
