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
    <button class="player-episode${index === 0 ? ' active' : ''}" data-episode-id="${episode.id}" type="button">
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
  watchButton.addEventListener('click', () => selectEpisode(episodes[0]));
}
