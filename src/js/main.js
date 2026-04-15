import './modules/theme.js';
import { fetchProviders } from './modules/api.js';
import {
  initMobileMenu,
  renderFeaturedProviders,
  renderBrowseProviders,
  addViewAllButton,
} from './modules/ui.js';
import { initFilters } from './modules/filter.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();

  // Fetch providers and render
  fetchProviders().then(() => {
    setTimeout(() => {
      addViewAllButton();
    }, 600);
  });

  initFilters();
});
