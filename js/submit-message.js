export const initializeSubmitMessage = () => {
  const form = document.getElementById("survey-form");
  const messageElement = document.getElementById("submit-message");

  if (form) {
    form.addEventListener("submit", function (event) {
      if (form.checkValidity()) {
        messageElement.style.visibility = "visible";
      }
    });
  }
};
