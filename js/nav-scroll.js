export function initializeFixedNav() {
  const nav = document.querySelector(".nav");

  function checkNavbarPosition() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    if (scrollPosition >= viewportHeight) {
      nav.classList.add("fixed-nav");
      document.body.style.paddingTop = nav.offsetHeight + "px";
    } else {
      nav.classList.remove("fixed-nav");
      document.body.style.paddingTop = 0;
    }
  }

  window.addEventListener("scroll", checkNavbarPosition);
}
