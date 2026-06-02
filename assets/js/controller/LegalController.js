/**
 * LegalController.js
 * Controller untuk halaman Dokumen Legal (dokumenlegal.html)
 * Menangani: filter kategori, animasi reveal, dan accordion FAQ
 *
 * Mengikuti pola MVC yang sama dengan controller lain di project ini.
 */

export class LegalController {
  /**
   * @param {import('../view/DOMView.js').DOMView} view
   */
  constructor(view) {
    this.view = view;
    this._bindFilter();
    this._bindFAQ();
    this._updateFooterYear();
  }

  /* ─────────────────────────────────────────────
     FILTER KATEGORI
  ───────────────────────────────────────────── */
  _bindFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards      = document.querySelectorAll('#legalGrid .legal-card');
    const noResults  = document.getElementById('noResults');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active state
        filterBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        const cat = btn.dataset.cat;
        let visible = 0;

        cards.forEach(card => {
          const match = cat === 'semua' || card.dataset.cat === cat;
          if (match) {
            card.classList.remove('js-hidden');
            card.style.animationDelay = (visible * 60) + 'ms';
            visible++;
          } else {
            card.classList.add('js-hidden');
          }
        });

        if (noResults) {
          noResults.classList.toggle('hidden', visible > 0);
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     FAQ ACCORDION
  ───────────────────────────────────────────── */
  _bindFAQ() {
    const triggers = document.querySelectorAll('.faq-trigger');
    if (!triggers.length) return;

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item   = trigger.closest('.faq-item');
        const isOpen = item.classList.contains('is-open');

        // Tutup semua item
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('is-open');
          const t = i.querySelector('.faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });

        // Buka item yang diklik (toggle)
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ─────────────────────────────────────────────
     FOOTER YEAR
  ───────────────────────────────────────────── */
  _updateFooterYear() {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }
}