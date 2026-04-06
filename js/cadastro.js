document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-password");
  const registerForm = document.getElementById("registerForm");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const input = document.getElementById(targetId);

      if (!input) return;

      input.type = input.type === "password" ? "text" : "password";
    });
  });

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});
