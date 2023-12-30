export function initializeSubmitMessage() {
  const submitButton = document.getElementById("submit");
  const messageElement = document.getElementById("submit-message");

  if (submitButton) {
    submitButton.addEventListener("click", function () {
      messageElement.textContent = "Thank you. See you on the mats!";
      messageElement.style.display = "inline-block";
    });
  }
}
