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
  //    Menggunakan dynamic import — halaman lain tidak menanggung cost-nya.
  const page = window.location.pathname.split('/').pop() || 'index.html';

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
    // LegalController memanggil init sendiri di constructor
    new LegalController(null);
  }

});