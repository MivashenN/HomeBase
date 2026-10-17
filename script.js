// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Copy email to clipboard
document.getElementById('contactBtn').addEventListener('click', () => {
  navigator.clipboard.writeText("mivashenmedia@gmail.com").then(() => {
    alert("Email copied to clipboard!");
  });
});

// Open email client when clicking Email button
document.getElementById('emailBtn').addEventListener('click', () => {
  window.location.href = "mailto:mivashenmedia@gmail.com";
});

// Animated tagline typing effect
const tagline = document.querySelector('.tagline');
const text = "Web Design & Social Media Management";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
tagline.textContent = "";
typeEffect();