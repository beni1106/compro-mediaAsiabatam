/**
 * PropertyDetailController.js
 * Menangani halaman property-detail.html:
 *  - Baca ?id= dari URL
 *  - Temukan data properti
 *  - Render semua section: gallery (carousel), harga, spesifikasi, deskripsi, peta, CTA
 *  - Tombol kembali ke agent-property.html
 */

// ─── Data (sinkron dengan AgentPropertyController) ────────────────────────────

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

// ─── Deskripsi otomatis per tipe ──────────────────────────────────────────────

const DESKRIPSI = {
  Rumah:     'Hunian yang nyaman dengan desain modern dan lokasi strategis. Cocok untuk keluarga yang menginginkan tempat tinggal berkualitas dengan akses mudah ke fasilitas umum, pusat perbelanjaan, dan sekolah terkemuka di sekitar area.',
  Ruko:      'Properti komersial serbaguna yang ideal untuk usaha retail, kantor, atau bisnis lainnya. Terletak di kawasan bisnis ramai dengan visibilitas tinggi dan aksesibilitas yang sangat baik untuk pelanggan dan mitra bisnis.',
  Apartemen: 'Unit apartemen modern dengan fasilitas lengkap dan pemandangan kota yang menawan. Dilengkapi dengan keamanan 24 jam, kolam renang, dan area parkir yang memadai untuk kenyamanan penghuni.',
  Lahan:     'Lahan strategis dengan dokumen lengkap dan siap bangun. Potensi investasi tinggi di kawasan berkembang pesat dengan infrastruktur yang terus ditingkatkan oleh pemerintah daerah setempat.',
  Kavling:   'Kavling siap bangun dengan akses jalan lebar dan utilitas lengkap (listrik, air). Lingkungan tertata rapi di perumahan terencana dengan sistem keamanan terpadu dan fasilitas umum memadai.',
};

// ─── Peta lokasi Batam ────────────────────────────────────────────────────────

const LOK_MAPS = {
  'Batam Centre': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d104.0293!3d1.1285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98f51e4e09ddb%3A0x4d6d6c2b4c3a3a3a!2sBatam+Centre%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000000',
  'Nagoya':       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7964.123456789!2d104.0070!3d1.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98fc4b0000001%3A0x1a2b3c4d5e6f7a8b!2sNagoya%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000001',
  'Batu Aji':     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d103.9653!3d1.0803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98e000000001%3A0xabcdef1234567890!2sBatu+Aji%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000002',
  'Sekupang':     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d103.9320!3d1.1023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98d000000001%3A0xfedcba9876543210!2sSekupang%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000003',
  'Nongsa':       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d104.1123!3d1.1823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d990000000001%3A0x1234567890abcdef!2sNongsa%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000004',
  'Batu Ampar':   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d104.0490!3d1.1678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98f000000001%3A0xabcdef0987654321!2sBatu+Ampar%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000005',
};

// ─── Gradients & Icons ────────────────────────────────────────────────────────

const GRADIENTS = {
  Rumah:     ['linear-gradient(135deg,#0D1F3C,#1A3460)', 'linear-gradient(135deg,#1A3460,#0D2B4A)', 'linear-gradient(135deg,#0D2B4A,#0D1F3C)'],
  Ruko:      ['linear-gradient(135deg,#1A3460,#122952)', 'linear-gradient(135deg,#122952,#1A3460)', 'linear-gradient(135deg,#0D1F3C,#1A3460)'],
  Apartemen: ['linear-gradient(135deg,#122952,#0D2B1D)', 'linear-gradient(135deg,#0D2B1D,#122952)', 'linear-gradient(135deg,#1A3460,#0D2B1D)'],
  Lahan:     ['linear-gradient(135deg,#0D2B1D,#1A4A30)', 'linear-gradient(135deg,#1A4A30,#0D2B1D)', 'linear-gradient(135deg,#0D3020,#1A4A30)'],
  Kavling:   ['linear-gradient(135deg,#1A2C1A,#0D2B1D)', 'linear-gradient(135deg,#0D2B1D,#1A2C1A)', 'linear-gradient(135deg,#1A3020,#0D2B1D)'],
};

const SLIDE_LABELS = ['Tampak Depan', 'Ruang Dalam', 'Area Sekitar'];

