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

// Force page to start at top on load
window.onload = () => {
  window.scrollTo(0, 0);
};

// Smooth zoom effect: image zooms in, text zooms out
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      document.querySelectorAll('.zoom-card').forEach(card => {
        const img = card.querySelector('img');
        const overlay = card.querySelector('.card-overlay');
        const rect = card.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const scrollFactor = (window.innerHeight - rect.top) / window.innerHeight;

          // Image zooms in
          const imgScale = 1 + scrollFactor * 0.2;
          img.style.transform = `scale(${imgScale})`;

          // Text zooms out (slightly larger)
          const textScale = 1 + scrollFactor * 0.3;
          overlay.style.transform = `translate(-50%, -50%) scale(${textScale})`;
        } else {
          img.style.transform = 'scale(1)';
          overlay.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      });
      ticking = false;
    });
    ticking = true;
  }
});
