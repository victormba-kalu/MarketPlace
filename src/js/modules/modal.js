// src/js/modules/modal.js

import { allProviders } from './api.js';
//console.log('If you see this, app is using modal');
export function showProviderModal(id) {
  const provider = allProviders.find((p) => p.id === id);
  if (!provider) return;

  const reviewsHTML =
    provider.reviews && provider.reviews.length > 0
      ? provider.reviews
          .map(
            (review) => `
      <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-2xl mb-3 text-sm">
        <p class="italic text-gray-600 dark:text-gray-300">"${review.text}"</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">- ${review.author}</p>
      </div>
    `
          )
          .join('')
      : '<p class="text-gray-500 dark:text-gray-400 italic text-sm">No reviews yet.</p>';

  const modalHTML = `
    <div id="provider-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full max-h-[88vh] overflow-hidden shadow-2xl flex flex-col">

        <!-- Header -->
        <div class="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">${provider.name}</h2>
          <button 
            onclick="document.getElementById('provider-modal').remove()" 
            class="text-4xl leading-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
            ×
          </button>
        </div>

        <!-- Image -->
        <div class="h-52 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4 flex-shrink-0">
          <img src="${provider.image}" 
               class="max-h-full max-w-full object-contain rounded-2xl" 
               alt="${provider.name}">
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-6 overflow-y-auto">
          <p class="text-emerald-600 dark:text-emerald-400 text-xl mb-6">${provider.role}</p>

          <!-- Info Grid -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Hourly Rate</p>
              <p class="text-3xl font-semibold">$${provider.rate}</p>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Rating</p>
              <p class="text-3xl font-semibold">★ ${provider.rating}</p>
            </div>
          </div>

          <!-- Reviews Section -->
          <div>
            <h4 class="font-semibold mb-4 text-gray-900 dark:text-white">Client Reviews</h4>
            <div class="max-h-40 overflow-y-auto space-y-3 pr-2">
              ${reviewsHTML}
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3 flex-shrink-0">
          <button onclick="document.getElementById('provider-modal').remove()" 
                  class="flex-1 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Close
          </button>
          <button onclick="alert('Contact request sent to ${provider.name}!')" 
                  class="flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-medium transition-colors">
            Contact Expert
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Make globally available
window.showProviderModal = showProviderModal;
