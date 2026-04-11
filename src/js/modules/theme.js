document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) {
    console.error('Theme toggle button not found');
    return;
  }

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    themeToggle.textContent = document.documentElement.classList.contains(
      'dark'
    )
      ? '☀️'
      : '🌙';
  });
});
