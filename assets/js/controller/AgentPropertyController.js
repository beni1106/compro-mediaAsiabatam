/**
 * AgentPropertyController.js — Controller Layer
 * Menangani semua logika halaman agent-property.html:
 *  - Data properti
 *  - Filter sidebar (transaksi, tipe, lokasi, kamar tidur)
 *  - Filter chip atas (semua / dijual / disewa)
 *  - Search input
 *  - Sort dropdown
 *  - Render grid + pagination
 *  - Active filter tags
 *  - Favorit (toggle)
 *
 * Dipanggil oleh main.js via dynamic import.
 * Semua logika navbar/reveal sudah ditangani NavController & RevealController.
 */

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROPERTIES = [
  { id:1,  nama:'Rumah 2 Lantai Batam Centre',    lokasi:'Batam Centre', tipe:'Rumah',     transaksi:'Jual', harga:750000000,  hargaText:'Rp. 750.000.000',       kt:3, km:2, lt:90,   lb:120, agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:2,  nama:'Ruko 3 Lantai Nagoya',            lokasi:'Nagoya',       tipe:'Ruko',      transaksi:'Sewa', harga:15000000,   hargaText:'Rp. 15.000.000/bln',    kt:0, km:1, lt:80,   lb:240, agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:3,  nama:'Kavling Industri Batu Ampar',     lokasi:'Batu Ampar',   tipe:'Kavling',   transaksi:'Jual', harga:0,          hargaText:'Hubungi Kami',           kt:0, km:0, lt:2000, lb:0,   agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:4,  nama:'Rumah Cluster Batu Aji',          lokasi:'Batu Aji',     tipe:'Rumah',     transaksi:'Jual', harga:450000000,  hargaText:'Rp. 450.000.000',       kt:3, km:2, lt:72,   lb:90,  agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:5,  nama:'Apartemen Furnished Batam Centre',lokasi:'Batam Centre', tipe:'Apartemen', transaksi:'Sewa', harga:5000000,    hargaText:'Rp. 5.000.000/bln',     kt:2, km:1, lt:0,    lb:45,  agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:6,  nama:'Ruko 2 Lantai Sekupang',          lokasi:'Sekupang',     tipe:'Ruko',      transaksi:'Jual', harga:1200000000, hargaText:'Rp. 1.200.000.000',    kt:0, km:2, lt:60,   lb:120, agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:7,  nama:'Villa Mewah Nongsa',              lokasi:'Nongsa',       tipe:'Rumah',     transaksi:'Jual', harga:5500000000, hargaText:'Rp. 5.500.000.000',    kt:5, km:4, lt:500,  lb:350, agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:8,  nama:'Lahan Komersial Nagoya',          lokasi:'Nagoya',       tipe:'Lahan',     transaksi:'Jual', harga:3000000000, hargaText:'Rp. 3.000.000.000',    kt:0, km:0, lt:400,  lb:0,   agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:9,  nama:'Rumah Minimalis Sekupang',        lokasi:'Sekupang',     tipe:'Rumah',     transaksi:'Jual', harga:380000000,  hargaText:'Rp. 380.000.000',       kt:2, km:1, lt:60,   lb:72,  agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:10, nama:'Apartemen Studio Batam Centre',   lokasi:'Batam Centre', tipe:'Apartemen', transaksi:'Sewa', harga:3500000,    hargaText:'Rp. 3.500.000/bln',     kt:1, km:1, lt:0,    lb:28,  agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:11, nama:'Kavling Residensial Batu Aji',    lokasi:'Batu Aji',     tipe:'Kavling',   transaksi:'Jual', harga:320000000,  hargaText:'Rp. 320.000.000',       kt:0, km:0, lt:120,  lb:0,   agent:'Tim Media Asia', agen_co:'Media Asia Property' },
  { id:12, nama:'Ruko Corner Batam Centre',        lokasi:'Batam Centre', tipe:'Ruko',      transaksi:'Jual', harga:2800000000, hargaText:'Rp. 2.800.000.000',    kt:0, km:2, lt:100,  lb:300, agent:'Tim Media Asia', agen_co:'Media Asia Property' },
];

// ─── Konstanta ────────────────────────────────────────────────────────────────

const PER_PAGE = 9;

