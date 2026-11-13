// El diálogo conserva el foco en la página y evita abrir pestañas adicionales.
export function initMediaViewer() {
  const dialog = document.querySelector<HTMLDialogElement>('#media-viewer');
  const image = document.querySelector<HTMLImageElement>('#media-viewer-image');
  const video = document.querySelector<HTMLVideoElement>('#media-viewer-video');
  const caption = document.querySelector<HTMLElement>('#media-viewer-caption');
  const closeButton = document.querySelector<HTMLButtonElement>('#media-viewer-close');
  if (!dialog || !image || !video || !caption || !closeButton) return;

  let pointerStart: { x: number; y: number } | undefined;
  let suppressClick = false;
  document.querySelectorAll<HTMLElement>('[data-carousel-track]').forEach((track) => {
    track.addEventListener('pointerdown', (event) => {
      pointerStart = { x: event.clientX, y: event.clientY };
      suppressClick = false;
    }, { passive: true });
    track.addEventListener('pointermove', (event) => {
      if (pointerStart && Math.hypot(event.clientX - pointerStart.x, event.clientY - pointerStart.y) > 12) {
        suppressClick = true;
      }
    }, { passive: true });
    track.addEventListener('pointercancel', () => { pointerStart = undefined; suppressClick = false; });
    track.addEventListener('pointerup', () => { pointerStart = undefined; }, { passive: true });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-media-open]').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (suppressClick && (event.detail !== 0)) { suppressClick = false; return; }
      suppressClick = false;
      const src = button.dataset.mediaSrc;
      if (!src) return;
      const isVideo = button.dataset.mediaType === 'video';
      caption.textContent = button.dataset.mediaAlt || '';
      image.hidden = isVideo;
      video.hidden = !isVideo;
      // La propiedad hidden se refuerza con la clase para no depender de estilos globales.
      image.classList.toggle('hidden', isVideo);
      video.classList.toggle('hidden', !isVideo);
      if (isVideo) {
        video.poster = button.dataset.mediaPoster || '';
        video.src = src;
        video.load();
      } else {
        image.alt = button.dataset.mediaAlt || 'Fotografía de un trabajo de jardinería';
        image.src = src;
      }
      dialog.showModal();
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    video.pause();
    video.removeAttribute('src');
    video.load();
    image.removeAttribute('src');
  });
}
