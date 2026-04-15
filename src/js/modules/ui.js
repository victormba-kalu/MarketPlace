import { showProviderModal } from './modal.js';

export function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileBtn.textContent = mobileMenu.classList.contains('hidden')
        ? '☰'
        : '✕';
    });
  }
}

export function renderFeaturedProviders(providers) {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = '';

  providers.forEach((p) => {
    grid.innerHTML += `
      <div onclick="showProviderModal(${p.id})" 
           class="provider-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer group" data-id="${p.id}">
        
        <!-- Smaller framed image -->
        <div class="p-4">
          <div class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <img src="${p.image}" 
                 class="w-full h-44 object-contain bg-gray-50 dark:bg-gray-900" 
                 alt="${p.name}">
          </div>
        </div>

        <div class="px-6 pb-6">
          <h3 class="font-semibold text-lg mb-1">${p.name}</h3>
          <p class="text-emerald-600 dark:text-emerald-400">${p.role}</p>
          <div class="mt-4 flex justify-between text-sm">
            <span class="font-medium">$${p.rate}/hr</span>
            <span class="text-yellow-500">★ ${p.rating}</span>
          </div>
        </div>
      </div>
    `;
  });
}

export function renderBrowseProviders(providers) {
  const grid = document.getElementById('browse-grid');
  if (!grid) return;
  grid.innerHTML = '';

  providers.forEach((p) => {
    grid.innerHTML += `
      <div onclick="showProviderModal(${p.id})" 
           class="provider-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all cursor-pointer group" data-id="${p.id}">
        
        <!-- Smaller framed image -->
        <div class="p-4">
          <div class="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <img src="${p.image}" 
                 class="w-full h-44 object-contain bg-gray-50 dark:bg-gray-900" 
                 alt="${p.name}">
          </div>
        </div>

        <div class="px-6 pb-6">
          <h3 class="font-semibold text-lg mb-1">${p.name}</h3>
          <p class="text-emerald-600 dark:text-emerald-400">${p.role}</p>
          <div class="mt-4 flex justify-between text-sm">
            <span class="font-medium">$${p.rate}/hr</span>
            <span class="text-yellow-500">★ ${p.rating}</span>
          </div>
        </div>
      </div>
    `;
  });
}


export function addViewAllButton() {
  const browseSection = document.querySelector('#browse-grid')?.parentElement;
  if (!browseSection) return;

  // Remove any existing button to avoid duplicates
  const existingBtn = browseSection.querySelector('.view-all-btn');
  if (existingBtn) existingBtn.remove();

  const viewAllBtn = document.createElement('button');
  viewAllBtn.className =
    'view-all-btn mt-12 mx-auto block px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl font-medium transition-colors text-lg shadow-md';
  viewAllBtn.textContent = 'View All Providers';
  viewAllBtn.onclick = () => {
    const browseGrid = document.getElementById('browse-grid');
    if (browseGrid) {
      browseGrid.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  browseSection.appendChild(viewAllBtn);
}
