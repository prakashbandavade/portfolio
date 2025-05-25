// Typing animation
const text = "Prakash Bandavade";
let index = 0;

function type() {
  const typingText = document.querySelector(".typing-text");
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".typing-text").textContent = ""; // Clear initial
  type();
});

// Optional: smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
