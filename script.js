const words = [
  "Civil Engineering Student",
  "Artist",
  "Creative Designer",
  "Visual Storyteller"
];

const changingText = document.getElementById("changing-text");

if (changingText) {
  let index = 0;

  setInterval(() => {
    changingText.style.opacity = "0";

    setTimeout(() => {
      index = (index + 1) % words.length;
      changingText.textContent = words[index];
      changingText.style.opacity = "1";
    }, 300);

  }, 2500);
}

// Fade in sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => observer.observe(section));

// Header shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.style.boxShadow =
    window.scrollY > 40
      ? "0 10px 30px rgba(0,0,0,.08)"
      : "none";
});