const LOK_MAP = {
  'batam-centre': 'Batam Centre',
  'nagoya':       'Nagoya',
  'batu-aji':     'Batu Aji',
  'sekupang':     'Sekupang',
  'nongsa':       'Nongsa',
  'batu-ampar':   'Batu Ampar',
};

// ─── Template Card ────────────────────────────────────────────────────────────

const ICONS = {
  Rumah:     `<svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.12)" stroke-width="0.75"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  Ruko:      `<svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.12)" stroke-width="0.75"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  Apartemen: `<svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.12)" stroke-width="0.75"><path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>`,
  Lahan:     `<svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.12)" stroke-width="0.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
  Kavling:   `<svg width="52" height="52" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.12)" stroke-width="0.75"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
};

const GRADIENTS = {
  Rumah:     'linear-gradient(135deg,#0D1F3C,#1A3460)',
  Ruko:      'linear-gradient(135deg,#1A3460,#122952)',
  Apartemen: 'linear-gradient(135deg,#122952,#0D2B1D)',
  Lahan:     'linear-gradient(135deg,#0D2B1D,#1A4A30)',
  Kavling:   'linear-gradient(135deg,#1A2C1A,#0D2B1D)',
};

function buildCard(p) {
  const badgeClass = p.transaksi === 'Sewa' ? 'prop-card__badge--sewa' : '';
  const specs = [];
  if (p.kt > 0) specs.push(`<span class="prop-spec"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>${p.kt}</span>`);
  if (p.km > 0) specs.push(`<span class="prop-spec"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>${p.km}</span>`);
  if (p.lt > 0) specs.push(`<span class="prop-spec"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>LT: ${p.lt} m²</span>`);
  if (p.lb > 0) specs.push(`<span class="prop-spec"><svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>LB: ${p.lb} m²</span>`);

  return `
  <article class="prop-card" onclick="window.location='#kontak'">
    <div class="prop-card__img">
      <div class="prop-card__img-placeholder" style="background:${GRADIENTS[p.tipe] ?? GRADIENTS.Rumah}">
        ${ICONS[p.tipe] ?? ICONS.Rumah}
      </div>
      <span class="prop-card__badge ${badgeClass}">Di${p.transaksi === 'Jual' ? 'jual' : 'sewa'}</span>
      <button class="prop-card__fav" data-prop-id="${p.id}" aria-label="Simpan properti">
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>
    </div>
    <div class="prop-card__body">
      <div class="prop-card__meta">
        <span class="prop-card__type">${p.tipe} | ${p.transaksi}</span>
        <span class="prop-card__loc">
          <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.952-5.159 3.952-8.827a8.25 8.25 0 00-16.5 0c0 3.668 2.008 6.748 3.952 8.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742z" clip-rule="evenodd"/></svg>
          ${p.lokasi}
        </span>
      </div>
      <h3 class="prop-card__name">${p.nama}</h3>
      <div class="prop-card__price">${p.hargaText}</div>
      ${specs.length ? `<div class="prop-card__specs">${specs.join('')}</div>` : ''}
    </div>
    <div class="prop-card__agent">
      <div class="prop-card__avatar">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.6)" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      </div>
      <div class="prop-card__agent-info">
        <div class="prop-card__agent-name">${p.agent}</div>
        <div class="prop-card__agent-co">${p.agen_co}</div>
      </div>
      <button class="prop-card__more" onclick="event.stopPropagation()" aria-label="Opsi lainnya">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 5c-.828 0-1.5-.672-1.5-1.5S11.172 2 12 2s1.5.672 1.5 1.5S12.828 5 12 5zm0 7c-.828 0-1.5-.672-1.5-1.5S11.172 10 12 10s1.5.672 1.5 1.5S12.828 12 12 12zm0 7c-.828 0-1.5-.672-1.5-1.5S11.172 17 12 17s1.5.672 1.5 1.5S12.828 19 12 19z"/></svg>
      </button>
    </div>
  </article>`;
}

// ─── Controller ───────────────────────────────────────────────────────────────

export class AgentPropertyController {
  constructor() {
    this._filters = { transaksi: 'semua', tipe: 'semua', lokasi: 'semua', kt: 'semua' };
    this._topFilter  = 'semua';
    this._searchQuery = '';
    this._sortBy     = 'terbaru';
    this._page       = 1;
    this._filtered   = [...PROPERTIES];
  }

  init() {
    this._bindSearch();
    this._bindTopChips();
    this._bindSidebarChips();
    this._bindSort();
    this._bindReset();
    this._bindFavorites();
    this._applyAll();
  }

  // ── Binding ────────────────────────────────────────────────────────────────

  _bindSearch() {
    const input = document.getElementById('searchInput');
    const btn   = document.querySelector('.search-btn');
    if (!input) return;

    const run = () => { this._searchQuery = input.value.trim(); this._applyAll(); };
    input.addEventListener('keydown', e => { if (e.key === 'Enter') run(); });
    btn?.addEventListener('click', run);
  }

  _bindTopChips() {
    document.querySelectorAll('[id^="chip-"]').forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.id.replace('chip-', '');
        this._topFilter = val;
        document.querySelectorAll('[id^="chip-"]').forEach(c => c.classList.remove('is-active-gold'));
        chip.classList.add('is-active-gold');
        this._applyAll();
      });
    });
  }

  _bindSidebarChips() {
    document.querySelectorAll('.sb-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const filter = chip.dataset.filter;
        document.querySelectorAll(`[data-filter="${filter}"]`).forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        this._filters[filter] = chip.dataset.val;
        this._applyAll();
      });
    });
  }

  _bindSort() {
    document.getElementById('sortSelect')?.addEventListener('change', e => {
      this._sortBy = e.target.value;
      this._applyAll();
    });
  }

  _bindReset() {
    document.querySelector('.sidebar-card__reset')?.addEventListener('click', () => {
      this._filters    = { transaksi: 'semua', tipe: 'semua', lokasi: 'semua', kt: 'semua' };
      this._topFilter  = 'semua';
      this._searchQuery = '';

      const input = document.getElementById('searchInput');
      if (input) input.value = '';

      document.querySelectorAll('.sb-chip').forEach(c => {
        c.classList.remove('is-active');
        if (c.dataset.val === 'semua') c.classList.add('is-active');
      });

      document.querySelectorAll('[id^="chip-"]').forEach(c => c.classList.remove('is-active-gold'));
      document.getElementById('chip-semua')?.classList.add('is-active-gold');

      this._applyAll();
    });
  }

  _bindFavorites() {
    // Event delegation — works even after grid re-render
    document.getElementById('propGrid')?.addEventListener('click', e => {
      const btn = e.target.closest('.prop-card__fav');
      if (!btn) return;
      e.stopPropagation();

      const isFav = btn.classList.toggle('is-fav');
      const svg   = btn.querySelector('svg');
      svg.setAttribute('fill',   isFav ? '#e05252' : 'none');
      svg.setAttribute('stroke', isFav ? '#e05252' : 'currentColor');
    });
  }

  // ── Core logic ─────────────────────────────────────────────────────────────

  _applyAll() {
    let data = [...PROPERTIES];

    // Transaksi — top chip overrides sidebar chip
    const t = this._topFilter !== 'semua' ? this._topFilter : this._filters.transaksi;
    if (t !== 'semua') data = data.filter(p => p.transaksi.toLowerCase() === t);

    // Tipe
    if (this._filters.tipe !== 'semua')
      data = data.filter(p => p.tipe.toLowerCase() === this._filters.tipe);

    // Lokasi
    if (this._filters.lokasi !== 'semua') {
      const mapped = LOK_MAP[this._filters.lokasi] ?? this._filters.lokasi;
      data = data.filter(p => p.lokasi === mapped);
    }

    // Kamar tidur
    if (this._filters.kt !== 'semua')
      data = data.filter(p => p.kt >= parseInt(this._filters.kt));

    // Search
    if (this._searchQuery) {
      const q = this._searchQuery.toLowerCase();
      data = data.filter(p =>
        p.nama.toLowerCase().includes(q) ||
        p.lokasi.toLowerCase().includes(q) ||
        p.tipe.toLowerCase().includes(q)
      );
    }

    // Sort
    if (this._sortBy === 'termahal')     data.sort((a, b) => b.harga - a.harga);
    else if (this._sortBy === 'termurah') data.sort((a, b) => a.harga - b.harga);
    else if (this._sortBy === 'terluas')  data.sort((a, b) => b.lt   - a.lt);

    this._filtered = data;
    this._page     = 1;
    this._render();
    this._renderActiveTags();
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  _render() {
    const grid  = document.getElementById('propGrid');
    const count = document.getElementById('resultsCount');
    if (!grid) return;

    const start = (this._page - 1) * PER_PAGE;
    const page  = this._filtered.slice(start, start + PER_PAGE);

    grid.innerHTML = page.length
      ? page.map(buildCard).join('')
      : `<div class="no-results">
           <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
             <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>
           <p>Tidak ada properti yang sesuai filter.<br>Coba ubah kriteria pencarian Anda.</p>
         </div>`;

    if (count) count.innerHTML = `<strong>${this._filtered.length.toLocaleString('id-ID')}</strong> Hasil Pencarian`;

    this._renderPagination();
  }

  _renderPagination() {
    const el    = document.getElementById('pagination');
    if (!el) return;

    const total = Math.ceil(this._filtered.length / PER_PAGE);
    if (total <= 1) { el.innerHTML = ''; return; }

    const prev = `<button class="page-btn" ${this._page === 1 ? 'disabled' : ''} data-page="${this._page - 1}">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
    </button>`;

    const next = `<button class="page-btn" ${this._page === total ? 'disabled' : ''} data-page="${this._page + 1}">
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
    </button>`;

    let pages = '';
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= this._page - 2 && i <= this._page + 2)) {
        pages += `<button class="page-btn ${i === this._page ? 'is-active' : ''}" data-page="${i}">${i}</button>`;
      } else if (i === this._page - 3 || i === this._page + 3) {
        pages += `<button class="page-btn" style="pointer-events:none">…</button>`;
      }
    }

    el.innerHTML = prev + pages + next;

    // Bind page buttons
    el.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        this._page = parseInt(btn.dataset.page);
        this._render();
        document.getElementById('cari-properti')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  _renderActiveTags() {
    const wrap = document.getElementById('activeTags');
    if (!wrap) return;

    const tags = [];

    if (this._topFilter !== 'semua')
      tags.push({ label: this._topFilter === 'jual' ? 'Dijual' : 'Disewa', key: 'top' });
    else if (this._filters.transaksi !== 'semua')
      tags.push({ label: this._filters.transaksi === 'jual' ? 'Dijual' : 'Disewa', key: 'transaksi' });

    if (this._filters.tipe !== 'semua')
      tags.push({ label: this._filters.tipe, key: 'tipe' });

    if (this._filters.lokasi !== 'semua')
      tags.push({ label: this._filters.lokasi.replace(/-/g, ' '), key: 'lokasi' });

    if (this._filters.kt !== 'semua')
      tags.push({ label: `${this._filters.kt}+ Kamar Tidur`, key: 'kt' });

    if (this._searchQuery)
      tags.push({ label: `"${this._searchQuery}"`, key: 'search' });

    wrap.innerHTML = tags.map(t =>
      `<span class="active-tag">${t.label}
         <button data-remove-tag="${t.key}" aria-label="Hapus filter">
           <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
           </svg>
         </button>
       </span>`
    ).join('');

    // Bind remove buttons
    wrap.querySelectorAll('[data-remove-tag]').forEach(btn => {
      btn.addEventListener('click', () => this._removeTag(btn.dataset.removeTag));
    });
  }

  _removeTag(key) {
    if (key === 'search') {
      this._searchQuery = '';
      const input = document.getElementById('searchInput');
      if (input) input.value = '';
    } else if (key === 'top') {
      this._topFilter = 'semua';
      document.querySelectorAll('[id^="chip-"]').forEach(c => c.classList.remove('is-active-gold'));
      document.getElementById('chip-semua')?.classList.add('is-active-gold');
    } else {
      this._filters[key] = 'semua';
      document.querySelectorAll(`[data-filter="${key}"]`).forEach(c => c.classList.remove('is-active'));
      document.querySelector(`[data-filter="${key}"][data-val="semua"]`)?.classList.add('is-active');
    }
    this._applyAll();
  }
}

export function initAgentProperty() {
  const ctrl = new AgentPropertyController();
  ctrl.init();
}

export default initAgentProperty;