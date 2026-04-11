import './modules/theme.js';
import { ProviderCard } from './components/ProviderCard.js';

// Sample providers (we'll replace this with real API data soon)
const sampleProviders = [
  {
    id: 1,
    firstName: 'Emma',
    lastName: 'Torres',
    expertise: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    hourlyRate: 65,
    bio: 'Helping small businesses create beautiful and user-friendly digital experiences.',
  },
  {
    id: 2,
    firstName: 'Michael',
    lastName: 'Chen',
    expertise: 'Digital Marketer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    hourlyRate: 55,
    bio: 'Grew multiple local businesses through strategic social media and content marketing.',
  },
  {
    id: 3,
    firstName: 'Priya',
    lastName: 'Sharma',
    expertise: 'Web Developer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    hourlyRate: 70,
    bio: 'Building fast, secure, and scalable websites for small business owners.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Marketplace initialized');

  const featuredGrid = document.getElementById('featured-grid');

  if (featuredGrid) {
    sampleProviders.forEach((provider) => {
      const card = new ProviderCard(provider);
      featuredGrid.appendChild(card.render());
    });
  }
});
