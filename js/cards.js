const initializeCardCarousel = (cardsArray) => {
  let cardActive = document.querySelector(".card--active") || cardsArray[1]; // Setting 2nd card to active by default
  cardActive.classList.add("card--active");

  // Setting up the previous and next cards
  const updateAdjacentCards = () => {
    const activeIndex = cardsArray.indexOf(cardActive);
    let cardPreviousEl =
      cardsArray[(activeIndex - 1 + cardsArray.length) % cardsArray.length];
    let cardNextEl = cardsArray[(activeIndex + 1) % cardsArray.length];

    cardPreviousEl.classList.add("card--previous");
    cardNextEl.classList.add("card--next");
    return { cardPreviousEl, cardNextEl };
  };

  return { cardActive, updateAdjacentCards };
};

const handleWindowResize = (toggleClassesButton) => {
  if (
    window.innerWidth < 700 &&
    toggleClassesButton.textContent.includes("Collapse")
  ) {
    toggleClassesButton.click(); // Kliknięcie przycisku, aby złożyć karty
  }
};

// Card Usage Handler
const handleCardNavigation = (cardsArray, buttonLeft, buttonRight) => {
  let { cardActive, updateAdjacentCards } = initializeCardCarousel(cardsArray);
  let { cardPreviousEl, cardNextEl } = updateAdjacentCards();

  const moveCard = (direction) => {
    // Remove current classes
    cardsArray.forEach((card) =>
      card.classList.remove(
        "card--active",
        "card--previous",
        "card--next",
        "card--hidden"
      )
    );

    if (direction === "left") {
      // Move left
      cardNextEl = cardActive;
      cardActive = cardPreviousEl;
      const newPreviousIndex =
        (cardsArray.indexOf(cardActive) - 1 + cardsArray.length) %
        cardsArray.length;
      cardPreviousEl = cardsArray[newPreviousIndex];
    } else {
      // Move right
      cardPreviousEl = cardActive;
      cardActive = cardNextEl;
      const newNextIndex =
        (cardsArray.indexOf(cardActive) + 1) % cardsArray.length;
      cardNextEl = cardsArray[newNextIndex];
    }

    // Set classes for new cards
    cardActive.classList.add("card--active");
    cardPreviousEl.classList.add("card--previous");
    cardNextEl.classList.add("card--next");

    // Add class hidden for extra card
    cardsArray.forEach((card) => {
      if (![cardPreviousEl, cardActive, cardNextEl].includes(card)) {
        card.classList.add("card--hidden");
      }
    });
  };

  buttonLeft.addEventListener("click", () => moveCard("left"));
  buttonRight.addEventListener("click", () => moveCard("right"));
};

// Toggling carousel on and off
const toggleCardClasses = (cardsArray, toggleClassesButton, cardButtons) => {
  let isClassesRemoved = false;
  let cardsState = [];

  const saveCardsState = () => {
    cardsState = cardsArray.map((card) => ({
      element: card,
      classes: card.className,
    }));
  };

  const toggleCardButtonsVisibility = () => {
    cardButtons.forEach((button) => {
      button.style.display = isClassesRemoved ? "none" : "block";
    });
  };

  const removeOrRestoreClasses = () => {
    if (!isClassesRemoved) {
      saveCardsState();
      cardsArray.forEach((card) =>
        card.classList.remove(
          "card--hidden",
          "card--active",
          "card--previous",
          "card--next"
        )
      );
      isClassesRemoved = true;
    } else {
      cardsState.forEach(
        (cardState) => (cardState.element.className = cardState.classes)
      );
      isClassesRemoved = false;
    }
    toggleCardButtonsVisibility();
  };

  toggleClassesButton.addEventListener("click", removeOrRestoreClasses);
};

// Main function
export const carouselController = () => {
  const cards = document.querySelectorAll(".card");
  const cardsArray = Array.from(cards);
  const buttonLeft = document.querySelector(".cards__btn--left");
  const buttonRight = document.querySelector(".cards__btn--right");
  const toggleClassesButton = document.querySelector(".toggle-classes-btn");
  const cardButtons = document.querySelectorAll(".cards__btn");

  // Text change when toggling carousel
  toggleClassesButton.addEventListener("click", () => {
    toggleClassesButton.textContent =
      toggleClassesButton.textContent === "Expand" ? "Collapse" : "Expand";
  });

  handleCardNavigation(cardsArray, buttonLeft, buttonRight);
  toggleCardClasses(cardsArray, toggleClassesButton, cardButtons);

  handleWindowResize(toggleClassesButton);
  window.addEventListener("resize", () =>
    handleWindowResize(toggleClassesButton)
  );
};
