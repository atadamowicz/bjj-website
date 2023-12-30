export function initializeSubmitMessage() {
  const submitButton = document.getElementById("submit");
  const messageElement = document.getElementById("submit-message");

  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      messageElement.textContent = "Thank you.";
      messageElement.style.display = "inline-block";
    });
  }
}
