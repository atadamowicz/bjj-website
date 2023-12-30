export const navToggle = () => {
  const toggleButton = document.querySelector(".nav__toggle-button");
  const navLinks = document.querySelector(".nav__list");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("nav__list--active");
  });
};
