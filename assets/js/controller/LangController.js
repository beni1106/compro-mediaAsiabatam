/**
 * LangController.js — Controller Layer
 * Manages bilingual toggle (ID / EN).
 * Reads from i18n model, delegates DOM updates to DOMView.
 */

import i18n       from '../i18n.js';
import domView    from '../view/DOMView.js';


const STORAGE_KEY = 'map_lang'; // media-asia-property language

export class LangController {
  constructor() {
    this._langBtns = document.querySelectorAll('.lang-btn');
    this._currentLang = this._getSavedLang();
  }

  init() {
    // Apply saved/default language on load
    this._applyLang(this._currentLang);

    // Bind click on all lang buttons
    this._langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== this._currentLang) {
          this._currentLang = lang;
          this._saveLang(lang);
          this._applyLang(lang);
        }
      });
    });
  }

  /* ── Private ─────────────────────────────────────────── */

  _applyLang(lang) {
    const translations = i18n[lang] ?? i18n['id'];

    // Update DOM text via data-i18n attributes
    domView.applyTranslations(lang, translations);

    // Update toggle button styles
    domView.setActiveLang(this._langBtns, lang);
  }

  _getSavedLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') return saved;

    // Auto-detect from browser language
    const browser = navigator.language?.slice(0, 2).toLowerCase();
    return browser === 'en' ? 'en' : 'id';
  }

  

  _saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {
      // localStorage unavailable — silently ignore
    }
  }

  getCurrentLang() {
    return this._currentLang;
  }
}

export default LangController;