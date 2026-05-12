import domView from '../view/DOMView.js';

export class NavController {
  constructor() {
    this._navbar      = document.getElementById('navbar');
    this._hamburger   = document.getElementById('hamburger');
    this._mobileMenu  = document.getElementById('mobile-menu');
    this._navLinks    = document.querySelectorAll('.nav-link');
    this._sections    = document.querySelectorAll('section[id], div[id].scroll-target');
    this._menuOpen    = false;
    this._ticking     = false;
  }

  init() {
    if (!this._navbar) return;

    this._bindScroll();
    this._bindHamburger();
    this._bindMobileLinks();
    this._bindSmoothScroll();
    this._setActivePageLink();
    this._updateNavState(); // set state awal tanpa menunggu scroll
    domView.updateNavbarHeightVar(this._navbar);
    window.addEventListener('resize', () => domView.updateNavbarHeightVar(this._navbar));
  }

  /* ── Deteksi hero / scrolled state ── */
  _getHeroBottom() {
    const hero = document.querySelector('.hero, [data-hero], #hero, section:first-of-type');
    if (!hero) return 80;
    return hero.getBoundingClientRect().bottom + window.scrollY - 40;
  }

  _updateNavState() {
    const pastHero = window.scrollY > this._getHeroBottom();
    this._navbar.classList.toggle('state-hero',     !pastHero);
    this._navbar.classList.toggle('state-scrolled',  pastHero);
    // update CSS var untuk mobile menu top
    domView.updateNavbarHeightVar?.(this._navbar);
  }

  /* ── Scroll (throttled rAF) ── */
  _bindScroll() {
    window.addEventListener('scroll', () => {
      if (!this._ticking) {
        requestAnimationFrame(() => {
          this._updateNavState();
          this._ticking = false;
        });
        this._ticking = true;
      }
    }, { passive: true });
  }

  /* ── Hamburger ── */
  _bindHamburger() {
    if (!this._hamburger || !this._mobileMenu) return;

    this._hamburger.addEventListener('click', () => {
      this._setMenuOpen(!this._menuOpen);
    });

    document.addEventListener('click', (e) => {
      if (this._menuOpen &&
          !this._navbar.contains(e.target) &&
          !this._mobileMenu.contains(e.target)) {
        this._setMenuOpen(false);
      }
    });
  }

  _setMenuOpen(open) {
    this._menuOpen = open;
    this._hamburger.classList.toggle('is-open', open);
    this._hamburger.setAttribute('aria-expanded', open);
    this._mobileMenu.classList.toggle('is-open', open);
    this._mobileMenu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  /* ── Tutup mobile menu saat link diklik ── */
  _bindMobileLinks() {
    this._mobileMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this._setMenuOpen(false));
    });
  }

  /* ── Smooth scroll anchor ── */
  _bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = this._navbar?.offsetHeight ?? 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth',
        });
      });
    });
  }

  /* ── Active link via pathname ── */
  _setActivePageLink() {
    const filename = window.location.pathname.split('/').pop() || 'index.html';
    const pageMap = {
      '':             'index.html',
      'index.html':   'index.html',
      'about.html':   'about.html',
      'layanan.html': 'layanan.html',
      'contact.html': 'contact.html',
    };
    const activePage = pageMap[filename] ?? filename;

    this._navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === activePage || href?.endsWith('/' + activePage);
      link.classList.toggle('nav-link--active', isActive);
      isActive
        ? link.setAttribute('aria-current', 'page')
        : link.removeAttribute('aria-current');
    });

    if (filename === '' || filename === 'index.html') {
      if (this._sections.length) this._bindSectionObserver();
    }
  }

  /* ── IntersectionObserver untuk section aktif (index.html) ── */
  _bindSectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        this._navLinks.forEach(link => {
          const match = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('nav-link--active', match);
          match
            ? link.setAttribute('aria-current', 'page')
            : link.removeAttribute('aria-current');
        });
      });
    }, {
      rootMargin: `-${(this._navbar?.offsetHeight ?? 72) + 20}px 0px -55% 0px`,
      threshold: 0,
    });

    this._sections.forEach(s => observer.observe(s));
  }
}

export default NavController;