export function initializeFixedNav() {
  const nav = document.querySelector(".nav");
  const navPlaceholder = document.getElementById("nav-placeholder");

  function checkNavbarPosition() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const navHeight = nav.offsetHeight;

    if (scrollPosition >= viewportHeight) {
      nav.classList.add("fixed-nav");
      navPlaceholder.style.display = "block";
      navPlaceholder.style.height = navHeight + "px";
    } else {
      nav.classList.remove("fixed-nav");
      navPlaceholder.style.display = "none";
      navPlaceholder.style.height = "0";
    }
  }

  window.addEventListener("scroll", checkNavbarPosition);
  window.addEventListener("load", checkNavbarPosition);
  window.addEventListener("resize", checkNavbarPosition);
}
