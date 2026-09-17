# Work Done Carousel — standalone HTML

Copy the complete HTML below into an HTML editor. It is self-contained: no React, Next.js, Tailwind, npm packages, imports, or external assets are required. Logo/image areas are intentionally left as placeholders so you can insert your own logos later.

```html
<section class="work-carousel" aria-labelledby="work-carousel-heading">
  <div class="work-carousel__header">
    <div>
      <p class="work-carousel__eyebrow">Selected work / archive</p>
      <h2 id="work-carousel-heading">Work that leaves a trace.</h2>
    </div>
    <div class="work-carousel__controls">
      <p>A visual index of selected work.</p>
      <button class="work-carousel__toggle" type="button" aria-label="Pause archive movement" aria-pressed="false">
        <span aria-hidden="true">Ⅱ</span> Pause
      </button>
    </div>
  </div>

  <div class="work-carousel__viewport" aria-label="Selected work items">
    <div class="work-carousel__track">
      <!-- Replace the contents of each .work-carousel__logo with your own logo or image. -->
      <div class="work-carousel__logo" data-name="ACA"><span>ACA</span></div>
      <div class="work-carousel__logo" data-name="Aicher IT"><span>Aicher IT</span></div>
      <div class="work-carousel__logo" data-name="Daily Sports"><span>Daily Sports</span></div>
      <div class="work-carousel__logo" data-name="IPD"><span>IPD</span></div>
      <div class="work-carousel__logo" data-name="Sorriso Hostesses"><span>Sorriso Hostesses</span></div>
      <div class="work-carousel__logo" data-name="UFMI"><span>UFMI</span></div>
      <div class="work-carousel__logo" data-name="WUFPA"><span>WUFPA</span></div>
      <div class="work-carousel__logo" data-name="Smart Ride"><span>Smart Ride</span></div>
      <div class="work-carousel__logo" data-name="House For Rent"><span>House For Rent</span></div>
    </div>
  </div>

  <div class="work-carousel__footer">
    <span><strong class="work-carousel__count">09</strong> selected items</span>
    <span>Drag / hover to explore</span>
  </div>
</section>

<style>
  .work-carousel {
    --carousel-bg: #101010;
    --carousel-text: #f3f0e8;
    --carousel-muted: #99958d;
    --carousel-line: rgba(243, 240, 232, 0.22);
    --carousel-accent: #d5ff3f;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    padding: 6rem 0 2rem;
    color: var(--carousel-text);
    background: var(--carousel-bg);
    font-family: Arial, Helvetica, sans-serif;
  }

  .work-carousel *,
  .work-carousel *::before,
  .work-carousel *::after { box-sizing: border-box; }

  .work-carousel__header,
  .work-carousel__footer {
    width: min(100% - 3rem, 90rem);
    margin: 0 auto;
  }

  .work-carousel__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--carousel-line);
  }

  .work-carousel__eyebrow,
  .work-carousel__controls,
  .work-carousel__footer,
  .work-carousel__toggle {
    font-family: "Courier New", Courier, monospace;
    font-size: 0.68rem;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .work-carousel__eyebrow {
    margin: 0;
    color: var(--carousel-accent);
  }

  .work-carousel h2 {
    max-width: 42rem;
    margin: 1.25rem 0 0;
    font-size: clamp(2.5rem, 7vw, 6.5rem);
    font-weight: 400;
    line-height: 0.95;
    letter-spacing: -0.065em;
  }

  .work-carousel__controls {
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
    color: var(--carousel-muted);
  }

  .work-carousel__controls p { max-width: 15rem; margin: 0; line-height: 1.7; }

  .work-carousel__toggle {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 0.55rem;
    padding: 0;
    border: 0;
    color: var(--carousel-muted);
    background: transparent;
    cursor: pointer;
  }

  .work-carousel__toggle:hover,
  .work-carousel__toggle:focus-visible { color: var(--carousel-accent); }

  .work-carousel__toggle:focus-visible,
  .work-carousel__logo:focus-visible {
    outline: 2px solid var(--carousel-accent);
    outline-offset: 4px;
  }

  .work-carousel__viewport {
    position: relative;
    overflow-x: auto;
    margin-top: 2.5rem;
    border-top: 1px solid var(--carousel-line);
    border-bottom: 1px solid var(--carousel-line);
    cursor: grab;
    scrollbar-width: none;
    touch-action: pan-y;
  }

  .work-carousel__viewport::-webkit-scrollbar { display: none; }
  .work-carousel__viewport.is-dragging { cursor: grabbing; }

  .work-carousel__track {
    display: flex;
    width: max-content;
    gap: 1rem;
    padding: 1rem;
    animation: work-carousel-marquee 32s linear infinite;
    will-change: transform;
  }

  .work-carousel__viewport:hover .work-carousel__track,
  .work-carousel__track.is-paused { animation-play-state: paused; }

  .work-carousel__logo {
    position: relative;
    display: flex;
    flex: 0 0 18rem;
    align-items: center;
    justify-content: center;
    height: 9rem;
    padding: 1.5rem;
    overflow: hidden;
    border: 1px solid var(--carousel-line);
    color: var(--carousel-muted);
    background: rgba(255, 255, 255, 0.035);
    text-align: center;
    transition: border-color 0.3s ease, color 0.3s ease;
  }

  .work-carousel__logo:hover { border-color: var(--carousel-accent); color: var(--carousel-text); }
  .work-carousel__logo::after {
    position: absolute;
    inset: 0;
    content: "";
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(213, 255, 63, 0.2), transparent);
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.4s ease, transform 0.7s ease;
  }
  .work-carousel__logo:hover::after { opacity: 1; transform: translateX(100%); }

  .work-carousel__logo span {
    position: relative;
    z-index: 1;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .work-carousel__footer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1.25rem;
    color: var(--carousel-muted);
  }

  .work-carousel__footer strong { color: var(--carousel-text); font-weight: 400; }

  @keyframes work-carousel-marquee { to { transform: translateX(-50%); } }

  @media (max-width: 42rem) {
    .work-carousel { padding-top: 4rem; }
    .work-carousel__header { display: block; width: min(100% - 2rem, 90rem); }
    .work-carousel__controls { align-items: center; justify-content: space-between; margin-top: 2rem; }
    .work-carousel__viewport { margin-top: 2rem; mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent); }
    .work-carousel__track { gap: 0.75rem; padding: 0.75rem; animation-duration: 38s; }
    .work-carousel__logo { flex-basis: 15rem; height: 8rem; }
    .work-carousel__footer { width: min(100% - 2rem, 90rem); font-size: 0.58rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .work-carousel__track { animation: none; }
    .work-carousel__logo::after { display: none; }
  }
</style>

<script>
  (function () {
    var carousel = document.querySelector('.work-carousel');
    if (!carousel) return;

    var viewport = carousel.querySelector('.work-carousel__viewport');
    var track = carousel.querySelector('.work-carousel__track');
    var toggle = carousel.querySelector('.work-carousel__toggle');
    var trackItems = Array.prototype.slice.call(track.children);
    var originalItems = trackItems.slice();
    var dragging = false;
    var startX = 0;
    var startScroll = 0;

    originalItems.forEach(function (item) {
      var clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    viewport.addEventListener('pointerdown', function (event) {
      dragging = true;
      startX = event.clientX;
      startScroll = viewport.scrollLeft;
      viewport.classList.add('is-dragging');
      viewport.setPointerCapture(event.pointerId);
    });

    viewport.addEventListener('pointermove', function (event) {
      if (!dragging) return;
      viewport.scrollLeft = startScroll - (event.clientX - startX);
    });

    function stopDragging(event) {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove('is-dragging');
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    }

    viewport.addEventListener('pointerup', stopDragging);
    viewport.addEventListener('pointercancel', stopDragging);
    viewport.addEventListener('lostpointercapture', function () {
      dragging = false;
      viewport.classList.remove('is-dragging');
    });

    toggle.addEventListener('click', function () {
      var paused = track.classList.toggle('is-paused');
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.setAttribute('aria-label', paused ? 'Resume archive movement' : 'Pause archive movement');
      toggle.innerHTML = paused ? '<span aria-hidden="true">▶</span> Resume' : '<span aria-hidden="true">Ⅱ</span> Pause';
    });
  }());
</script>
```

Replace each placeholder `.work-carousel__logo` content with your own HTML image, for example:

```html
<img src="your-logo.png" alt="Your organization" style="max-width:100%;max-height:100%;object-fit:contain;">
```

The carousel is intentionally independent from the Natural Intellects Ltd website and does not modify or depend on its code.
