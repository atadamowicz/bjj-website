export const navToggle = () => {
  const toggleButton = document.querySelector(".nav__toggle-button");
  const navLinks = document.querySelector(".nav__list");
  const navItems = navLinks.querySelectorAll("a"); // Zakładam, że linki to elementy <a>

  const toggleNav = () => {
    navLinks.classList.toggle("nav__list--active");
  };

  toggleButton.addEventListener("click", toggleNav);

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("nav__list--active")) {
        toggleNav();
      }
    });
  });
};
