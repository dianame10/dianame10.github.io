// Global motion: the printer's clock, the paper feed intro, and the feed-and-tear page transition.
import { gsap } from 'gsap';
import { ease, onPage, prefersReducedMotion, scrollToTarget, setTransition } from '../engine';
import { site } from '../data/site';

// --- Clock: Wellington time, printed on the receipt and shown on the printer LCD (the idle state).
const timeFmt = new Intl.DateTimeFormat('en-NZ', { timeZone: site.timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
const dateFmt = new Intl.DateTimeFormat('en-NZ', { timeZone: site.timeZone, day: '2-digit', month: '2-digit', year: 'numeric' });
let lastSecond = -1;
function paintClock(force = false) {
  const now = new Date();
  const s = Math.floor(now.getTime() / 1000);
  if (!force && s === lastSecond) return;
  lastSecond = s;
  const t = timeFmt.format(now);
  const d = dateFmt.format(now);
  document.querySelectorAll<HTMLElement>('[data-clock="time"]').forEach((el) => { if (el.textContent !== t) el.textContent = t; });
  document.querySelectorAll<HTMLElement>('[data-clock="date"]').forEach((el) => { if (el.textContent !== d) el.textContent = d; });
}

// --- Transition: a fresh sheet feeds up out of the printer and covers the page; then it is torn off upward.
let nextTitle = '';
function captureTitle(e: Event) {
  const a = (e.target as HTMLElement).closest('a');
  if (!a) return;
  const label = a.dataset.title || a.querySelector('.row__title, .feedroll > span')?.textContent || a.textContent || '';
  nextTitle = label.replace(/\s+/g, ' ').trim().split(' ').slice(0, 6).join(' ');
}

export function setupMotion() {
  paintClock(true);

  document.addEventListener('click', captureTitle, true);

  // In-page links (#work, or /#work while already on that page): the router would only change the
  // URL, so scroll there ourselves. Capture phase, so this runs before the router sees the click.
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    history.replaceState(history.state, '', url.hash);
    scrollToTarget(target);
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }, true);

  setTransition({
    leave: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      const title = c.querySelector<HTMLElement>('[data-curtain-title]');
      if (title) title.textContent = nextTitle || 'Next page';
      return gsap.timeline()
        .set(c, { autoAlpha: 1 })
        .fromTo(panel, { yPercent: 102 }, { yPercent: 0, duration: 0.75, ease: ease.feed });
    },
    enter: (c) => {
      const panel = c.querySelector<HTMLElement>('.curtain__panel')!;
      return gsap.timeline()
        .to(panel, { yPercent: -104, duration: 0.7, ease: 'power3.in' })
        .set(c, { autoAlpha: 0 })
        .add(() => { nextTitle = ''; });
    },
  });

  // --- Page intro: the receipt feeds up out of the printer slot.
  onPage(({ first }) => {
    paintClock(true);
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) setTimeout(() => scrollToTarget(target), first ? 300 : 150);
    }
    if (prefersReducedMotion()) return;
    const feed = document.querySelector<HTMLElement>('[data-feed]');
    if (!feed) return;
    const small = innerWidth < 768;
    const dist = Math.min(innerHeight * (small ? 0.35 : 0.55), 520);
    gsap.fromTo(feed, { y: dist }, { y: 0, duration: small ? 0.7 : first ? 1.15 : 1.0, delay: first ? 0.05 : 0.2, ease: ease.feed, clearProps: 'transform' });
  });
}
