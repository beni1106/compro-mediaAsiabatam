/**
 * PropertyModal.js — Modal Detail Properti
 * Menampilkan detail lengkap properti ketika card diklik:
 *  - Gallery placeholder (siap diganti foto nyata)
 *  - Harga & badge transaksi
 *  - Spesifikasi lengkap (KT, KM, LT, LB)
 *  - Deskripsi
 *  - Peta lokasi (Google Maps embed)
 *  - Tombol WhatsApp & Telepon
 *
 * Cara pakai:
 *   import { PropertyModal } from './PropertyModal.js';
 *   const modal = new PropertyModal();
 *   modal.open(propertyObject);
 */

// ─── Deskripsi otomatis per tipe ──────────────────────────────────────────────

const DESKRIPSI = {
  Rumah:     'Hunian yang nyaman dengan desain modern dan lokasi strategis. Cocok untuk keluarga yang menginginkan tempat tinggal berkualitas dengan akses mudah ke fasilitas umum, pusat perbelanjaan, dan sekolah terkemuka di sekitar area.',
  Ruko:      'Properti komersial serbaguna yang ideal untuk usaha retail, kantor, atau bisnis lainnya. Terletak di kawasan bisnis ramai dengan visibilitas tinggi dan aksesibilitas yang sangat baik untuk pelanggan dan mitra bisnis.',
  Apartemen: 'Unit apartemen modern dengan fasilitas lengkap dan pemandangan kota yang menawan. Dilengkapi dengan keamanan 24 jam, kolam renang, dan area parkir yang memadai untuk kenyamanan penghuni.',
  Lahan:     'Lahan strategis dengan dokumen lengkap dan siap bangun. Potensi investasi tinggi di kawasan berkembang pesat dengan infrastruktur yang terus ditingkatkan oleh pemerintah daerah setempat.',
  Kavling:   'Kavling siap bangun dengan akses jalan lebar dan utilitas lengkap (listrik, air). Lingkungan tertata rapi di perumahan terencana dengan sistem keamanan terpadu dan fasilitas umum memadai.',
};

// ─── Peta lokasi Batam (koordinat per area) ───────────────────────────────────

const LOK_MAPS = {
  'Batam Centre': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d104.0293!3d1.1285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98f51e4e09ddb%3A0x4d6d6c2b4c3a3a3a!2sBatam+Centre%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000000',
  'Nagoya':       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7964.123456789!2d104.0070!3d1.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98fc4b0000001%3A0x1a2b3c4d5e6f7a8b!2sNagoya%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000001',
  'Batu Aji':     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d103.9653!3d1.0803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98e000000001%3A0xabcdef1234567890!2sBatu+Aji%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000002',
  'Sekupang':     'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d103.9320!3d1.1023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98d000000001%3A0xfedcba9876543210!2sSekupang%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000003',
  'Nongsa':       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d104.1123!3d1.1823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d990000000001%3A0x1234567890abcdef!2sNongsa%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000004',
  'Batu Ampar':   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.123456789!2d104.0490!3d1.1678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98f000000001%3A0xabcdef0987654321!2sBatu+Ampar%2C+Batam!5e0!3m2!1sid!2sid!4v1000000000005',
};

// ─── Gradients & Icons (sinkron dengan AgentPropertyController) ───────────────

const GRADIENTS = {
  Rumah:     'linear-gradient(135deg,#0D1F3C,#1A3460)',
  Ruko:      'linear-gradient(135deg,#1A3460,#122952)',
  Apartemen: 'linear-gradient(135deg,#122952,#0D2B1D)',
  Lahan:     'linear-gradient(135deg,#0D2B1D,#1A4A30)',
  Kavling:   'linear-gradient(135deg,#1A2C1A,#0D2B1D)',
};

const ICONS_LG = {
  Rumah:     `<svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.18)" stroke-width="0.6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  Ruko:      `<svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.18)" stroke-width="0.6"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
  Apartemen: `<svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.18)" stroke-width="0.6"><path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>`,
  Lahan:     `<svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.18)" stroke-width="0.6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
  Kavling:   `<svg width="80" height="80" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.18)" stroke-width="0.6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>`,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtWA(nama, lokasi) {
  const msg = encodeURIComponent(
    `Halo Media Asia Property, saya tertarik dengan properti:\n*${nama}* di ${lokasi}\n\nBoleh saya mendapatkan info lebih lanjut?`
  );
  return `https://wa.me/628538888159?text=${msg}`;
}

// ─── Class ────────────────────────────────────────────────────────────────────

export class PropertyModal {
  constructor() {
    this._overlay = null;
    this._panel   = null;
    this._isOpen  = false;
    this._onKey   = this._handleKey.bind(this);
    this._build();
  }

  // ── Build DOM (sekali saja) ────────────────────────────────────────────────

  _build() {
    // Overlay
    this._overlay = document.createElement('div');
    this._overlay.className = 'pm-overlay';
    this._overlay.setAttribute('role', 'dialog');
    this._overlay.setAttribute('aria-modal', 'true');
    this._overlay.setAttribute('aria-label', 'Detail Properti');
    this._overlay.setAttribute('aria-hidden', 'true');

    // Panel
    this._panel = document.createElement('div');
    this._panel.className = 'pm-panel';

    this._overlay.appendChild(this._panel);
    document.body.appendChild(this._overlay);

    // Tutup klik overlay
    this._overlay.addEventListener('click', e => {
      if (e.target === this._overlay) this.close();
    });
  }

  // ── Render konten ─────────────────────────────────────────────────────────

