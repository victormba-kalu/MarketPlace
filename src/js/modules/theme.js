document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    themeToggle.textContent = document.documentElement.classList.contains(
      'dark'
    )
      ? '☀️'
      : '🌙';

    // Save preference to localStorage
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggle.textContent = '☀️';
  }
});
