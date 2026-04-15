import { allProviders } from './api.js';

export function showProviderModal(id) {
  const provider = allProviders.find((p) => p.id === id);
  if (!provider) return;

  let reviewsHTML = '';
  if (provider.reviews && provider.reviews.length > 0) {
    reviewsHTML = provider.reviews
      .map(
        (review) => `
      <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-2xl mb-3 text-sm">
        <p class="italic text-gray-600 dark:text-gray-300">"${review.text}"</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">- ${review.author}</p>
      </div>
    `
      )
      .join('');
  } else {
    reviewsHTML =
      '<p class="text-gray-500 dark:text-gray-400 italic text-sm">No reviews yet.</p>';
  }

  const modalHTML = `
    <div id="provider-modal" class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div class="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full max-h-[82vh] overflow-hidden shadow-2xl flex flex-col">

        <!-- Image - Compact -->
        <div class="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-3 flex-shrink-0">
          <img src="${provider.image}" 
               class="max-h-full max-w-full object-contain" 
               alt="${provider.name}">
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 p-6 overflow-y-auto">
          <h2 class="text-2xl font-bold mb-1">${provider.name}</h2>
          <p class="text-emerald-600 dark:text-emerald-400 text-xl mb-6">${provider.role}</p>

          <!-- Info -->
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Hourly Rate</p>
              <p class="text-2xl font-semibold">$${provider.rate}</p>
            </div>
            <div>
              <p class="text-gray-500 dark:text-gray-400 text-sm">Rating</p>
              <p class="text-2xl font-semibold">★ ${provider.rating}</p>
            </div>
          </div>

          <!-- Reviews - Limited height with scroll -->
          <div class="mb-6">
            <h4 class="font-medium mb-3">Client Reviews</h4>
            <div class="max-h-32 overflow-y-auto space-y-3 pr-2">
              ${reviewsHTML}
            </div>
          </div>
        </div>

        <!-- Fixed Buttons -->
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
