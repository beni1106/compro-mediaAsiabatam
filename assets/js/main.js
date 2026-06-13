import NavController    from './controller/NavController.js';
import LangController   from './controller/LangController.js';
import RevealController from './controller/RevealController.js';
import { clientGridInit } from './controller/ClientController.js';

document.addEventListener('DOMContentLoaded', async () => {

  // 1. Language — harus pertama agar i18n text sudah terpopulasi
  const lang = new LangController();
  lang.init();

  // 2. Navigation
  const nav = new NavController();
  nav.init();

  // 3. Scroll reveal animations
  const reveal = new RevealController();
  reveal.init();

  // 4. Client grid show more/less (halaman about / index)
  clientGridInit();

  // 5. Footer year
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 6. Controller spesifik halaman
  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'about.html') {
    const { initAbout } = await import('./controller/AboutController.js');
    initAbout();
  }

  if (page === 'contact.html') {
    const { initContact } = await import('./controller/ContactController.js');
    initContact();
  }

  if (page === 'agent-property.html') {
    const { initAgentProperty } = await import('./controller/AgentPropertyController.js');
    initAgentProperty();
  }

  if (page === 'arsitektur-mekanikal.html') {
    const { initArsitektur } = await import('./controller/ArsitekturController.js');
    initArsitektur();
  }

  if (page === 'dokumenlegal.html') {
    const { LegalController } = await import('./controller/LegalController.js');
    new LegalController(null);
  }

  // ← Halaman detail properti
  if (page === 'property-detail.html') {
    const { initPropertyDetail } = await import('./controller/PropertyDetailController.js');
    initPropertyDetail();

    // Sync WA FAB dengan properti yang sedang dilihat
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) {
      const fab = document.getElementById('pd-wa-fab');
      if (fab) {
        const msg = encodeURIComponent(`Halo Media Asia Property, saya ingin info properti dengan ID #${id}.`);
        fab.href = `https://wa.me/628538888159?text=${msg}`;
      }
    }

    // Sync WA button mobile bar
    const waMobile = document.getElementById('pd-btn-wa-mobile');
    if (waMobile) {
      const waDesktop = document.getElementById('pd-btn-wa');
      if (waDesktop) {
        // Tunggu controller selesai render (microtask)
        setTimeout(() => {
          waMobile.href = waDesktop.href;
        }, 0);
      }
    }
  }

});