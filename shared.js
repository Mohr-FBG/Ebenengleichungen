/* shared.js – ARES-7 EscapeRoom */

// ── Starfield ──
(function() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
  }

  function initStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 3500);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.015 + 0.005
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.twinkle += s.speed;
      const op = s.opacity + Math.sin(s.twinkle) * 0.12;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, op))})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(drawStars);
})();

// ── Spoiler Toggle ──
document.querySelectorAll('.spoiler-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;
    const isVisible = target.classList.toggle('visible');
    btn.textContent = isVisible ? '▲ LÖSUNG VERBERGEN' : '▼ LÖSUNGSHINWEIS ANZEIGEN';
  });
});
