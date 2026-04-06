document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");
  const contactForm = document.getElementById("contactForm");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".faq-card");
      const isActive = card.classList.contains("active");

      document.querySelectorAll(".faq-card").forEach((item) => {
        item.classList.remove("active");
        const toggle = item.querySelector(".faq-toggle");
        if (toggle) toggle.textContent = "+";
      });

      if (!isActive) {
        card.classList.add("active");
        const toggle = card.querySelector(".faq-toggle");
        if (toggle) toggle.textContent = "−";
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});