const ICONS_LG = {
  Rumah:     `<svg width="100" height="100" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  Ruko:      `<svg width="100" height="100" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  Apartemen: `<svg width="100" height="100" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>`,
  Lahan:     `<svg width="100" height="100" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
  Kavling:   `<svg width="100" height="100" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
};

// ─── Helper ───────────────────────────────────────────────────────────────────

function fmtWA(nama, lokasi) {
  const msg = encodeURIComponent(
    `Halo Media Asia Property, saya tertarik dengan properti:\n*${nama}* di ${lokasi}\n\nBoleh saya mendapatkan info lebih lanjut?`
  );
  return `https://wa.me/628538888159?text=${msg}`;
}

// ─── Controller ───────────────────────────────────────────────────────────────

export class PropertyDetailController {
  constructor() {
    this._prop        = null;
    this._slideIndex  = 0;
    this._slides      = [];
    this._autoTimer   = null;
  }

  init() {
    const id   = parseInt(new URLSearchParams(window.location.search).get('id'));
    this._prop = PROPERTIES.find(p => p.id === id);

    if (!this._prop) {
      this._renderNotFound();
      return;
    }

    this._renderAll();
    this._updateMeta();
  }

  // ── Not found ─────────────────────────────────────────────────────────────

  _renderNotFound() {
    document.getElementById('pd-content')?.remove();
    const nf = document.getElementById('pd-not-found');
    if (nf) nf.style.display = 'flex';
  }

  // ── Meta ──────────────────────────────────────────────────────────────────

  _updateMeta() {
    const p = this._prop;
    document.title = `${p.nama} — Media Asia Property`;
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', `${p.tipe} di${p.transaksi === 'Sewa' ? 'sewa' : 'jual'} di ${p.lokasi}, Batam. ${p.hargaText}. Hubungi Media Asia Property.`);
  }

  // ── Render semua section ──────────────────────────────────────────────────

  _renderAll() {
    const p = this._prop;

    // Breadcrumb
    const bc = document.getElementById('pd-breadcrumb-name');
    if (bc) bc.textContent = p.nama;

    // Gallery carousel
    this._renderCarousel(p);

    // Header info
    this._setText('pd-tipe-lokasi', `${p.tipe} · ${p.lokasi}, Batam`);
    this._setText('pd-nama',        p.nama);
    this._setText('pd-harga',       p.hargaText);

    // Sidebar harga
    this._setText('pd-harga-sidebar', p.hargaText);

    // Spesifikasi
    this._renderSpecs(p);

    // Deskripsi
    this._setText('pd-deskripsi', p.deskripsi ?? DESKRIPSI[p.tipe] ?? '');

    // Peta
    const iframe = document.getElementById('pd-map-iframe');
    if (iframe) iframe.src = LOK_MAPS[p.lokasi] ?? LOK_MAPS['Batam Centre'];
    this._setText('pd-map-label', `${p.lokasi}, Batam, Kepulauan Riau`);

    // Agent
    this._setText('pd-agent-name', p.agent);
    this._setText('pd-agent-co',   p.agen_co);

    // CTA links
    const waBtn = document.getElementById('pd-btn-wa');
    if (waBtn) waBtn.href = fmtWA(p.nama, p.lokasi);
  }

  // ── Carousel ──────────────────────────────────────────────────────────────

