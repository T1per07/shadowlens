/* ========================================
   影子 ShadowLens - Main JavaScript
   ======================================== */

// Unsplash Photo Data
const photos = [
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    title: '山巅之上',
    titleEn: 'Above the Mountains',
    author: 'Alex Chen',
    aspect: '3/4'
  },
  {
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
    title: '晨雾森林',
    titleEn: 'Morning Mist',
    author: 'Sarah Kim',
    aspect: '4/3'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    title: '光之森林',
    titleEn: 'Forest Light',
    author: 'Mike Johnson',
    aspect: '3/4'
  },
  {
    url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
    title: '海的呼吸',
    titleEn: 'Ocean Breath',
    author: 'Emily Brown',
    aspect: '16/9'
  },
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    title: '山谷之光',
    titleEn: 'Valley Light',
    author: 'David Wilson',
    aspect: '4/3'
  },
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    title: '人像',
    titleEn: 'Portrait',
    author: 'Lisa Anderson',
    aspect: '3/4'
  },
  {
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
    title: '日落时分',
    titleEn: 'Sunset Hour',
    author: 'Tom Martinez',
    aspect: '16/9'
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    title: '远方',
    titleEn: 'Distance',
    author: 'Anna Lee',
    aspect: '4/3'
  },
  {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    title: '星空',
    titleEn: 'Starry Night',
    author: 'Chris Wang',
    aspect: '16/9'
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: '山峰',
    titleEn: 'Peak',
    author: 'Kevin Zhang',
    aspect: '3/4'
  },
  {
    url: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80',
    title: '极光',
    titleEn: 'Aurora',
    author: 'Sophie Chen',
    aspect: '16/9'
  },
  {
    url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
    title: '瀑布',
    titleEn: 'Waterfall',
    author: 'James Liu',
    aspect: '3/4'
  }
];

// ========================================
// Loading Screen
// ========================================
function initLoading() {
  const loading = document.createElement('div');
  loading.className = 'loading-screen';
  loading.innerHTML = `
    <div class="loading-logo">
      <div style="text-align: center;">
        <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 200; letter-spacing: 0.3em; color: var(--color-text);">影子</div>
        <div style="font-family: var(--font-sans); font-size: 0.625rem; font-weight: 300; letter-spacing: 0.5em; text-transform: uppercase; color: var(--color-text-muted); margin-top: 0.5rem;">ShadowLens</div>
      </div>
    </div>
  `;
  document.body.prepend(loading);

  window.addEventListener('load', () => {
    setTimeout(() => {
      loading.classList.add('hidden');
      setTimeout(() => loading.remove(), 800);
    }, 800);
  });
}

// ========================================
// Navigation - Show on scroll up
// ========================================
function initNavigation() {
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateNavbar() {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      navbar.classList.remove('visible');
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up
      navbar.classList.add('visible');
    } else {
      // Scrolling down
      navbar.classList.remove('visible');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  });
}

// ========================================
// Parallax Effect
// ========================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  function updateParallax() {
    const scrollY = window.scrollY;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax);
      const rect = el.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = (centerY - viewportCenter) * speed;

      el.style.transform = `translateY(${offset * 0.1}px)`;
    });
  }

  // Mouse parallax
  document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax);
      const x = mouseX * speed * 10;
      const y = mouseY * speed * 10;

      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  window.addEventListener('scroll', updateParallax, { passive: true });
}

