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
  },
  {
    id: 7,
    name: 'The Calamity E1',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#e33b4b',
    url: 'https://drive.google.com/file/d/16WKuep15ZwUTpCIZVM0A0hHvHuIbn7to/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 8,
    name: 'The Calamity E2',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#d93242',
    url: 'https://drive.google.com/file/d/1xvUkubNE7QpcOktHHfJYvsh21JVmNCTc/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 9,
    name: 'The Calamity E3',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#c92d3c',
    url: 'https://drive.google.com/file/d/1WimtDKUfVRWDa0_7fhOHxtsjP61zVaCo/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 10,
    name: 'The Calamity E4',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#bb2e3c',
    url: 'https://drive.google.com/file/d/1gFzRxfCRkECO0gpXpcLly11rPJuL-V4Y/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 11,
    name: 'The Calamity E5',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#ab2e3c',
    url: 'https://drive.google.com/file/d/1dT6SJrhlC18pqlO79BsNYYH3t_4p7TqX/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 12,
    name: 'The Calamity E6',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#9e2939',
    url: 'https://drive.google.com/file/d/1J8EZeB2xr0MNordJSARw38tWrokrZgOm/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 13,
    name: 'The Calamity E7',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#922537',
    url: 'https://drive.google.com/file/d/14FM0PJQjIHgiYfsO-sjA851Rt-V99QuK/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 14,
    name: 'The Calamity E8',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#852334',
    url: 'https://drive.google.com/file/d/1HNclAhv3xQoota61O_K-Ws0OqP40Oj7h/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 15,
    name: 'The Calamity E9',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#772132',
    url: 'https://drive.google.com/file/d/1qdWr5u_bNbFYFgzyU57zByS7bG-tFfxY/view?usp=drive_link',
    poster: 'bleach'
  },
  {
    id: 16,
    name: 'The Calamity E10',
    subtitle: 'Bleach: Thousand-Year Blood War',
    type: 'anime',
    accent: '#6b1f2e',
    url: 'https://drive.google.com/file/d/1ct4J5nWt1-SOON7UlBFhbGPVPVPnO-rQ/view?usp=sharing',
    poster: 'bleach'
  }
];

const FEATURED_EPISODE_ID = 7;
const episodesGrid = document.getElementById('episodesGrid');
const playerPlaylist = document.getElementById('playerPlaylist');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const playerPlaceholder = document.getElementById('playerPlaceholder');
const watchSection = document.getElementById('watchSection');

function getEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const driveFile = parsedUrl.pathname.match(/^\/file\/d\/([^/]+)/);
    if (parsedUrl.hostname === 'drive.google.com' && driveFile) {
      return `https://drive.google.com/file/d/${driveFile[1]}/preview`;
    }
  } catch (error) {
    console.warn('Invalid episode URL:', error);
  }

  return url;
}

function selectEpisode(episode, shouldScroll = true) {
  if (!episode || !videoPlayer) return;

  videoPlayer.src = getEmbedUrl(episode.url);
  videoTitle.textContent = `${episode.subtitle} — ${episode.name}`;
  playerPlaceholder.hidden = true;
  watchSection.classList.add('has-selection');

  document.querySelectorAll('.player-episode, .episode-card').forEach((item) => {
    item.classList.remove('active');
    if (Number(item.dataset.episodeId) === episode.id) {
      item.classList.add('active');
    }
  });

  if (shouldScroll) {
    watchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

if (episodesGrid) {
  episodesGrid.innerHTML = episodes.map((episode, index) => `
    <button class="episode-card ${episode.poster}" data-episode-id="${episode.id}" type="button" aria-label="Play ${episode.name}">
      <span class="index">${String(index + 1).padStart(2, '0')}</span>
      <span class="card-art" style="--card-accent: ${episode.accent};"></span>
      <span class="card-title">${episode.name}</span>
    </button>
  `).join('');

  episodesGrid.querySelectorAll('.episode-card').forEach((card, index) => {
    card.addEventListener('click', () => selectEpisode(episodes[index]));
  });
}

if (playerPlaylist) {
  playerPlaylist.innerHTML = episodes.map((episode, index) => `
    <button class="player-episode${episode.id === FEATURED_EPISODE_ID ? ' active' : ''}" data-episode-id="${episode.id}" type="button">
      <span class="playlist-thumb ${episode.poster}" aria-hidden="true"><span>${String(index + 1).padStart(2, '0')}</span></span>
      <span class="playlist-copy"><strong>${episode.name}</strong><small>${episode.subtitle}</small></span>
      <span class="playlist-play" aria-hidden="true">▶</span>
    </button>
  `).join('');

  playerPlaylist.querySelectorAll('.player-episode').forEach((item, index) => {
    item.addEventListener('click', () => selectEpisode(episodes[index], false));
  });
}

const episodeCount = document.getElementById('episodeCount');
if (episodeCount) episodeCount.textContent = `${episodes.length} total`;

const watchButton = document.getElementById('watchButton');
if (watchButton) {
  watchButton.addEventListener('click', () => {
    const featuredEpisode = episodes.find((episode) => episode.id === FEATURED_EPISODE_ID);
    selectEpisode(featuredEpisode);
  });
}
