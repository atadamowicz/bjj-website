const initializeCardCarousel = (cardsArray) => {
  // Second card active by default if no active card is found
  let cardActive = document.querySelector(".card--active") || cardsArray[1];
  cardActive.classList.add("card--active");

  // Setting up the positions of adjacent cards
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
    toggleClassesButton.click();
  }
};

const handleCardNavigation = (cardsArray, buttonLeft, buttonRight) => {
  let { cardActive, updateAdjacentCards } = initializeCardCarousel(cardsArray);
  let { cardPreviousEl, cardNextEl } = updateAdjacentCards();

  // Shifts cards left or right
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
      // Move to the previous card
      cardNextEl = cardActive;
      cardActive = cardPreviousEl;
      const newPreviousIndex =
        (cardsArray.indexOf(cardActive) - 1 + cardsArray.length) %
        cardsArray.length;
      cardPreviousEl = cardsArray[newPreviousIndex];
    } else {
      // Move to the next card
      cardPreviousEl = cardActive;
      cardActive = cardNextEl;
      const newNextIndex =
        (cardsArray.indexOf(cardActive) + 1) % cardsArray.length;
      cardNextEl = cardsArray[newNextIndex];
    }

    // Set classes for new card positions
    cardActive.classList.add("card--active");
    cardPreviousEl.classList.add("card--previous");
    cardNextEl.classList.add("card--next");

    // Hide cards not adjacent to the active card
    cardsArray.forEach((card) => {
      if (![cardPreviousEl, cardActive, cardNextEl].includes(card)) {
        card.classList.add("card--hidden");
      }
    });
  };

  buttonLeft.addEventListener("click", () => moveCard("left"));
  buttonRight.addEventListener("click", () => moveCard("right"));
};

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

  // Function to toggle between expanded and collapsed states of the carousel
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
