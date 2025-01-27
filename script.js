const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 0, 0.9)"; // Solid background
  } else {
    header.style.background = "rgba(0, 0, 0, 0.5)"; // Transparent background
  }
});
// Optional: Add interactivity if required
document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(".service-box");

  serviceBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.transform = "scale(1.05)";
    });

    box.addEventListener("mouseleave", () => {
      box.style.transform = "scale(1)";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".toggle-icon").textContent = "+";
          otherItem.querySelector(".icon").textContent = "✔";
        }
      });

      item.classList.toggle("active");

      const icon = item.querySelector(".toggle-icon");
      const checkIcon = item.querySelector(".icon");

      if (item.classList.contains("active")) {
        icon.textContent = "-";
        checkIcon.textContent = "➖";
      } else {
        icon.textContent = "+";
        checkIcon.textContent = "✔";
      }
    });
  });
});
