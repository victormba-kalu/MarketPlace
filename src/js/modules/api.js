let allProviders = [];

export async function fetchProviders() {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) spinner.classList.remove('hidden');

  try {
    const res = await fetch('https://randomuser.me/api/?results=12');
    const data = await res.json();

    allProviders = data.results.map((user, index) => ({
      id: index + 1,
      name: `${user.name.first} ${user.name.last}`,
      role: [
        'UI/UX Designer',
        'Digital Marketer',
        'Web Developer',
        'Business Analyst',
        'Content Strategist',
        'Social Media Manager',
      ][index % 6],
      rate: 50 + Math.floor(Math.random() * 40),
      image: user.picture.large,
      rating: parseFloat((4.6 + Math.random() * 0.4).toFixed(1)),
    }));

    // Load reviews from second API
    await fetchReviews();

    // Render using ui module
    const ui = await import('./ui.js');
    ui.renderFeaturedProviders(allProviders.slice(0, 3));
    ui.renderBrowseProviders(allProviders);
  } catch {
    //console.error('Failed to fetch providers:', error);
  } finally {
    // Hides the spinner when done
    if (spinner) spinner.classList.add('hidden');
  }
}

// Second API
async function fetchReviews() {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments?_limit=30'
    );
    const comments = await res.json();

    allProviders.forEach((provider) => {
      provider.reviews = comments
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 3) + 2)
        .map((comment) => ({
          text: comment.body.substring(0, 140) + '...',
          author: 'Happy Client',
        }));
    });
  } catch {
    //console.error('Failed to fetch reviews:', error);
  }
}

export { allProviders };
