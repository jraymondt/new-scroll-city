const root = document.documentElement;
    const steps = document.querySelectorAll('.story-step');
    const media = document.getElementById('story-media');
    const caption = document.getElementById('media-caption');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          steps.forEach((step) => step.classList.remove('is-active'));
          const target = entry.target;
          target.classList.add('is-active');

          const mediaSrc = target.dataset.media;
          const mediaCaption = target.dataset.caption;
          const accent = target.dataset.accent;
          const background = target.dataset.bg;

          if (mediaSrc && mediaSrc !== media.src) {
            media.setAttribute('src', mediaSrc);
          }
          if (mediaCaption) {
            caption.textContent = mediaCaption;
            media.setAttribute('alt', mediaCaption);
          }
          if (accent) {
            root.style.setProperty('--accent', accent);
          }
          if (background) {
            root.style.setProperty('--bg-image', `url(${background})`);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    steps.forEach((step) => observer.observe(step));

    if (steps.length) {
      steps[0].classList.add('is-active');
      root.style.setProperty('--bg-image', `url(${steps[0].dataset.bg})`);
    }

    const updateProgress = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      root.style.setProperty('--scroll-progress', progress.toFixed(3));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();