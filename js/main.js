import { navToggle } from "./nav-toggle";
import { initializeAccordion } from "./accordion";
import { initializeFixedNav } from "./nav-scroll";
import { initializeSubmitMessage } from "./submit-message";
import { carouselController } from "./cards";

document.addEventListener("DOMContentLoaded", () => {
  navToggle();
  initializeFixedNav();
  initializeAccordion();
  initializeSubmitMessage();
  carouselController();
});
