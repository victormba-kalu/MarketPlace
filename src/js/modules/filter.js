import { renderBrowseProviders } from './ui.js';
import { allProviders } from './api.js';

export function initFilters() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const ratingFilter = document.getElementById('rating-filter');

  const applyFilters = () => {
    const searchTerm = (searchInput?.value || '').toLowerCase().trim();
    const selectedCategory = categoryFilter?.value.toLowerCase() || '';
    const maxPrice = parseFloat(priceFilter?.value || 100);
    const minRating = parseFloat(ratingFilter?.value || 0);

    let filtered = allProviders;

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm) ||
          p.role.toLowerCase().includes(searchTerm) ||
          (searchTerm.includes('web') &&
            p.role.toLowerCase().includes('developer'))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((p) => {
        const roleLower = p.role.toLowerCase();
        if (selectedCategory === 'design')
          return roleLower.includes('ui') || roleLower.includes('ux');
        if (selectedCategory === 'marketing')
          return (
            roleLower.includes('marketing') || roleLower.includes('digital')
          );
        if (selectedCategory === 'development')
          return roleLower.includes('developer') || roleLower.includes('web');
        return false;
      });
    }

    filtered = filtered.filter((p) => p.rate <= maxPrice);
    if (minRating > 0) filtered = filtered.filter((p) => p.rating >= minRating);

    renderBrowseProviders(filtered);
  };

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
  if (priceFilter) {
    priceFilter.addEventListener('input', () => {
      document.getElementById('price-value').textContent =
        `$${priceFilter.value}`;
      applyFilters();
    });
  }
  if (ratingFilter) {
    ratingFilter.addEventListener('input', () => {
      document.getElementById('rating-value').textContent =
        `${ratingFilter.value} ★`;
      applyFilters();
    });
  }
}
