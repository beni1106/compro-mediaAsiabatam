/**
 * main.js — Entry Point (Bootstrap)
 * Initialises all controllers after DOM is ready.
 * Import order matters: Lang first (sets text), then Nav, Reveal, Portfolio.
 */

import NavController       from './controller/NavController.js';
import LangController      from './controller/LangController.js';
import RevealController    from './controller/RevealController.js';
import PortfolioController from './controller/PortfolioController.js';
import { clientGridInit }  from './controller/ClientController.js';

document.addEventListener('DOMContentLoaded', async () => {

  // 1. Language — must run first to populate i18n text
  const lang = new LangController();
  lang.init();

  // 2. Navigation
  const nav = new NavController();
  nav.init();

  // 3. Scroll reveal animations
  const reveal = new RevealController();
  reveal.init();

  // 4. Portfolio tab filter (index / layanan page only)
  const portfolio = new PortfolioController();
  portfolio.init();

  // 5. Client grid show more/less (about / index page only)
  clientGridInit();

  // 6. Year in footer
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 7. Page-specific controllers — loaded only when the page needs them
  //    Uses dynamic import so other pages pay zero cost.
  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'contact.html') {
    const { initContact } = await import('./controller/ContactController.js');
    initContact();
  }

});