// ========================================
// Photo Gallery - Masonry Layout
// ========================================
function initGallery() {
  const masonry = document.getElementById('masonry');
  const isZh = document.documentElement.lang === 'zh-CN';

  photos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'photo-card reveal';
    card.style.transitionDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <img src="${photo.url}" alt="${isZh ? photo.title : photo.titleEn}" loading="lazy" style="aspect-ratio: ${photo.aspect}; object-fit: cover;">
      <div class="photo-overlay">
        <div class="photo-title">${isZh ? photo.title : photo.titleEn}</div>
        <div class="photo-author">${photo.author}</div>
      </div>
    `;

    masonry.appendChild(card);
  });

  // Observe for scroll reveal
  initScrollReveal();
}

// ========================================
// Scroll Reveal Animation
// ========================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// Language Switch
// ========================================
function initLangSwitch() {
  const langBtns = document.querySelectorAll('.lang-btn');

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const lang = btn.dataset.lang;

      // Update hero text
      const titleCn = document.querySelector('.title-cn');
      const titleEn = document.querySelector('.title-en');
      const subtitle = document.querySelector('.hero-subtitle');

      if (lang === 'en') {
        titleCn.textContent = 'Every frame tells a story';
        titleEn.textContent = '每一帧，都是一个故事';
        subtitle.textContent = 'Discover the art of photography';
      } else {
        titleCn.textContent = '每一帧，都是一个故事';
        titleEn.textContent = 'Every frame tells a story';
        subtitle.textContent = '发现摄影的艺术 · 捕捉瞬间的永恒';
      }

      // Update section titles
      const sectionTitles = document.querySelectorAll('.section-title');
      const sectionSubtitles = document.querySelectorAll('.section-subtitle');

      if (lang === 'en') {
        sectionTitles[0].textContent = 'Curated Works';
        sectionSubtitles[0].textContent = '精选作品';
        sectionTitles[1].textContent = 'About ShadowLens';
        sectionSubtitles[1].textContent = '关于影子';
      } else {
        sectionTitles[0].textContent = '精选作品';
        sectionSubtitles[0].textContent = 'Curated Works';
        sectionTitles[1].textContent = '关于影子';
        sectionSubtitles[1].textContent = 'About ShadowLens';
      }

      // Update about text
      const aboutText = document.querySelector('.about-text');
      if (lang === 'en') {
        aboutText.innerHTML = 'A pure photography community,<br>just for appreciation, not for noise.<br>Here, every photo deserves to be seen.';
      } else {
        aboutText.innerHTML = '一个纯粹的摄影社区，<br>只为欣赏，不为喧嚣。<br>在这里，每一张照片都值得被看见。';
      }

      // Update footer
      const footerText = document.querySelector('.footer-text');
      footerText.textContent = lang === 'en' ? 'Discover the art of photography' : '发现摄影的艺术';

      // Update photo titles
      document.querySelectorAll('.photo-title').forEach((title, index) => {
        title.textContent = lang === 'en' ? photos[index].titleEn : photos[index].title;
      });

      // Update HTML lang
      document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    });
  });
}

// ========================================
// Search Toggle
// ========================================
function initSearchToggle() {
  const searchBtn = document.getElementById('searchToggle');
  if (!searchBtn) return;

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'search.html';
  });
}

// ========================================
// Nav Login State
// ========================================
function initNavLogin() {
  try {
    const user = JSON.parse(localStorage.getItem('sl_current_user'));
    const navBtn = document.querySelector('.nav-login');
    if (user && navBtn) {
      navBtn.textContent = user.name;
    }
  } catch(e) {}
}

// ========================================
// Featured Photographers Strip
// ========================================
function initPhotographersStrip() {
  const strip = document.getElementById('photographersStrip');
  if (!strip || typeof photographers === 'undefined') return;

  Object.entries(photographers).forEach(([id, p]) => {
    const card = document.createElement('a');
    card.href = `photographer.html?id=${id}`;
    card.className = 'photographer-card';
    const tagsHtml = (p.tags || []).map(t => `<span class="photographer-card-tag">${t}</span>`).join('');
    card.innerHTML = `
      <div class="photographer-card-avatar">
        <img src="${p.avatar}" alt="${p.name}" loading="lazy">
      </div>
      <div class="photographer-card-name">${p.name}</div>
      <div class="photographer-card-bio">${p.bio}</div>
      <div class="photographer-card-tags">${tagsHtml}</div>
    `;
    strip.appendChild(card);
  });
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initNavigation();
  initParallax();
  initGallery();
  initLangSwitch();
  initSearchToggle();
  initNavLogin();
  initPhotographersStrip();
});