  _renderCarousel(p) {
    const gallery = document.getElementById('pd-gallery');
    if (!gallery) return;

    const gradients = GRADIENTS[p.tipe] ?? GRADIENTS.Rumah;
    const icon      = ICONS_LG[p.tipe]   ?? ICONS_LG.Rumah;
    const badge     = `<span class="pd-badge ${p.transaksi === 'Sewa' ? 'pd-badge--sewa' : 'pd-badge--jual'}">Di${p.transaksi === 'Jual' ? 'jual' : 'sewa'}</span>`;

    // Build slides HTML
    // Jika ada foto nyata, ganti div.pd-slide-placeholder dengan <img>
    const slidesHTML = gradients.map((grad, i) => `
      <div class="pd-slide" data-index="${i}" aria-hidden="${i !== 0}">
        <div class="pd-slide-placeholder" style="background:${grad}">
          ${icon}
        </div>
        <div class="pd-gallery__shimmer" aria-hidden="true"></div>
        <div class="pd-gallery__overlay" aria-hidden="true"></div>
        <span class="pd-slide-label">${SLIDE_LABELS[i] ?? `Foto ${i + 1}`}</span>
      </div>
    `).join('');

    // Dots HTML
    const dotsHTML = gradients.map((_, i) =>
      `<button class="pd-dot ${i === 0 ? 'pd-dot--active' : ''}" data-dot="${i}" aria-label="Foto ${i + 1}"></button>`
    ).join('');

    gallery.innerHTML = `
      ${badge}

      <!-- Slides -->
      <div class="pd-carousel-track" id="pd-track">
        ${slidesHTML}
      </div>

      <!-- Counter -->
      <div class="pd-carousel-counter" aria-live="polite">
        <span id="pd-slide-cur">1</span> / <span id="pd-slide-total">${gradients.length}</span>
      </div>

      <!-- Prev / Next -->
      <button class="pd-carousel-btn pd-carousel-btn--prev" id="pd-prev" aria-label="Foto sebelumnya">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
      <button class="pd-carousel-btn pd-carousel-btn--next" id="pd-next" aria-label="Foto berikutnya">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Dots -->
      <div class="pd-dots" role="tablist" aria-label="Navigasi foto">
        ${dotsHTML}
      </div>
    `;

    this._slides     = Array.from(gallery.querySelectorAll('.pd-slide'));
    this._slideIndex = 0;

    // Bind controls
    document.getElementById('pd-prev')?.addEventListener('click', () => this._prevSlide());
    document.getElementById('pd-next')?.addEventListener('click', () => this._nextSlide());

    gallery.querySelectorAll('.pd-dot').forEach(dot => {
      dot.addEventListener('click', () => this._goToSlide(parseInt(dot.dataset.dot)));
    });

    // Swipe support
    this._bindSwipe(gallery);

    // Auto-advance setiap 5 detik
    this._startAuto();
  }

  _goToSlide(index) {
    const total = this._slides.length;
    this._slideIndex = (index + total) % total;
    this._updateCarousel();
    this._restartAuto();
  }

  _prevSlide() { this._goToSlide(this._slideIndex - 1); }
  _nextSlide() { this._goToSlide(this._slideIndex + 1); }

  _updateCarousel() {
    const idx = this._slideIndex;

    this._slides.forEach((slide, i) => {
      slide.setAttribute('aria-hidden', i !== idx ? 'true' : 'false');
      slide.classList.toggle('pd-slide--active', i === idx);
    });

    // Counter
    const cur = document.getElementById('pd-slide-cur');
    if (cur) cur.textContent = idx + 1;

    // Dots
    document.querySelectorAll('.pd-dot').forEach((dot, i) => {
      dot.classList.toggle('pd-dot--active', i === idx);
    });
  }

  _startAuto() {
    this._autoTimer = setInterval(() => this._nextSlide(), 5000);
  }

  _restartAuto() {
    clearInterval(this._autoTimer);
    this._startAuto();
  }

  _bindSwipe(el) {
    let startX = 0;
    el.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener('touchend',   e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) diff > 0 ? this._nextSlide() : this._prevSlide();
    });
  }

  // ── Specs ─────────────────────────────────────────────────────────────────

  _renderSpecs(p) {
    const wrap = document.getElementById('pd-specs');
    if (!wrap) return;

    const items = [
      p.kt > 0 ? { icon: 'bed',   label: 'Kamar Tidur',   val: `${p.kt} KT`    } : null,
      p.km > 0 ? { icon: 'bath',  label: 'Kamar Mandi',   val: `${p.km} KM`    } : null,
      p.lt > 0 ? { icon: 'area',  label: 'Luas Tanah',    val: `${p.lt} m²`    } : null,
      p.lb > 0 ? { icon: 'area',  label: 'Luas Bangunan', val: `${p.lb} m²`    } : null,
    ].filter(Boolean);

    if (!items.length) { wrap.closest('.pd-specs-section')?.remove(); return; }

    const icons = {
      bed:  `<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
      bath: `<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
      area: `<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>`,
    };

    wrap.innerHTML = items.map(s => `
      <div class="pd-spec-item">
        <div class="pd-spec-icon">${icons[s.icon]}</div>
        <div>
          <div class="pd-spec-val">${s.val}</div>
          <div class="pd-spec-lbl">${s.label}</div>
        </div>
      </div>`).join('');
  }

  _setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }
}

export function initPropertyDetail() {
  const ctrl = new PropertyDetailController();
  ctrl.init();
}

export default initPropertyDetail;