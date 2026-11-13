// Mismo comportamiento para galerías de servicios y testimonios.
export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((carousel) => {
    const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
    const previous = carousel.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
    const counter = carousel.querySelector<HTMLElement>('[data-carousel-count]');
    if (!track) return;
    const slides = [...track.children].filter((node): node is HTMLElement => node instanceof HTMLElement);
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      if (previous) previous.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
      if (counter) {
        let current = 0;
        let nearest = Infinity;
        slides.forEach((slide, index) => {
          const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (distance < nearest) { nearest = distance; current = index; }
        });
        counter.textContent = `${current + 1} de ${slides.length}`;
      }
    };
    const move = (direction: number) => {
      const distance = slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth;
      track.scrollBy({ left: distance * direction, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    };
    previous?.addEventListener('click', () => move(-1));
    next?.addEventListener('click', () => move(1));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  });
}
