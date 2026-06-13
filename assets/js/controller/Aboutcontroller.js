/**
 * AboutController.js — Controller Layer
 * Handles about.html specific interactions:
 * - Back bar scroll state (state-hero / state-scrolled) identik navbar
 * - Client grid show more / less
 */

export function initAbout() {
  _initBackBar();
  _initClientGrid();
}

/* ── Back Bar — scroll state identik dengan NavController ── */
function _initBackBar() {
  const bar     = document.querySelector('.about-back-bar');
  if (!bar) return;

  let ticking = false;

  // Ambil bottom dari hero section (sama seperti NavController._getHeroBottom)
  function getHeroBottom() {
    const hero = document.querySelector('section:first-of-type, [data-hero], #hero');
    if (!hero) return 80;
    return hero.getBoundingClientRect().bottom + window.scrollY - 40;
  }

  function updateState() {
    const pastHero = window.scrollY > getHeroBottom();
    bar.classList.toggle('state-hero',     !pastHero);
    bar.classList.toggle('state-scrolled',  pastHero);

    // Update CSS var navbar height (dipakai oleh scroll offset)
    document.documentElement.style.setProperty('--navbar-h', `${bar.offsetHeight}px`);
  }

  // Set state awal tanpa tunggu scroll
  updateState();

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateState();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateState);
}

/* ── Client Grid Show More / Less ─────────────────────────── */
function _initClientGrid() {
  const btn     = document.getElementById('clientMoreBtn');
  const grid    = document.getElementById('clientGrid');
  const arrow   = document.getElementById('clientBtnArrow');
  const countEl = document.getElementById('clientCountLabel');

  if (!btn || !grid) return;

  function getHiddenCards() { return grid.querySelectorAll('.cg-card.cg-hidden'); }
  function getTotalCards()  { return grid.querySelectorAll('.cg-card').length; }
  function getShownCards()  { return grid.querySelectorAll('.cg-card:not(.cg-hidden)').length; }

  function updateCount() {
    if (!countEl) return;
    const total  = getTotalCards();
    const shown  = getShownCards();
    const isEN   = document.documentElement.lang === 'en';
    countEl.textContent = isEN
      ? `Showing ${shown} of ${total} clients`
      : `Menampilkan ${shown} dari ${total} klien`;
  }

  let isOpen = false;

  btn.addEventListener('click', () => {
    isOpen = !isOpen;

    getHiddenCards().forEach(card => {
      if (isOpen) {
        card.classList.remove('cg-hidden');
        card.classList.add('cg-visible', 'cg-revealed');
      } else {
        card.classList.add('cg-hidden');
        card.classList.remove('cg-visible', 'cg-revealed');
      }
    });

    // Teks tombol — pakai data-i18n jika sudah ditranslate, fallback manual
    const textEl = btn.querySelector('.cg-more-btn__text');
    if (textEl) {
      const isEN = document.documentElement.lang === 'en';
      textEl.textContent = isOpen
        ? (isEN ? 'Show Less' : 'Tampilkan Lebih Sedikit')
        : (isEN ? 'View All Clients' : 'Lihat Semua Klien');
    }

    // Rotasi panah
    if (arrow) {
      arrow.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      arrow.style.transition = 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }

    btn.setAttribute('aria-expanded', String(isOpen));
    updateCount();
  });

  updateCount();
}