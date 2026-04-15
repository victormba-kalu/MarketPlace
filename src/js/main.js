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
});
