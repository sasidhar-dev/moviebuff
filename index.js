/* ===== AUTH ===== */
const CREDENTIALS = { username: 'moviebuff', password: 'cinema123' };

/* ===== MOVIES DATA ===== */
const MOVIES = [
  {
    id: 1, title: "The Dark Knight", year: 2008, genre: ["Action", "Crime", "Drama"],
    rating: 9.0, votes: "2.9M",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    director: "Christopher Nolan", cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    runtime: "152 min",
    platforms: [{ name: "HBO Max", key: "hbo" }, { name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 2, title: "Inception", year: 2010, genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.8, votes: "2.5M",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg",
    director: "Christopher Nolan", cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    runtime: "148 min",
    platforms: [{ name: "Netflix", key: "netflix" }, { name: "HBO Max", key: "hbo" }]
  },
  {
    id: 3, title: "Interstellar", year: 2014, genre: ["Sci-Fi", "Drama", "Adventure"],
    rating: 8.7, votes: "2.0M",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIE.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    director: "Christopher Nolan", cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    runtime: "169 min",
    platforms: [{ name: "Paramount+", key: "paramount" }, { name: "Apple TV+", key: "apple" }]
  },
  {
    id: 4, title: "The Matrix", year: 1999, genre: ["Sci-Fi", "Action"],
    rating: 8.7, votes: "1.9M",
    description: "A computer hacker learns about the true nature of his reality and his role in the war against controllers of it.",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    director: "The Wachowskis", cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    runtime: "136 min",
    platforms: [{ name: "HBO Max", key: "hbo" }, { name: "Netflix", key: "netflix" }]
  },
  {
    id: 5, title: "Avengers: Endgame", year: 2019, genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.4, votes: "1.2M",
    description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    director: "Anthony & Joe Russo", cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    runtime: "181 min",
    platforms: [{ name: "Disney+", key: "disney" }]
  },
  {
    id: 6, title: "Spider-Man: No Way Home", year: 2021, genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.2, votes: "850K",
    description: "With his identity revealed, Peter Parker asks Doctor Strange for help. When the spell goes wrong, dangerous foes from other worlds start to appear.",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    director: "Jon Watts", cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
    runtime: "148 min",
    platforms: [{ name: "Netflix", key: "netflix" }, { name: "Disney+", key: "disney" }]
  },
  {
    id: 7, title: "Dune: Part One", year: 2021, genre: ["Sci-Fi", "Adventure", "Drama"],
    rating: 8.0, votes: "750K",
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklpcKDRHPCLMhQwFOgFngi.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/qdIMHd4sEoajKKeASdcHX9YSkHH.jpg",
    director: "Denis Villeneuve", cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
    runtime: "155 min",
    platforms: [{ name: "HBO Max", key: "hbo" }, { name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 8, title: "The Batman", year: 2022, genre: ["Action", "Crime", "Drama"],
    rating: 7.8, votes: "620K",
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues, targeting Gotham's elite murderers.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    director: "Matt Reeves", cast: "Robert Pattinson, Zoë Kravitz, Paul Dano",
    runtime: "176 min",
    platforms: [{ name: "HBO Max", key: "hbo" }]
  },
  {
    id: 9, title: "Oppenheimer", year: 2023, genre: ["Drama", "Thriller"],
    rating: 8.3, votes: "700K",
    description: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II, and the subsequent investigation of his loyalty.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    director: "Christopher Nolan", cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
    runtime: "180 min",
    platforms: [{ name: "Peacock", key: "peacock" }, { name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 10, title: "Avatar: The Way of Water", year: 2022, genre: ["Sci-Fi", "Adventure", "Action"],
    rating: 7.6, votes: "450K",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri.",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s16H6tpK2utvwpatzGAsADNiPdj.jpg",
    director: "James Cameron", cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    runtime: "192 min",
    platforms: [{ name: "Disney+", key: "disney" }, { name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 11, title: "Vikram", year: 2022, genre: ["Action", "Thriller"],
    rating: 8.3, votes: "120K",
    description: "A special investigator discovers a case of serial killings is not what it seems to be, and leading down this path is only going to end in a war between everyone involved.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Vikram",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Vikram+Backdrop",
    director: "Lokesh Kanagaraj", cast: "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil",
    runtime: "173 min",
    platforms: [{ name: "Disney+", key: "disney" }, { name: "Hulu", key: "hulu" }]
  },
  {
    id: 12, title: "Ponniyin Selvan: I", year: 2022, genre: ["Action", "Adventure", "Drama"],
    rating: 7.5, votes: "50K",
    description: "Vandiyathevan sets out to cross the Chola land to deliver a message from the Crown Prince Aditha Karikalan. Kundavai attempts to establish political peace.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Ponniyin+Selvan:+I",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Ponniyin+Selvan+Backdrop",
    director: "Mani Ratnam", cast: "Vikram, Aishwarya Rai Bachchan, Jayam Ravi",
    runtime: "167 min",
    platforms: [{ name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 13, title: "Kaithi", year: 2019, genre: ["Action", "Crime", "Thriller"],
    rating: 8.4, votes: "70K",
    description: "Dilli, an ex-convict, endeavors to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Kaithi",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Kaithi+Backdrop",
    director: "Lokesh Kanagaraj", cast: "Karthi, Narain, Arjun Das",
    runtime: "145 min",
    platforms: [{ name: "Disney+", key: "disney" }]
  },
  {
    id: 14, title: "Asuran", year: 2019, genre: ["Action", "Drama"],
    rating: 8.5, votes: "85K",
    description: "The teenage son of a farmer from an underprivileged caste kills a rich, upper-caste landlord. How the pacifist farmer saves his hot-blooded son is the rest of the story.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Asuran",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Asuran+Backdrop",
    director: "Vetrimaaran", cast: "Dhanush, Manju Warrier, Prakash Raj",
    runtime: "141 min",
    platforms: [{ name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 15, title: "Master", year: 2021, genre: ["Action", "Thriller"],
    rating: 7.3, votes: "100K",
    description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Master",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Master+Backdrop",
    director: "Lokesh Kanagaraj", cast: "Vijay, Vijay Sethupathi, Malavika Mohanan",
    runtime: "178 min",
    platforms: [{ name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 16, title: "Vada Chennai", year: 2018, genre: ["Crime", "Drama", "Action"],
    rating: 8.4, votes: "60K",
    description: "A proficient carrom player sets foot in the world of crime and joins forces with local gangsters to settle their feuds.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Vada+Chennai",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Vada+Chennai+Backdrop",
    director: "Vetrimaaran", cast: "Dhanush, Ameer, Andrea Jeremiah",
    runtime: "164 min",
    platforms: [{ name: "Disney+", key: "disney" }]
  },
  {
    id: 17, title: "96", year: 2018, genre: ["Romance", "Drama"],
    rating: 8.5, votes: "95K",
    description: "Two high school sweethearts meet at a reunion after 22 years and reminiscence about their past.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=96",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=96+Backdrop",
    director: "C. Premkumar", cast: "Vijay Sethupathi, Trisha Krishnan",
    runtime: "158 min",
    platforms: [{ name: "Netflix", key: "netflix" }]
  },
  {
    id: 18, title: "Nayakan", year: 1987, genre: ["Crime", "Drama"],
    rating: 8.6, votes: "35K",
    description: "A young boy from Tuticorin runs away to Mumbai, where he gradually becomes a powerful underworld don.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Nayakan",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Nayakan+Backdrop",
    director: "Mani Ratnam", cast: "Kamal Haasan, Saranya Ponvannan, Janagaraj",
    runtime: "145 min",
    platforms: [{ name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 19, title: "Baasha", year: 1995, genre: ["Action", "Drama"],
    rating: 8.3, votes: "40K",
    description: "An auto-driver hides his violent past as a powerful Mumbai gangster to live a peaceful life with his family.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Baasha",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Baasha+Backdrop",
    director: "Suresh Krissna", cast: "Rajinikanth, Nagma, Raghuvaran",
    runtime: "145 min",
    platforms: [{ name: "Amazon Prime", key: "prime" }]
  },
  {
    id: 20, title: "Mankatha", year: 2011, genre: ["Action", "Crime", "Thriller"],
    rating: 7.6, votes: "55K",
    description: "A suspended cop and a group of youngsters pull off a heist, but things go wrong when they start turning against each other.",
    poster: "https://placehold.co/500x750/1c1c2e/7c3aed.png?text=Mankatha",
    backdrop: "https://placehold.co/1280x720/1c1c2e/7c3aed.png?text=Mankatha+Backdrop",
    director: "Venkat Prabhu", cast: "Ajith Kumar, Arjun Sarja, Trisha Krishnan",
    runtime: "155 min",
    platforms: [{ name: "Disney+", key: "disney" }]
  }
];

const PLATFORM_ICONS = {
  netflix: 'fa-solid fa-n',
  prime: 'fa-brands fa-amazon',
  hbo: 'fa-solid fa-h',
  disney: 'fa-solid fa-d',
  apple: 'fa-brands fa-apple',
  hulu: 'fa-solid fa-play',
  paramount: 'fa-solid fa-p',
  peacock: 'fa-solid fa-dove',
  theaters: 'fa-solid fa-ticket'
};

/* ===== STATE ===== */
let state = {
  loggedIn: false,
  user: '',
  query: '',
  genre: 'all',
  sort: 'default',
  page: 1,
  perPage: 8
};

/* ===== DOM REFS ===== */
const loginPage = document.getElementById('login-page');
const homePage = document.getElementById('home-page');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const eyeToggle = document.getElementById('eye-toggle');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');
const genreFilter = document.getElementById('genre-filter');
const sortSelect = document.getElementById('sort-select');
const movieGrid = document.getElementById('movie-grid');
const noResults = document.getElementById('no-results');
const pagination = document.getElementById('pagination');
const resultsLabel = document.getElementById('results-label');
const navUser = document.getElementById('nav-user');
const heroUser = document.getElementById('hero-user');
const statTotal = document.getElementById('stat-total');
const modal = document.getElementById('modal');
const modalInner = document.getElementById('modal-inner');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const logoutBtn = document.getElementById('logout-btn');
const resetBtn = document.getElementById('reset-btn');

/* ===== LOGIN ===== */
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = usernameInput.value.trim();
  const p = passwordInput.value;
  if (u === CREDENTIALS.username && p === CREDENTIALS.password) {
    state.loggedIn = true;
    state.user = u;
    loginError.classList.add('hidden');
    loginPage.classList.remove('active');
    loginPage.classList.add('hidden');
    homePage.classList.remove('hidden');
    homePage.classList.add('active');
    navUser.textContent = u;
    heroUser.textContent = u;
    statTotal.textContent = MOVIES.length;
    render();
  } else {
    loginError.classList.remove('hidden');
    passwordInput.value = '';
    passwordInput.focus();
  }
});

eyeToggle.addEventListener('click', () => {
  const isPass = passwordInput.type === 'password';
  passwordInput.type = isPass ? 'text' : 'password';
  eyeToggle.classList.toggle('fa-eye', !isPass);
  eyeToggle.classList.toggle('fa-eye-slash', isPass);
});

logoutBtn.addEventListener('click', () => {
  state = { loggedIn: false, user: '', query: '', genre: 'all', sort: 'default', page: 1, perPage: 8 };
  homePage.classList.add('hidden');
  homePage.classList.remove('active');
  loginPage.classList.remove('hidden');
  loginPage.classList.add('active');
  usernameInput.value = '';
  passwordInput.value = '';
  loginError.classList.add('hidden');
  searchInput.value = '';
  genreFilter.value = 'all';
  sortSelect.value = 'default';
});

/* ===== SEARCH & FILTER ===== */
let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    state.query = searchInput.value.trim().toLowerCase();
    state.page = 1;
    clearBtn.classList.toggle('hidden', !state.query);
    render();
  }, 250);
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  state.query = '';
  state.page = 1;
  clearBtn.classList.add('hidden');
  render();
});

genreFilter.addEventListener('change', () => {
  state.genre = genreFilter.value;
  state.page = 1;
  render();
});

sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  state.page = 1;
  render();
});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    genreFilter.value = 'all';
    sortSelect.value = 'default';
    state.query = '';
    state.genre = 'all';
    state.sort = 'default';
    state.page = 1;
    clearBtn.classList.add('hidden');
    render();
  });
}

/* ===== FILTER & SORT ===== */
function getFiltered() {
  let list = [...MOVIES];
  if (state.query) {
    list = list.filter(m =>
      m.title.toLowerCase().includes(state.query) ||
      m.genre.some(g => g.toLowerCase().includes(state.query)) ||
      m.director.toLowerCase().includes(state.query) ||
      m.cast.toLowerCase().includes(state.query)
    );
  }
  if (state.genre !== 'all') {
    list = list.filter(m => m.genre.includes(state.genre));
  }
  switch (state.sort) {
    case 'rating-high': list.sort((a, b) => b.rating - a.rating); break;
    case 'rating-low': list.sort((a, b) => a.rating - b.rating); break;
    case 'year-new': list.sort((a, b) => b.year - a.year); break;
    case 'year-old': list.sort((a, b) => a.year - b.year); break;
    case 'az': list.sort((a, b) => a.title.localeCompare(b.title)); break;
  }
  return list;
}

/* ===== STAR RATING ===== */
function starsHTML(rating) {
  const max = 10;
  const stars = 5;
  const filled = Math.round((rating / max) * stars * 2) / 2;
  let html = '';
  for (let i = 1; i <= stars; i++) {
    if (i <= filled) html += '<i class="fas fa-star lit"></i>';
    else if (i - 0.5 === filled) html += '<i class="fas fa-star-half-stroke lit"></i>';
    else html += '<i class="fas fa-star"></i>';
  }
  return html;
}

/* ===== PLATFORM TAGS ===== */
function platformTagHTML(p) {
  return `<span class="platform-tag ${p.key}">${p.name}</span>`;
}

function platformChipHTML(p) {
  const icon = PLATFORM_ICONS[p.key] || 'fa-solid fa-play';
  return `<span class="watch-chip ${p.key}"><i class="${icon}"></i>${p.name}</span>`;
}

/* ===== RENDER MOVIES ===== */
function render() {
  const filtered = getFiltered();
  const total = filtered.length;
  const totalPages = Math.ceil(total / state.perPage);
  if (state.page > totalPages) state.page = Math.max(1, totalPages);

  const start = (state.page - 1) * state.perPage;
  const pageMovies = filtered.slice(start, start + state.perPage);

  resultsLabel.innerHTML = `Showing <b>${total}</b> movie${total !== 1 ? 's' : ''}`;

  if (total === 0) {
    movieGrid.innerHTML = '';
    noResults.classList.remove('hidden');
    pagination.innerHTML = '';
    return;
  }
  noResults.classList.add('hidden');

  movieGrid.innerHTML = pageMovies.map((m, i) => `
    <div class="movie-card" data-id="${m.id}" style="animation-delay:${i * 0.05}s">
      <div class="card-poster">
        <img src="${m.poster}" alt="${m.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/1c1c2e/7c3aed?text=No+Image'">
        <span class="card-badge">${m.year}</span>
        <span class="card-rating"><i class="fas fa-star"></i>${m.rating}</span>
        <div class="card-overlay">
          <p class="overlay-desc">${m.description}</p>
          <div class="overlay-platforms">
            ${m.platforms.slice(0, 2).map(p => platformTagHTML(p)).join('')}
          </div>
          <span class="overlay-more"><i class="fas fa-circle-info"></i> Click for details</span>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${m.title}</div>
        <div class="card-meta">
          <span><i class="fas fa-star" style="color:#f5c518;font-size:0.7rem"></i> ${m.rating}</span>
          <span class="dot"></span>
          <span>${m.genre[0]}</span>
          <span class="dot"></span>
          <span>${m.runtime}</span>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
  });

  renderPagination(totalPages);
}

/* ===== PAGINATION ===== */
function renderPagination(totalPages) {
  if (totalPages <= 1) { pagination.innerHTML = ''; return; }

  const p = state.page;
  let btns = '';

  btns += `<button class="page-btn" ${p === 1 ? 'disabled' : ''} data-page="${p - 1}"><i class="fas fa-chevron-left"></i></button>`;

  const range = new Set([1, totalPages, p, p - 1, p + 1].filter(n => n >= 1 && n <= totalPages));
  const sorted = [...range].sort((a, b) => a - b);

  let prev = 0;
  for (const n of sorted) {
    if (prev && n - prev > 1) btns += `<span class="page-dots">…</span>`;
    btns += `<button class="page-btn ${n === p ? 'active' : ''}" data-page="${n}">${n}</button>`;
    prev = n;
  }

  btns += `<button class="page-btn" ${p === totalPages ? 'disabled' : ''} data-page="${p + 1}"><i class="fas fa-chevron-right"></i></button>`;

  pagination.innerHTML = btns;
  pagination.querySelectorAll('.page-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      state.page = parseInt(btn.dataset.page);
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ===== MODAL ===== */
function openModal(id) {
  const m = MOVIES.find(x => x.id === id);
  if (!m) return;

  const genres = m.genre.map(g => `<span class="genre-tag">${g}</span>`).join('');
  const platforms = m.platforms.map(p => platformChipHTML(p)).join('');

  modalInner.innerHTML = `
    <div class="modal-hero">
      <img src="${m.backdrop}" alt="${m.title}" onerror="this.style.display='none'">
      <div class="modal-hero-gradient"></div>
      <img class="modal-poster" src="${m.poster}" alt="${m.title}">
    </div>
    <div class="modal-body">
      <h2 class="modal-title">${m.title}</h2>
      <div class="modal-meta">
        <span class="rating"><i class="fas fa-star"></i> ${m.rating}/10</span>
        <span>${m.votes} votes</span>
        <span>•</span>
        <span>${m.year}</span>
        <span>•</span>
        <span>${m.runtime}</span>
      </div>
      <div class="star-bar">${starsHTML(m.rating)}</div>
      <div class="modal-genre">${genres}</div>
      <p class="modal-desc">${m.description}</p>
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:6px;"><strong style="color:var(--text)">Director:</strong> ${m.director}</p>
      <p style="font-size:0.85rem;color:var(--muted);margin-bottom:24px;"><strong style="color:var(--text)">Cast:</strong> ${m.cast}</p>
      <div class="watch-section">
        <h4><i class="fas fa-tv" style="margin-right:6px;color:var(--accent2)"></i>Where to Watch</h4>
        <div class="watch-platforms">${platforms}</div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
