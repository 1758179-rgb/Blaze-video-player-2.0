(() => {
  const featured = [
    { id: 'cyberpunk-edgerunners-season-2', title: 'Cyberpunk: Edgerunners Season 2', subtitle: 'FEATURED SERIES · NEW SEASON', image: 'https://thumb.wikimedia.org/wikipedia/en/thumb/7/7a/Cyberpunk_Edgerunners_2_poster.jpg/250px-Cyberpunk_Edgerunners_2_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail', rating: '9.0', genres: ['Action', 'Sci-Fi', 'Drama'], description: 'Night City has a new story. Open the featured series to choose an episode.' },
    { id: 'bleach', title: 'Bleach: Thousand-Year Blood War — The Calamity', subtitle: 'FEATURED SERIES', image: 'https://variety.com/wp-content/uploads/2026/06/Bleach.jpg', rating: '9.2', genres: ['Action', 'Adventure', 'Fantasy'], description: 'The final battle draws closer as Soul Reapers face a new threat.' },
    { id: 'one-piece', title: 'One Piece', subtitle: 'FEATURED SERIES · TOP AIRING', image: 'https://thumb.wikimedia.org/wikipedia/en/thumb/e/e0/The_One_Piece_Poster.jpg/250px-The_One_Piece_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail', rating: '9.8', genres: ['Action', 'Adventure', 'Comedy'], description: 'Set sail with Luffy and the Straw Hat crew on their grand adventure.' },
    { id: 'black-clover', title: 'Black Clover Season 2', subtitle: 'FEATURED SERIES', image: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Black_Clover_S2_KV.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', rating: '8.7', genres: ['Action', 'Fantasy'], description: 'Asta keeps reaching for his dream in a world ruled by magic.' }
  ];
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Horror', 'Mahou Shoujo', 'Mecha', 'Music', 'Mystery', 'Psychological', 'Romance', 'Sci-Fi', 'Sports', 'Supernatural', 'Thriller'];
  const genreMap = {
    'bleach': ['Action', 'Adventure', 'Fantasy', 'Supernatural'],
    'black-clover': ['Action', 'Adventure', 'Fantasy'],
    'beerus': ['Action', 'Adventure', 'Comedy', 'Sci-Fi'],
    'jujutsu-kaisen-season-3': ['Action', 'Drama', 'Supernatural'],
    'one-piece': ['Action', 'Adventure', 'Comedy', 'Drama'],
    'cyberpunk-edgerunners-season-2': ['Action', 'Drama', 'Sci-Fi'],
    'avengers-endgame': ['Action', 'Adventure', 'Sci-Fi'],
    'spider-man-brand-new-day': ['Action', 'Adventure', 'Sci-Fi'],
    'the-odyssey': ['Adventure', 'Drama', 'Fantasy']
  };
  const imageById = Object.fromEntries(featured.map((item) => [item.id, item.image]));
  const indexById = (id) => [...document.querySelectorAll('.series-card[data-id]')].find((card) => card.dataset.id === id);
  let slide = 0;
  let activeGenre = '';

  function selectFeatured(index) {
    slide = (index + featured.length) % featured.length;
    const item = featured[slide];
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `linear-gradient(90deg, rgba(7,8,12,.94) 0%, rgba(7,8,12,.68) 43%, rgba(7,8,12,.12) 100%), url("${item.image}")`;
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundSize = 'cover';
    document.getElementById('heroEyebrow').textContent = item.subtitle;
    document.getElementById('heroTitle').textContent = item.title;
    document.getElementById('heroDescription').textContent = item.description;
    document.getElementById('heroRating').textContent = `★ ${item.rating}`;
    document.getElementById('heroMeta').innerHTML = `<span class="meta-pill">TV</span><span>•</span><span>${item.genres.join(' · ')}</span><span>•</span><span>★ ${item.rating}</span>`;
    document.getElementById('featuredCounter').textContent = `${slide + 1} / ${featured.length}`;
    document.getElementById('featuredWatchButton').onclick = () => indexById(item.id)?.click();
  }

  document.getElementById('featuredPrevious')?.addEventListener('click', () => selectFeatured(slide - 1));
  document.getElementById('featuredNext')?.addEventListener('click', () => selectFeatured(slide + 1));
  document.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLElement && ['INPUT', 'TEXTAREA'].includes(event.target.tagName)) return;
    if (event.key === 'ArrowLeft') selectFeatured(slide - 1);
    if (event.key === 'ArrowRight') selectFeatured(slide + 1);
  });
  selectFeatured(0);

  const genreList = document.getElementById('genreList');
  genreList.innerHTML = genres.map((genre) => `<button class="genre-chip" type="button" data-genre="${genre}" aria-pressed="false">${genre}</button>`).join('');
  function filterGenre(genre) {
    activeGenre = activeGenre === genre ? '' : genre;
    genreList.querySelectorAll('.genre-chip').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.genre === activeGenre)));
    document.querySelectorAll('.series-card[data-id]').forEach((card) => {
      const allowed = !activeGenre || (genreMap[card.dataset.id] || []).includes(activeGenre);
      card.hidden = !allowed;
    });
  }
  genreList.addEventListener('click', (event) => {
    const chip = event.target.closest('.genre-chip');
    if (chip) filterGenre(chip.dataset.genre);
  });
  document.querySelectorAll('[data-genre-scroll]').forEach((button) => button.addEventListener('click', () => {
    genreList.scrollBy({ left: button.dataset.genreScroll === 'right' ? 350 : -350, behavior: 'smooth' });
  }));

  // Add The Odyssey to the movie shelf; playback uses the supplied embed URL.
  const moviesGrid = document.getElementById('movieGrid');
  if (moviesGrid) {
    const odyssey = document.createElement('button');
    odyssey.type = 'button';
    odyssey.className = 'series-card odyssey-card';
    odyssey.dataset.id = 'the-odyssey';
    odyssey.dataset.type = 'movie';
    odyssey.setAttribute('aria-label', 'Play The Odyssey');
    odyssey.innerHTML = `<span class="series-poster" style="background-image:linear-gradient(180deg,transparent 38%,rgba(7,8,12,.88)),url('https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451674187/the-odyssey-9781451674187_hr.jpg')"></span><span class="series-card-info"><strong>The Odyssey</strong><span class="card-metadata"><span>FILM</span><span>★ —</span></span><small>Adventure · Drama</small></span><span class="catalog-badge">Movie</span>`;
    moviesGrid.appendChild(odyssey);
    odyssey.addEventListener('click', () => {
      const section = document.getElementById('watchSection');
      const iframe = document.getElementById('videoPlayer');
      const placeholder = document.getElementById('playerPlaceholder');
      section.hidden = false;
      document.getElementById('watchSeriesTitle').textContent = 'The Odyssey';
      document.getElementById('watchSeriesSubtitle').textContent = 'MOVIE';
      document.getElementById('videoTitle').textContent = 'The Odyssey';
      document.getElementById('playlistHeading').firstChild.textContent = 'Movie';
      document.getElementById('episodeCount').textContent = '1 video';
      document.getElementById('episodeList').innerHTML = '<button class="episode-choice active" type="button" aria-pressed="true"><span class="episode-number">01</span><span class="episode-choice-title">Play The Odyssey</span><span class="episode-choice-play" aria-hidden="true">▶</span></button>';
      const play = () => { iframe.src = 'https://apiplayer.ru/embed/movie/tt33764258?autoplay=1&lang=en&server=s5'; placeholder.hidden = true; };
      document.querySelector('#episodeList .episode-choice').addEventListener('click', play);
      play();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const historyGrid = document.getElementById('watchHistoryGrid');
  const historyKey = 'blaze-watch-history-v1';
  function readHistory() {
    try { return JSON.parse(localStorage.getItem(historyKey) || '[]'); } catch { return []; }
  }
  function renderHistory() {
    if (!historyGrid) return;
    const history = readHistory();
    if (!history.length) { historyGrid.innerHTML = '<p class="empty-state">Your played episodes will appear here.</p>'; return; }
    historyGrid.innerHTML = history.map((entry) => `<button class="history-entry" type="button" data-history-id="${entry.id}"><img src="${entry.image}" alt="" loading="lazy"><span class="history-copy"><strong>${entry.title}</strong><small>${entry.episode}</small></span><span class="history-time">${new Date(entry.time).toLocaleDateString()}</span></button>`).join('');
    historyGrid.querySelectorAll('.history-entry').forEach((button) => button.addEventListener('click', () => indexById(button.dataset.historyId)?.click()));
  }
  function saveHistory() {
    const title = document.getElementById('watchSeriesTitle')?.textContent;
    const episode = document.getElementById('videoTitle')?.textContent;
    if (!title || !episode || episode.startsWith('Select ')) return;
    const card = [...document.querySelectorAll('.series-card[data-id]')].find((item) => item.dataset.id && item.querySelector('strong')?.textContent === title);
    const id = card?.dataset.id || (title === 'The Odyssey' ? 'the-odyssey' : '');
    const image = card?.querySelector('.series-poster')?.style.backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1] || imageById[id] || 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451674187/the-odyssey-9781451674187_hr.jpg';
    const items = readHistory().filter((entry) => !(entry.title === title && entry.episode === episode));
    items.unshift({ id, title, episode: episode.replace(`${title} — `, ''), image, time: Date.now() });
    localStorage.setItem(historyKey, JSON.stringify(items.slice(0, 12)));
    renderHistory();
  }
  document.getElementById('episodeList')?.addEventListener('click', (event) => {
    if (event.target.closest('.episode-choice')) setTimeout(saveHistory, 0);
  });
  document.getElementById('clearHistory')?.addEventListener('click', () => { localStorage.removeItem(historyKey); renderHistory(); });
  renderHistory();
})();
