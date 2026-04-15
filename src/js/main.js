import './modules/theme.js';
import { fetchProviders } from './modules/api.js';
import { initMobileMenu, addViewAllButton } from './modules/ui.js';
import { initFilters } from './modules/filter.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();

  fetchProviders().then(() => {
    setTimeout(() => {
      addViewAllButton();
    }, 600);
  });

  initFilters();
  // Login and Signup buttons
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      alert(
        '👋 Login feature coming soon!\n\nIn a full version, this would open a login form.'
      );
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      alert(
        '🚀 Sign Up feature coming soon!\n\nThis would allow business owners or service providers to create an account.'
      );
    });
  }
});
