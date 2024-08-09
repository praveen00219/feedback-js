// script.js

const feedbackOptions = document.querySelectorAll(".feedback-option");
let selectedFeedback = "";

feedbackOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Remove the 'selected' class from all options
    feedbackOptions.forEach((opt) => opt.classList.remove("selected"));

    // Add the 'selected' class to the clicked option
    option.classList.add("selected");

    // Set the selected feedback text
    selectedFeedback = option.id.charAt(0).toUpperCase() + option.id.slice(1);
  });
});

document.getElementById("sendReview").addEventListener("click", () => {
  if (selectedFeedback) {
    // Hide the feedback container and show the feedback result
    document.getElementById("feedbackContainer").classList.add("hidden");
    document.getElementById("feedbackResult").classList.remove("hidden");

    // Set the selected feedback in the result
    document.getElementById("selectedFeedback").textContent = selectedFeedback;
  } else {
    alert("Please select a feedback option before submitting.");
  }
});
