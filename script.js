// ── Footer year ──────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Typed title rotation ─────────────────────────────────
const titles = [
  'Software Engineer',
  'Fullstack .NET Developer',
  'AI Master’s Student',
];

const typedEl = document.getElementById('typedText');
let titleIdx = 0;
let charIdx = 0;
let deleting = false;

function tick() {
  const current = titles[titleIdx];

  if (deleting) {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      titleIdx = (titleIdx + 1) % titles.length;
      setTimeout(tick, 400);
      return;
    }
    setTimeout(tick, 40);
  } else {
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
    setTimeout(tick, 80);
  }
}

tick();

// ── Theme toggle ─────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('theme');
if (stored === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// ── Reveal on scroll ─────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.section').forEach((s) => observer.observe(s));
