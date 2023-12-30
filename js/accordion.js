export function initializeAccordion() {
  document.querySelectorAll(".list").forEach((item) => {
    item.addEventListener("click", accordion);
  });
}

function accordion(e) {
  e.stopPropagation();
  const list = document.querySelectorAll(".list");

  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else if (this.parentElement.parentElement.classList.contains("active")) {
    this.classList.add("active");
  } else {
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    this.classList.add("active");
  }
}
