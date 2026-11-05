const episodes = [
  {
    id: 1,
    name: 'Black Clover S2 E1',
    subtitle: 'Black Clover',
    type: 'anime',
    accent: '#ff3d6b',
    url: 'https://drive.google.com/file/d/15bFhLPi8F_oe8aC0EGN3X0MhWChnEIav/view?usp=sharing',
    poster: 'black-clover'
  },
  {
    id: 2,
    name: 'Black Clover S2 E2',
    subtitle: 'Black Clover',
    type: 'anime',
    accent: '#ff5f54',
    url: 'https://drive.google.com/file/d/1xvUkubNE7QpcOktHHfJYvsh21JVmNCTc/view?usp=sharing',
    poster: 'black-clover'
  },
  {
    id: 3,
    name: 'Black Clover S2 E3',
    subtitle: 'Black Clover',
    type: 'anime',
    accent: '#ff7b41',
    url: 'https://drive.google.com/file/d/1WimtDKUfVRWDa0_7fhOHxtsjP61zVaCo/view?usp=sharing',
    poster: 'black-clover'
  },
  {
    id: 4,
    name: 'Black Clover S2 E4',
    subtitle: 'Black Clover',
    type: 'anime',
    accent: '#ffb85c',
    url: 'https://drive.google.com/file/d/11-5YYpfisAFmiLGzJGIecdbx1NYeH9eV/view?usp=sharing',
    poster: 'black-clover'
  },
  {
    id: 5,
    name: 'Beerus E1',
    subtitle: 'Dragon Ball Super',
    type: 'anime',
    accent: '#38c7ff',
    url: 'https://drive.google.com/file/d/1ZOUd_BnEIPz2AbjmYU7E9iFam_jvzf5j/view?usp=sharing',
    poster: 'beerus'
  },
  {
    id: 6,
    name: 'Beerus E2',
    subtitle: 'Dragon Ball Super',
    type: 'anime',
    accent: '#6d7bff',
    url: 'https://drive.google.com/file/d/1_2IRqyvqfWzmb7nB9O6nIhCvk9k0OQhA/view?usp=sharing',
    poster: 'beerus'
  }
];

const episodesGrid = document.getElementById('episodesGrid');

if (episodesGrid) {
  episodesGrid.innerHTML = episodes.map((episode, index) => `
    <button class="episode-card ${episode.poster}" data-url="${episode.url}" type="button" aria-label="Open ${episode.name}">
      <span class="index">${String(index + 1).padStart(2, '0')}</span>
      <span class="card-art" style="--card-accent: ${episode.accent};"></span>
      <span class="card-title">${episode.name}</span>
    </button>
  `).join('');

  episodesGrid.querySelectorAll('.episode-card').forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.dataset.url;
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

const watchButton = document.getElementById('watchButton');
if (watchButton) {
  watchButton.addEventListener('click', () => {
    const firstEpisode = episodes[0];
    if (firstEpisode) {
      window.open(firstEpisode.url, '_blank', 'noopener,noreferrer');
    }
  });
}
