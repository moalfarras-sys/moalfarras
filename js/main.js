// main.js
(function () {
  // زر الثيم
  const toggleBtn = document.getElementById('themeToggle');

  // تحميل الثيم المحفوظ
  const savedTheme = localStorage.getItem('moalfarras-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('moalfarras-theme', 'dark');
      } else {
        localStorage.setItem('moalfarras-theme', 'light');
      }
    });
  }

  // تتبع الماوس – هالة ضوء خفيفة
  const halo = document.createElement('div');
  halo.className = 'cursor-halo';
  document.body.appendChild(halo);

  window.addEventListener('pointermove', (e) => {
    const x = e.clientX;
    const y = e.clientY + window.scrollY;
    halo.style.transform = `translate3d(${x - 90}px, ${y - 90}px, 0)`;
  });
})();
