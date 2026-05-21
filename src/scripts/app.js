// FlowTrack Planner — global client glue
// Provides: toast, modal openers, live filters, animated counters,
// command-palette focus, escape-to-close, demo form submit.

(function () {
  const flow = (window.flow = window.flow || {});

  // ---------- Toast ----------
  flow.toast = function (message, opts = {}) {
    const host = document.getElementById('toast-host');
    if (!host) return;
    const t = document.createElement('div');
    t.className = 'toast';
    const iconChar = opts.type === 'error' ? '✕' : '✓';
    t.innerHTML = `<span class="toast-icon">${iconChar}</span><span>${message}</span>`;
    host.appendChild(t);
    requestAnimationFrame(() => t.classList.add('is-visible'));
    setTimeout(() => {
      t.classList.remove('is-visible');
      setTimeout(() => t.remove(), 300);
    }, opts.duration || 2800);
  };

  // ---------- Modal ----------
  flow.openModal = function (id) {
    const dlg = document.getElementById(id);
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
  };
  flow.closeModal = function (id) {
    const dlg = id ? document.getElementById(id) : document.querySelector('dialog[open]');
    if (dlg && typeof dlg.close === 'function') dlg.close();
  };

  // ---------- Drawer ----------
  flow.openDrawer = function () {
    const d = document.getElementById('mobile-drawer');
    if (!d) return;
    d.classList.add('is-open');
    document.body.classList.add('drawer-open');
  };
  flow.closeDrawer = function () {
    const d = document.getElementById('mobile-drawer');
    if (!d) return;
    d.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
  };

  // ---------- Global delegation ----------
  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-modal]');
    if (open) {
      e.preventDefault();
      flow.openModal(open.dataset.modal);
      return;
    }
    const close = e.target.closest('[data-close-modal]');
    if (close) {
      e.preventDefault();
      const dlg = close.closest('dialog');
      if (dlg) dlg.close();
      return;
    }
    const drawerOpen = e.target.closest('[data-open-drawer]');
    if (drawerOpen) {
      e.preventDefault();
      flow.openDrawer();
      return;
    }
    const drawerClose = e.target.closest('[data-close-drawer]') || (e.target.matches?.('[data-drawer-backdrop]') ? e.target : null);
    if (drawerClose) {
      e.preventDefault();
      flow.closeDrawer();
      return;
    }
    const toastBtn = e.target.closest('[data-toast]');
    if (toastBtn) {
      e.preventDefault();
      flow.toast(toastBtn.dataset.toast);
      return;
    }
    // Click outside dialog closes it (native dialog backdrop click)
    const openDialog = document.querySelector('dialog[open]');
    if (openDialog && e.target === openDialog) {
      openDialog.close();
    }
  });

  // ---------- Forms (demo) ----------
  document.addEventListener('submit', (e) => {
    const form = e.target.closest('form[data-demo-form]');
    if (!form) return;
    e.preventDefault();
    const msg = form.dataset.demoForm || 'Opgeslagen';
    flow.toast(msg);
    const dlg = form.closest('dialog');
    if (dlg) dlg.close();
    form.reset();
  });

  // ---------- Live filter ----------
  document.addEventListener('input', (e) => {
    const inp = e.target.closest('[data-filter-input]');
    if (!inp) return;
    const targetSel = inp.dataset.filterInput;
    const q = inp.value.trim().toLowerCase();
    document.querySelectorAll(targetSel).forEach((el) => {
      const text = (el.dataset.filterText || el.textContent || '').toLowerCase();
      el.style.display = !q || text.includes(q) ? '' : 'none';
    });
  });

  // ---------- Animated counters ----------
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    if (Number.isNaN(target)) return;
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const isInt = Number.isInteger(target);
    const dur = 900;
    const startVal = 0;
    const startTs = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - startTs) / dur);
      const ease = 1 - Math.pow(1 - t, 3);
      const v = startVal + (target - startVal) * ease;
      const prefix = el.dataset.countPrefix || '';
      const suffix = el.dataset.countSuffix || '';
      el.textContent = prefix + (isInt ? Math.round(v).toLocaleString('nl-NL') : v.toFixed(1)) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  document.querySelectorAll('[data-count]').forEach(animateCount);

  // ---------- Keyboard shortcuts ----------
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const search = document.querySelector('[data-global-search]');
      if (search) search.focus();
    }
    if (e.key === 'Escape') {
      const dlg = document.querySelector('dialog[open]');
      if (dlg) dlg.close();
      document.querySelectorAll('details.dd[open]').forEach((d) => d.removeAttribute('open'));
      flow.closeDrawer();
    }
  });

  // ---------- Close dropdowns on outside click ----------
  document.addEventListener('click', (e) => {
    document.querySelectorAll('details.dd[open]').forEach((d) => {
      if (!d.contains(e.target)) d.removeAttribute('open');
    });
  });

  // ---------- Tab groups ----------
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-tab]');
    if (!tab) return;
    const group = tab.dataset.tabGroup;
    if (!group) return;
    document.querySelectorAll(`[data-tab][data-tab-group="${group}"]`).forEach((t) => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    const value = tab.dataset.tab;
    document.querySelectorAll(`[data-tab-panel][data-tab-group="${group}"]`).forEach((p) => {
      p.style.display = p.dataset.tabPanel === value ? '' : 'none';
    });
  });
})();