  _render(p) {
    const gradient   = GRADIENTS[p.tipe] ?? GRADIENTS.Rumah;
    const iconLg     = ICONS_LG[p.tipe]  ?? ICONS_LG.Rumah;
    const deskripsi  = p.deskripsi ?? DESKRIPSI[p.tipe] ?? '';
    const mapSrc     = LOK_MAPS[p.lokasi] ?? LOK_MAPS['Batam Centre'];
    const isSewa     = p.transaksi === 'Sewa';
    const badgeCls   = isSewa ? 'pm-badge--sewa' : 'pm-badge--jual';
    const badgeTxt   = isSewa ? 'Disewa' : 'Dijual';
    const waLink     = fmtWA(p.nama, p.lokasi);

    // Spesifikasi
    const specs = [
      p.kt > 0 ? { icon: 'bed',   label: 'Kamar Tidur',  val: `${p.kt} KT` }   : null,
      p.km > 0 ? { icon: 'bath',  label: 'Kamar Mandi',  val: `${p.km} KM` }   : null,
      p.lt > 0 ? { icon: 'land',  label: 'Luas Tanah',   val: `${p.lt} m²` }   : null,
      p.lb > 0 ? { icon: 'build', label: 'Luas Bangunan',val: `${p.lb} m²` }   : null,
    ].filter(Boolean);

    const specIcons = {
      bed:   `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
      bath:  `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
      land:  `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>`,
      build: `<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"/></svg>`,
    };

    const specsHTML = specs.length
      ? `<div class="pm-specs">
          ${specs.map(s => `
            <div class="pm-spec-item">
              <div class="pm-spec-icon">${specIcons[s.icon]}</div>
              <div class="pm-spec-body">
                <div class="pm-spec-val">${s.val}</div>
                <div class="pm-spec-lbl">${s.label}</div>
              </div>
            </div>`).join('')}
         </div>`
      : '';

    this._panel.innerHTML = `
      <!-- Tombol tutup -->
      <button class="pm-close" aria-label="Tutup detail properti">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Gallery / placeholder -->
      <div class="pm-gallery" style="background:${gradient}">
        <div class="pm-gallery__icon">${iconLg}</div>
        <div class="pm-gallery__shimmer" aria-hidden="true"></div>
        <div class="pm-gallery__overlay" aria-hidden="true"></div>
        <span class="pm-badge ${badgeCls}">${badgeTxt}</span>
        <!-- Slot foto nyata — uncomment & isi src saat foto tersedia:
        <img src="assets/img/properti/${p.id}.jpg" alt="${p.nama}" class="pm-gallery__img" loading="lazy" />
        -->
      </div>

      <!-- Konten scroll -->
      <div class="pm-body">

        <!-- Header harga -->
        <div class="pm-header">
          <div>
            <p class="pm-type-label">${p.tipe} · ${p.lokasi}</p>
            <h2 class="pm-title">${p.nama}</h2>
          </div>
          <div class="pm-price">${p.hargaText}</div>
        </div>

        <!-- Spesifikasi -->
        ${specsHTML}

        <!-- Divider -->
        <div class="pm-divider" aria-hidden="true"></div>

        <!-- Deskripsi -->
        <div class="pm-section">
          <h3 class="pm-section-title">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Deskripsi Properti
          </h3>
          <p class="pm-desc">${deskripsi}</p>
        </div>

        <!-- Divider -->
        <div class="pm-divider" aria-hidden="true"></div>

        <!-- Peta lokasi -->
        <div class="pm-section">
          <h3 class="pm-section-title">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Lokasi
          </h3>
          <div class="pm-map-wrap">
            <iframe
              src="${mapSrc}"
              width="100%"
              height="100%"
              style="border:0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Peta lokasi ${p.nama}"
            ></iframe>
          </div>
          <p class="pm-map-label">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.952-5.159 3.952-8.827a8.25 8.25 0 00-16.5 0c0 3.668 2.008 6.748 3.952 8.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742z" clip-rule="evenodd"/></svg>
            ${p.lokasi}, Batam, Kepulauan Riau
          </p>
        </div>

        <!-- Divider -->
        <div class="pm-divider" aria-hidden="true"></div>

        <!-- Agent info -->
        <div class="pm-agent-row">
          <div class="pm-agent-avatar" aria-hidden="true">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.7)" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          <div>
            <div class="pm-agent-name">${p.agent}</div>
            <div class="pm-agent-co">${p.agen_co}</div>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="pm-cta">
          <a
            href="${waLink}"
            target="_blank"
            rel="noopener"
            class="pm-btn pm-btn--wa"
            aria-label="Hubungi via WhatsApp untuk properti ${p.nama}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp
          </a>
          <a
            href="tel:+628538888159"
            class="pm-btn pm-btn--phone"
            aria-label="Telepon agent"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            0853-8888-8159
          </a>
        </div>

      </div><!-- /pm-body -->
    `;

    // Bind tombol tutup setelah render
    this._panel.querySelector('.pm-close').addEventListener('click', () => this.close());
  }

  // ── Open / Close ──────────────────────────────────────────────────────────

  open(propertyData) {
    this._render(propertyData);
    this._overlay.setAttribute('aria-hidden', 'false');
    this._overlay.classList.add('pm-overlay--open');
    document.body.classList.add('pm-body-lock');
    document.addEventListener('keydown', this._onKey);
    this._isOpen = true;

    // Focus ke panel untuk aksesibilitas
    requestAnimationFrame(() => {
      this._panel.querySelector('.pm-close')?.focus();
    });
  }

  close() {
    this._overlay.classList.remove('pm-overlay--open');
    this._overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pm-body-lock');
    document.removeEventListener('keydown', this._onKey);
    this._isOpen = false;
  }

  _handleKey(e) {
    if (e.key === 'Escape') this.close();
  }

  get isOpen() { return this._isOpen; }
}

export default PropertyModal;