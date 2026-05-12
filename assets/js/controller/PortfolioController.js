/**
 * PortfolioController.js — Controller Layer
 * Handles portfolio tab filtering.
 * No data logic — delegates DOM updates to DOMView.
 */

import domView from '../view/DOMView.js';

export class PortfolioController {
  constructor() {
    this._tabs  = document.querySelectorAll('.tab-btn');
    this._items = document.querySelectorAll('.portfolio-item');
    this._currentFilter = 'all';
  }

  init() {
    if (!this._tabs.length) return;

    this._tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.tab ?? 'all';
        if (filter === this._currentFilter) return;

        this._currentFilter = filter;
        domView.setActiveTab(this._tabs, filter);
        domView.filterPortfolioItems(this._items, filter);
      });
    });
  }
}

export default PortfolioController;