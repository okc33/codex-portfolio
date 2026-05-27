const canvas = document.querySelector(".snow-canvas");
const shouldSnow = document.body.classList.contains("home-page");
const ctx = shouldSnow ? canvas.getContext("2d") : null;
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const photoDialog = document.querySelector(".photo-dialog");
const dialogText = photoDialog?.querySelector("p");
const dialogClose = photoDialog?.querySelector(".dialog-close");

let width = 0;
let height = 0;
let flakes = [];
let pointerX = 0;

const flakeCount = () => Math.min(190, Math.floor(window.innerWidth / 8));

function resizeCanvas() {
  if (!shouldSnow) return;
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  flakes = Array.from({ length: flakeCount() }, createFlake);
}

function createFlake() {
  const radius = Math.random() * 3.2 + 1.1;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius,
    speed: Math.random() * 1.15 + 0.45,
    sway: Math.random() * 1.4 + 0.3,
    phase: Math.random() * Math.PI * 2,
    opacity: Math.random() * 0.55 + 0.28,
  };
}

function drawSnow() {
  if (!shouldSnow) return;
  ctx.clearRect(0, 0, width, height);
  const wind = (pointerX - width / 2) * 0.0008;

  flakes.forEach((flake) => {
    flake.phase += 0.012;
    flake.y += flake.speed;
    flake.x += Math.sin(flake.phase) * flake.sway + wind;

    if (flake.y > height + 12) {
      flake.y = -12;
      flake.x = Math.random() * width;
    }

    if (flake.x < -12) flake.x = width + 12;
    if (flake.x > width + 12) flake.x = -12;

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
    ctx.shadowColor = "rgba(255, 255, 255, 0.65)";
    ctx.shadowBlur = 8;
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.shadowBlur = 0;
  requestAnimationFrame(drawSnow);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${visible.target.id}`);
    });
  },
  { threshold: [0.42, 0.62] }
);

if (shouldSnow) {
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
  });
}

revealItems.forEach((item) => revealObserver.observe(item));
sections.forEach((section) => navObserver.observe(section));

revealItems.forEach((item) => {
  const rect = item.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    item.classList.add("is-visible");
  }
});

document.querySelectorAll(".photo-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (!photoDialog || !dialogText) return;
    dialogText.textContent = card.dataset.caption || "";
    photoDialog.showModal();
  });
});

dialogClose?.addEventListener("click", () => {
  photoDialog?.close();
});

photoDialog?.addEventListener("click", (event) => {
  if (event.target === photoDialog) {
    photoDialog.close();
  }
});

resizeCanvas();
drawSnow();
