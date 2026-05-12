/**
 * RevealController.js — Controller Layer
 * Manages scroll-triggered reveal animations via IntersectionObserver.
 * Delegates DOM class changes to DOMView.
 */

import domView from '../view/DOMView.js';

export class RevealController {
  constructor() {
    this._revealEls = document.querySelectorAll(
      '.reveal, .reveal--left, .reveal--right, .reveal--scale'
    );
    this._observer  = null;
  }

  init() {
    if (!this._revealEls.length) return;

    // Use reduced-motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Skip animation — show all immediately
      this._revealEls.forEach(el => domView.revealElement(el));
      return;
    }

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            domView.revealElement(entry.target);
            // Unobserve after revealing (performance)
            this._observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold:  0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    this._revealEls.forEach(el => this._observer.observe(el));
  }

  /**
   * Re-scan DOM for newly added reveal elements (e.g. after dynamic updates)
   */
  refresh() {
    const newEls = document.querySelectorAll(
      '.reveal:not(.is-visible), .reveal--left:not(.is-visible), .reveal--right:not(.is-visible), .reveal--scale:not(.is-visible)'
    );
    newEls.forEach(el => this._observer?.observe(el));
  }

  destroy() {
    this._observer?.disconnect();
  }
}

export default RevealController;