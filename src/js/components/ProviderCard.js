// src/js/components/ProviderCard.js

export class ProviderCard {
  constructor(provider) {
    this.provider = provider;
  }

  render() {
    const card = document.createElement('div');
    card.className = `
      provider-card bg-white dark:bg-gray-800 rounded-3xl overflow-hidden 
      shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer 
      border border-gray-100 dark:border-gray-700
    `;

    const imageId =
      this.provider.imageId || Math.floor(Math.random() * 100) + 60;

    card.innerHTML = `
      <div class="h-52 bg-gray-200 dark:bg-gray-700 relative">
        <img src="https://picsum.photos/id/${imageId}/400/300" 
             alt="${this.provider.firstName} ${this.provider.lastName}"
             class="w-full h-full object-cover">
      </div>
      
      <div class="p-6">
        <div class="flex justify-between items-start mb-3">
          <div>
            <h3 class="font-semibold text-lg">${this.provider.firstName} ${this.provider.lastName}</h3>
            <p class="text-emerald-600 dark:text-emerald-500 text-sm font-medium">
              ${this.provider.expertise || 'Service Provider'}
            </p>
          </div>
          <div class="text-right">
            <div class="flex items-center gap-1 text-amber-500">★★★★☆</div>
            <p class="text-xs text-gray-500 dark:text-gray-400">4.8</p>
          </div>
        </div>
        
        <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          ${this.provider.bio || 'Passionate professional helping small businesses grow.'}
        </p>
        
        <div class="flex justify-between items-center">
          <div class="text-emerald-600 font-semibold">
            $${this.provider.hourlyRate || '45'}/hr
          </div>
          <button class="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-2xl transition-colors">
            View Profile
          </button>
        </div>
      </div>
    `;

    return card;
  }
}
