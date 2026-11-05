const series = [
  {
    id: 'bleach',
    title: 'Bleach: Thousand-Year Blood War — The Calamity',
    subtitle: 'Bleach: Thousand-Year Blood War',
    poster: 'bleach',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVwbN6jMNK0bc-rCyZuRwAbN46HVlx9AfnqFyMkmp4EKGByAMrH50RpY:https://cdnwebsite.japan-expo.com/website/website/event_picture/000000010157&s=10',
    accent: '#e33b4b',
    episodes: [
      { id: 1, title: 'Episode 1', url: 'https://drive.google.com/file/d/16WKuep15ZwUTpCIZVM0A0hHvHuIbn7to/view?usp=drive_link' },
      { id: 2, title: 'Episode 2', url: 'https://drive.google.com/file/d/1xvUkubNE7QpcOktHHfJYvsh21JVmNCTc/view?usp=drive_link' },
      { id: 3, title: 'Episode 3', url: 'https://drive.google.com/file/d/1WimtDKUfVRWDa0_7fhOHxtsjP61zVaCo/view?usp=drive_link' },
      { id: 4, title: 'Episode 4', url: 'https://drive.google.com/file/d/1gFzRxfCRkECO0gpXpcLly11rPJuL-V4Y/view?usp=drive_link' },
      { id: 5, title: 'Episode 5', url: 'https://drive.google.com/file/d/1dT6SJrhlC18pqlO79BsNYYH3t_4p7TqX/view?usp=drive_link' },
      { id: 6, title: 'Episode 6', url: 'https://drive.google.com/file/d/1J8EZeB2xr0MNordJSARw38tWrokrZgOm/view?usp=drive_link' },
      { id: 7, title: 'Episode 7', url: 'https://drive.google.com/file/d/14FM0PJQjIHgiYfsO-sjA851Rt-V99QuK/view?usp=drive_link' },
      { id: 8, title: 'Episode 8', url: 'https://drive.google.com/file/d/1HNclAhv3xQoota61O_K-Ws0OqP40Oj7h/view?usp=drive_link' },
      { id: 9, title: 'Episode 9', url: 'https://drive.google.com/file/d/1qdWr5u_bNbFYFgzyU57zByS7bG-tFfxY/view?usp=drive_link' },
      { id: 10, title: 'Episode 10', url: 'https://drive.google.com/file/d/1ct4J5nWt1-SOON7UlBFhbGPVPVPnO-rQ/view?usp=sharing' }
    ]
  },
  {
    id: 'black-clover',
    title: 'Black Clover Season 2',
    subtitle: 'Black Clover',
    poster: 'black-clover',
    image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Black_Clover_S2_KV.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    accent: '#ff3d6b',
    episodes: [
      { id: 1, title: 'Episode 1', url: 'https://drive.google.com/file/d/15bFhLPi8F_oe8aC0EGN3X0MhWChnEIav/view?usp=sharing' },
      { id: 2, title: 'Episode 2', url: 'https://drive.google.com/file/d/1xvUkubNE7QpcOktHHfJYvsh21JVmNCTc/view?usp=sharing' },
      { id: 3, title: 'Episode 3', url: 'https://drive.google.com/file/d/1WimtDKUfVRWDa0_7fhOHxtsjP61zVaCo/view?usp=sharing' },
      { id: 4, title: 'Episode 4', url: 'https://drive.google.com/file/d/11-5YYpfisAFmiLGzJGIecdbx1NYeH9eV/view?usp=sharing' }
    ]
  },
  {
    id: 'beerus',
    title: 'Dragon Ball Super: Beerus',
    subtitle: 'Dragon Ball Super',
    poster: 'beerus',
    image: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/864246bb-622c-4cf4-88e0-768da2d81f62/3fbc8c12-2387-49fe-8299-7b1234934934.jpeg?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=1024&w=1024',
    accent: '#38c7ff',
    episodes: [
      { id: 1, title: 'Episode 1', url: 'https://drive.google.com/file/d/1ZOUd_BnEIPz2AbjmYU7E9iFam_jvzf5j/view?usp=sharing' },
      { id: 2, title: 'Episode 2', url: 'https://drive.google.com/file/d/1_2IRqyvqfWzmb7nB9O6nIhCvk9k0OQhA/view?usp=sharing' }
    ]
  }
];

const seriesGrid = document.getElementById('seriesGrid');
const watchSection = document.getElementById('watchSection');
const watchSeriesTitle = document.getElementById('watchSeriesTitle');
const watchSeriesSubtitle = document.getElementById('watchSeriesSubtitle');
const videoTitle = document.getElementById('videoTitle');
const videoPlayer = document.getElementById('videoPlayer');
const playerPlaceholder = document.getElementById('playerPlaceholder');
const episodeList = document.getElementById('episodeList');
const episodeCount = document.getElementById('episodeCount');
let selectedSeries = null;

function getEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const match = parsedUrl.pathname.match(/^\/file\/d\/([^/]+)/);
    if (parsedUrl.hostname === 'drive.google.com' && match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  } catch (error) {
    console.warn('Invalid episode URL:', error);
  }
  return url;
}

function playEpisode(episode) {
  if (!selectedSeries || !videoPlayer) return;
  videoPlayer.src = getEmbedUrl(episode.url);
  videoTitle.textContent = `${selectedSeries.title} — ${episode.title}`;
  playerPlaceholder.hidden = true;
  episodeList.querySelectorAll('.episode-choice').forEach((button) => {
    const active = Number(button.dataset.episodeId) === episode.id;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function openSeries(show, autoplayFirst = false) {
  selectedSeries = show;
  watchSection.hidden = false;
  watchSeriesTitle.textContent = show.title;
  watchSeriesSubtitle.textContent = show.subtitle;
  videoTitle.textContent = 'Select an episode to start watching';
  videoPlayer.src = 'about:blank';
  playerPlaceholder.hidden = false;
  episodeCount.textContent = `${show.episodes.length} episodes`;

  episodeList.innerHTML = show.episodes.map((episode, index) => `
    <button class="episode-choice" type="button" data-episode-id="${episode.id}" aria-pressed="false">
      <span class="episode-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="episode-choice-title">${episode.title}</span>
      <span class="episode-choice-play" aria-hidden="true">▶</span>
    </button>
  `).join('');

  episodeList.querySelectorAll('.episode-choice').forEach((button, index) => {
    button.addEventListener('click', () => playEpisode(show.episodes[index]));
  });

  document.querySelectorAll('.series-card').forEach((card) => {
    card.classList.toggle('selected', card.dataset.seriesId === show.id);
  });
  watchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (autoplayFirst && show.episodes.length) playEpisode(show.episodes[0]);
}

if (seriesGrid) {
  seriesGrid.innerHTML = series.map((show) => `
    <button class="series-card" type="button" data-series-id="${show.id}" aria-label="Open ${show.title}">
      <span class="series-poster ${show.poster}" style="--series-accent: ${show.accent}; background-image: linear-gradient(180deg, transparent 40%, rgba(5, 5, 10, .88)), url('${show.image}')"></span>
      <span class="series-card-info">
        <strong>${show.title}</strong>
        <small>${show.episodes.length} episodes · ${show.subtitle}</small>
      </span>
    </button>
  `).join('');

  seriesGrid.querySelectorAll('.series-card').forEach((card) => {
    card.addEventListener('click', () => {
      const show = series.find((item) => item.id === card.dataset.seriesId);
      openSeries(show);
    });
  });
}

const watchButton = document.getElementById('watchButton');
if (watchButton) {
  watchButton.addEventListener('click', () => openSeries(series[0], true));
}
