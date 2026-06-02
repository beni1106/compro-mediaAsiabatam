/**
 * ArsitekturController.js — Controller Layer
 * Menangani filter tab layanan di halaman arsitektur-mekanikal.html.
 *
 * Halaman ini memiliki tombol tab dengan data-filter (all / arsitektur / me)
 * yang menyembunyikan/menampilkan kartu layanan berdasarkan data-category.
 *
 * Navbar, reveal, dan footer year sudah ditangani oleh main.js.
 */

export class ArsitekturController {
  constructor() {
    this._tabs    = document.querySelectorAll('.tab-btn[data-filter]');
    this._cards   = document.querySelectorAll('#services-grid .svc-card');
    this._current = 'all';
  }

  init() {
    if (!this._tabs.length) return;

    this._tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.filter === this._current) return;

        // Update active state
        this._tabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this._current = btn.dataset.filter;
        this._filterCards(this._current);
      });
    });
  }

  _filterCards(filter) {
    this._cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
  }
}

export function initArsitektur() {
  const ctrl = new ArsitekturController();
  ctrl.init();
}

export default initArsitektur;