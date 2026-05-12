/**
 * ContactController.js — Controller Layer
 * Handles:
 *  - Contact form validation & submission simulation
 *  - Service tab switching
 *  - FAQ accordion
 *  - Office open/closed status (real-time WIB clock check)
 *  - Character counter on textarea
 *  - Subtle tilt effect on info cards
 *
 * Follows the existing MVC pattern.
 * Called by main.js via dynamic import — DOM is already ready on entry.
 */

// ─── Constants ───────────────────────────────────────────────────────────────

const MAX_CHARS    = 500;
const SUBMIT_DELAY = 1800; // ms — replace with real fetch() when backend ready

/** Office hours WIB (UTC+7). Value: [openHour, closeHour] 24h. null = closed. */
const OFFICE_HOURS = {
  0: null,      // Minggu
  1: [8, 17],   // Senin
  2: [8, 17],
  3: [8, 17],
  4: [8, 17],
  5: [8, 17],   // Jumat
  6: [9, 14],   // Sabtu
};

// ─── DOM Helpers ──────────────────────────────────────────────────────────────

/**
 * Mark a form field as valid or invalid.
 * All DOM class/attribute changes are isolated here (view responsibility).
 */
function setValidity(groupId, inputEl, errorId, message) {
  const group = document.getElementById(groupId);
  const error = document.getElementById(errorId);
  if (!group || !inputEl || !error) return;

  if (message) {
    inputEl.classList.add('is-invalid');
    inputEl.classList.remove('is-valid');
    inputEl.setAttribute('aria-invalid', 'true');
    error.textContent = message;
  } else {
    inputEl.classList.remove('is-invalid');
    inputEl.classList.add('is-valid');
    inputEl.removeAttribute('aria-invalid');
    error.textContent = '';
  }
}

// ─── Validators ──────────────────────────────────────────────────────────────

const validateName = v =>
  !v.trim()           ? 'Nama lengkap wajib diisi.'    :
  v.trim().length < 2 ? 'Nama minimal 2 karakter.'     : '';

const validatePhone = v => {
  const s = v.replace(/[\s\-\(\)]/g, '');
  return !s                                   ? 'Nomor telepon wajib diisi.'                         :
         !/^(\+62|62|0)[0-9]{8,14}$/.test(s) ? 'Format tidak valid (contoh: 08xx atau +628xx).'    : '';
};

const validateEmail = v =>
  !v.trim()                             ? 'Email wajib diisi.'        :
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)? 'Format email tidak valid.' : '';

const validateMessage = v =>
  !v.trim()            ? 'Pesan tidak boleh kosong.'              :
  v.trim().length < 10 ? 'Pesan minimal 10 karakter.'             :
  v.length > MAX_CHARS ? `Pesan maksimal ${MAX_CHARS} karakter.`  : '';

// ─── Office Status ────────────────────────────────────────────────────────────

function updateOfficeStatus() {
  const el = document.getElementById('officeStatus');
  if (!el) return;

  const wib   = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  const hours = OFFICE_HOURS[wib.getDay()];
  const h     = wib.getHours();
  const isOpen = Array.isArray(hours) && h >= hours[0] && h < hours[1];

  el.textContent = isOpen ? 'Buka' : 'Tutup';
  el.className   = `office-status ${isOpen ? 'office-status--open' : 'office-status--closed'}`;
}

// ─── Service Tabs ─────────────────────────────────────────────────────────────

const SERVICE_PLACEHOLDERS = {
  legal:     'Ceritakan dokumen apa yang perlu diurus (PBG, SLF, UWTO, dll.)...',
  properti:  'Ceritakan properti yang Anda cari (tipe, lokasi, budget)...',
  arsitektur:'Ceritakan proyek Anda (jenis bangunan, luas, jadwal)...',
  mep:       'Ceritakan kebutuhan instalasi atau sistem yang Anda perlukan...',
};

function initServiceTabs() {
  const tabs   = document.querySelectorAll('.service-tab');
  const hidden = document.getElementById('selectedService');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('service-tab--active'));
      tab.classList.add('service-tab--active');

      if (hidden) hidden.value = tab.dataset.service ?? '';

      const textarea = document.getElementById('contactMsg');
      const ph = SERVICE_PLACEHOLDERS[tab.dataset.service];
      if (textarea && ph) textarea.setAttribute('placeholder', ph);
    });
  });
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function initFaqAccordion() {
  const items = document.querySelectorAll('[data-faq]');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close siblings
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          other.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

// ─── Character Counter ────────────────────────────────────────────────────────

function initCharCounter() {
  const textarea = document.getElementById('contactMsg');
  const counter  = document.getElementById('charCount');
  if (!textarea || !counter) return;

  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    counter.textContent = `${len} / ${MAX_CHARS}`;
    counter.classList.remove('near-limit', 'over-limit');
    if (len > MAX_CHARS)             counter.classList.add('over-limit');
    else if (len > MAX_CHARS * 0.85) counter.classList.add('near-limit');
  });
}

