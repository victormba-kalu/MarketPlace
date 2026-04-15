// src/js/main.js - Main Entry Point

import './modules/theme.js';
import { fetchProviders } from './modules/api.js';
import { initMobileMenu } from './modules/ui.js';
import { initFilters } from './modules/filters.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  fetchProviders();
  initFilters();
});
