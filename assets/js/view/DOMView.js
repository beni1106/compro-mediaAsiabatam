export class DOMView {

  /* ── Navbar ─────────────────────────────────────────── */

  /**
   * Toggle scrolled state on navbar
   * @param {HTMLElement} navbar
   * @param {boolean} isScrolled
   */
  setNavbarScrolled(navbar, isScrolled) {
    navbar.classList.toggle('navbar--scrolled', isScrolled);
  }

  /* ── Mobile Menu ─────────────────────────────────────── */

  /**
   * Open or close mobile menu
   * @param {HTMLElement} menu
   * @param {HTMLElement} btn
   * @param {boolean} isOpen
   */
  setMobileMenuOpen(menu, btn, isOpen) {
    menu.classList.toggle('mobile-menu--open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');

    // Animate hamburger bars to X
    const bars = btn.querySelectorAll('.hamburger-bar');
    if (bars.length === 3) {
      if (isOpen) {
        bars[0].style.transform = 'rotate(45deg) translate(4px, 5px)';
        bars[1].style.opacity   = '0';
        bars[1].style.transform = 'translateX(-8px)';
        bars[2].style.transform = 'rotate(-45deg) translate(4px, -5px)';
        bars[2].style.width     = '24px';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity   = '';
        bars[1].style.transform = '';
        bars[2].style.transform = '';
        bars[2].style.width     = '';
      }
    }
  }

  /* ── Active nav link ─────────────────────────────────── */

  /**
   * Set active nav link based on current section
   * @param {NodeList} links
   * @param {string} activeHref — e.g. '#layanan'
   */
  setActiveNavLink(links, activeHref) {
    links.forEach(link => {
      const isActive = link.getAttribute('href') === activeHref;
      link.classList.toggle('nav-link--active', isActive);
    });
  }

  /* ── Language toggle ─────────────────────────────────── */

  /**
   * Update lang toggle button styles
   * @param {NodeList} btns
   * @param {string} activeLang — 'id' | 'en'
   */
  setActiveLang(btns, activeLang) {
    btns.forEach(btn => {
      const isActive = btn.dataset.lang === activeLang;
      btn.classList.toggle('lang-btn--active',   isActive);
      btn.classList.toggle('lang-btn--inactive', !isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /**
   * Update all [data-i18n] elements with translated text
   * @param {string} lang
   * @param {Object} translations — i18n[lang]
   */
  applyTranslations(lang, translations) {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[key] !== undefined) {
        el.textContent = translations[key];
      }
    });

    // Placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[key] !== undefined) {
        el.setAttribute('placeholder', translations[key]);
      }
    });

    // aria-label attribute
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      if (translations[key] !== undefined) {
        el.setAttribute('aria-label', translations[key]);
      }
    });

    // Update <html lang> attribute
    document.documentElement.setAttribute('lang', lang === 'id' ? 'id' : 'en');

    // Update <title>
    if (translations.meta_title) {
      document.title = translations.meta_title;
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations.meta_description) {
      metaDesc.setAttribute('content', translations.meta_description);
    }
  }

  /* ── Reveal animation ────────────────────────────────── */

  /**
   * Mark element as visible (triggers CSS transition)
   * @param {HTMLElement} el
   */
  revealElement(el) {
    el.classList.add('is-visible');
  }

  /* ── Tab / filter ────────────────────────────────────── */

  /**
   * Update active tab button
   * @param {NodeList} tabs
   * @param {string} activeValue
   */
  setActiveTab(tabs, activeValue) {
    tabs.forEach(tab => {
      const isActive = tab.dataset.tab === activeValue;
      tab.classList.toggle('tab-btn--active', isActive);
    });
  }

  /**
   * Show/hide portfolio items based on filter
   * @param {NodeList} items
   * @param {string} filter — 'all' | 'legal' | 'prop' | 'arch'
   */
  filterPortfolioItems(items, filter) {
    items.forEach(item => {
      const category = item.dataset.category;
      const shouldShow = filter === 'all' || category === filter;

      if (shouldShow) {
        item.classList.remove('hidden', 'opacity-0', 'scale-95');
        item.classList.add('opacity-100', 'scale-100');
      } else {
        item.classList.add('hidden');
        item.classList.remove('opacity-100', 'scale-100');
      }
    });
  }

  /* ── Sticky header height offset ─────────────────────── */

  /**
   * Set CSS variable for navbar height (used for scroll offset)
   * @param {HTMLElement} navbar
   */
  updateNavbarHeightVar(navbar) {
    const h = navbar.offsetHeight;
    document.documentElement.style.setProperty('--navbar-h', `${h}px`);
  }
}

export default new DOMView();