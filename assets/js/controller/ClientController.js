const EASING = {
  enter : 'cubic-bezier(0.0, 0.0, 0.2, 1.0)', // decelerate — soft landing
  exit  : 'cubic-bezier(0.4, 0.0, 1.0, 1.0)', // accelerate — quick departure
};
 
const DURATION = {
  enter : 250,  // ms
  exit  : 200,  // ms — exits feel snappier per Material spec
};
 
const STAGGER = 30; // ms per card
 
// ─── Helpers ────────────────────────────────────────────────────────────────
 
/**
 * Animate a single card IN.
 * Returns a Promise that resolves when the animation finishes.
 */
function animateIn(card, delay = 0) {
  card.style.display = 'flex';
 
  return card.animate(
    [
      { opacity: 0, transform: 'translateY(16px)' },
      { opacity: 1, transform: 'translateY(0)'    },
    ],
    {
      duration  : DURATION.enter,
      delay,
      easing    : EASING.enter,
      fill      : 'both',
    }
  ).finished;
}
 
/**
 * Animate a single card OUT.
 * Returns a Promise that resolves when the animation finishes.
 */
function animateOut(card, delay = 0) {
  return card.animate(
    [
      { opacity: 1, transform: 'translateY(0)'    },
      { opacity: 0, transform: 'translateY(16px)' },
    ],
    {
      duration  : DURATION.exit,
      delay,
      easing    : EASING.exit,
      fill      : 'both',
    }
  ).finished;
}
 
// ─── Main export ─────────────────────────────────────────────────────────────
 
export function clientGridInit() {
  const btn     = document.getElementById('clientMoreBtn');
  const grid    = document.getElementById('clientGrid');
  const shownEl = document.getElementById('clientShown');
  const btnText = btn?.querySelector('.cg-more-btn__text');
  const arrow   = document.getElementById('clientBtnArrow');
 
  if (!btn || !grid) return;
 
  const allCards  = [...grid.querySelectorAll('.cg-card')];
  const INIT_COUNT = allCards.filter(c => c.classList.contains('cg-visible')).length;
 
  // Sync total counter
  const totalEl = document.getElementById('clientTotal');
  if (totalEl) totalEl.textContent = allCards.length;
 
  let isExpanded = false;
  let isAnimating = false; // guard — prevent double-click mid-animation
 
  // ── Expand ────────────────────────────────────────────────────────────────
  async function expand() {
    const hidden = allCards.filter(c => c.classList.contains('cg-hidden'));
    if (!hidden.length) return;
 
    // Kick off all animations (staggered), collect promises
    const animations = hidden.map((card, i) => {
      card.classList.replace('cg-hidden', 'cg-visible');
      return animateIn(card, i * STAGGER);
    });
 
    // Update UI immediately — count is already correct
    if (shownEl) shownEl.textContent = allCards.length;
 
    // Rotate arrow
    if (arrow) arrow.style.transform = 'rotate(180deg)';
 
    // Wait for last card to finish, then release guard
    await Promise.all(animations);
    isAnimating = false;
  }
 
  // ── Collapse ──────────────────────────────────────────────────────────────
  async function collapse() {
    // Cards that were added by expand — reverse order for stagger-out effect
    const toHide = allCards
      .filter(c => c.classList.contains('cg-visible'))
      .slice(INIT_COUNT)
      .reverse();
 
    if (!toHide.length) return;
 
    // Animate out (staggered)
    const animations = toHide.map((card, i) =>
      animateOut(card, i * STAGGER)
    );
 
    // Wait for ALL exit animations to finish before hiding
    await Promise.all(animations);
 
    // Now batch-hide — no layout jank
    toHide.forEach(card => {
      card.classList.replace('cg-visible', 'cg-hidden');
      card.style.display = '';  // reset inline display set by animateIn
    });
 
    // Update counter & rotate arrow back
    if (shownEl) shownEl.textContent = INIT_COUNT;
    if (arrow) arrow.style.transform = 'rotate(0deg)';
 
    // Smooth scroll back to grid top (Material: scroll after content settles)
    const top = grid.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
 
    isAnimating = false;
  }
 
  // ── Button handler ────────────────────────────────────────────────────────
  btn.addEventListener('click', () => {
    if (isAnimating) return; // ignore rapid clicks
    isAnimating = true;
 
    isExpanded = !isExpanded;
    btn.setAttribute('aria-expanded', String(isExpanded));
 
    if (btnText) {
      btnText.textContent = isExpanded
        ? (btnText.dataset.close || 'Tutup')
        : (btnText.dataset.open  || 'Lihat Semua Klien');
    }
 
    if (isExpanded) {
      expand();
    } else {
      collapse();
    }
  });
}