// ─── Subtle Card Tilt ─────────────────────────────────────────────────────────

function initTiltEffect() {
  const MAX_DEG = 4;

  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
      const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
      card.style.transform =
        `perspective(600px) rotateX(${(-dy * MAX_DEG).toFixed(2)}deg) rotateY(${(dx * MAX_DEG).toFixed(2)}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      card.style.transform  = '';
      setTimeout(() => { card.style.transition = ''; }, 450);
    });
  });
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successEl = document.getElementById('contactSuccess');
  const resetBtn  = document.getElementById('resetFormBtn');
  if (!form) return;

  const fields = {
    name:  { input: document.getElementById('contactName'),  group: 'nameGroup',  error: 'nameError',  fn: validateName  },
    phone: { input: document.getElementById('contactPhone'), group: 'phoneGroup', error: 'phoneError', fn: validatePhone },
    email: { input: document.getElementById('contactEmail'), group: 'emailGroup', error: 'emailError', fn: validateEmail },
    msg:   { input: document.getElementById('contactMsg'),   group: 'msgGroup',   error: 'msgError',   fn: validateMessage },
  };

  // Real-time: validate on blur, clear error on input
  Object.values(fields).forEach(({ input, group, error, fn }) => {
    if (!input) return;
    input.addEventListener('blur',  () => setValidity(group, input, error, fn(input.value)));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) setValidity(group, input, error, '');
    });
  });

  // Submit
  form.addEventListener('submit', async e => {
    e.preventDefault();

    let hasError = false;
    Object.values(fields).forEach(({ input, group, error, fn }) => {
      if (!input) return;
      const msg = fn(input.value);
      setValidity(group, input, error, msg);
      if (msg) hasError = true;
    });

    if (hasError) {
      form.querySelector('.is-invalid')?.focus();
      return;
    }

    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;

    try {
      // ── Swap for a real fetch() when backend is ready ─────────────────
      await new Promise(resolve => setTimeout(resolve, SUBMIT_DELAY));

      const _payload = {
        name:    fields.name.input.value.trim(),
        phone:   fields.phone.input.value.trim(),
        email:   fields.email.input.value.trim(),
        service: document.getElementById('selectedService')?.value,
        prefer:  form.querySelector('input[name="prefer"]:checked')?.value,
        message: fields.msg.input.value.trim(),
      };
      // Example:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(_payload),
      // });
      // ─────────────────────────────────────────────────────────────────

      form.classList.add('hidden');
      if (successEl) {
        successEl.classList.remove('hidden');
        successEl.classList.add('flex', 'flex-col');
      }

    } catch (err) {
      console.error('[ContactController] Submit error:', err);
      const msgError = document.getElementById('msgError');
      if (msgError) msgError.textContent = 'Terjadi kesalahan jaringan. Silakan coba lagi atau hubungi kami via WhatsApp.';

    } finally {
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
    }
  });

  // Reset
  resetBtn?.addEventListener('click', () => {
    form.reset();
    form.querySelectorAll('.form-input').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
      el.removeAttribute('aria-invalid');
    });
    form.querySelectorAll('.form-error').forEach(el => el.textContent = '');

    const counter = document.getElementById('charCount');
    if (counter) counter.textContent = `0 / ${MAX_CHARS}`;

    document.querySelectorAll('.service-tab').forEach((t, i) =>
      t.classList.toggle('service-tab--active', i === 0)
    );
    document.getElementById('selectedService')?.setAttribute('value', 'legal');

    successEl?.classList.add('hidden');
    successEl?.classList.remove('flex', 'flex-col');
    form.classList.remove('hidden');
  });
}

// ─── Public Entry Point ───────────────────────────────────────────────────────

/**
 * Called by main.js via dynamic import after DOMContentLoaded.
 * DOM is guaranteed ready at this point — no need for another DOMContentLoaded.
 */
export function initContact() {
  updateOfficeStatus();
  setInterval(updateOfficeStatus, 60_000);

  initServiceTabs();
  initFaqAccordion();
  initCharCounter();
  initTiltEffect();
  initContactForm();
}

export default initContact;