import './modules/theme.js';
import { ProviderCard } from './components/ProviderCard.js';

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Mobile Menu Toggle
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Toggle between hamburger and close icon
    if (mobileMenu.classList.contains('hidden')) {
      mobileBtn.textContent = '☰';
    } else {
      mobileBtn.textContent = '✕';
    }
  });
}

// Sample providers for Featured section. I just want to be sure that this is working. I will replace this part later
const sampleProviders = [
  {
    firstName: 'Emma',
    lastName: 'Torres',
    expertise: 'UI/UX Designer',
    imageId: 64,
    hourlyRate: 65,
    bio: 'Helping small businesses create beautiful and user-friendly digital experiences.',
  },
  {
    firstName: 'Michael',
    lastName: 'Chen',
    expertise: 'Digital Marketer',
    imageId: 201,
    hourlyRate: 55,
    bio: 'Grew multiple local businesses through strategic social media marketing.',
  },
  {
    firstName: 'Priya',
    lastName: 'Sharma',
    expertise: 'Web Developer',
    imageId: 101,
    hourlyRate: 70,
    bio: 'Building fast, secure, and modern websites for small business owners.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Marketplace - Week 5 completed');

  const featuredGrid = document.getElementById('featured-grid');

  if (featuredGrid) {
    sampleProviders.forEach((provider) => {
      const card = new ProviderCard(provider);
      featuredGrid.appendChild(card.render());
    });
  }
});
