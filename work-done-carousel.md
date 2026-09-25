# Infinite Logo Carousel — standalone HTML

Copy everything inside the HTML block into your HTML editor. This version contains only the infinite carousel. Replace each placeholder `href` and `img src` with your logo link and logo image. It does not modify the Natural Intellects Ltd website.

```html
<section class="infinite-logo-carousel" aria-label="Selected work logos">
  <div class="infinite-logo-carousel__viewport">
    <div class="infinite-logo-carousel__track">
      <div class="infinite-logo-carousel__set">
        <!-- Replace each href and img src with your own logo link and image. -->
        <a class="infinite-logo-carousel__logo" href="#" aria-label="Logo 1">
          <img src="YOUR-LOGO-URL-1" alt="Logo 1">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" aria-label="Logo 2">
          <img src="YOUR-LOGO-URL-2" alt="Logo 2">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" aria-label="Logo 3">
          <img src="YOUR-LOGO-URL-3" alt="Logo 3">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" aria-label="Logo 4">
          <img src="YOUR-LOGO-URL-4" alt="Logo 4">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" aria-label="Logo 5">
          <img src="YOUR-LOGO-URL-5" alt="Logo 5">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" aria-label="Logo 6">
          <img src="YOUR-LOGO-URL-6" alt="Logo 6">
        </a>
      </div>

      <!-- Duplicate set creates the seamless infinite loop. Keep it identical. -->
      <div class="infinite-logo-carousel__set" aria-hidden="true">
        <a class="infinite-logo-carousel__logo" href="#" tabindex="-1">
          <img src="YOUR-LOGO-URL-1" alt="">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" tabindex="-1">
          <img src="YOUR-LOGO-URL-2" alt="">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" tabindex="-1">
          <img src="YOUR-LOGO-URL-3" alt="">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" tabindex="-1">
          <img src="YOUR-LOGO-URL-4" alt="">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" tabindex="-1">
          <img src="YOUR-LOGO-URL-5" alt="">
        </a>
        <a class="infinite-logo-carousel__logo" href="#" tabindex="-1">
          <img src="YOUR-LOGO-URL-6" alt="">
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .infinite-logo-carousel {
    --carousel-background: #e1e8ed;
    --carousel-gap: 1.5rem;
    --logo-width: 12rem;
    --logo-height: 7rem;
    --carousel-speed: 32s;
    width: 100%;
    overflow: hidden;
    padding: 2rem 0;
    background: var(--carousel-background);
  }

  .infinite-logo-carousel,
  .infinite-logo-carousel * {
    box-sizing: border-box;
  }

  .infinite-logo-carousel__viewport {
    width: 100%;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      transparent,
      #000 7%,
      #000 93%,
      transparent
    );
  }

  .infinite-logo-carousel__track {
    display: flex;
    width: max-content;
    will-change: transform;
    animation: infinite-logo-carousel-scroll var(--carousel-speed) linear infinite;
  }

  .infinite-logo-carousel__set {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    gap: var(--carousel-gap);
    padding-right: var(--carousel-gap);
  }

  .infinite-logo-carousel__logo {
    display: flex;
    width: var(--logo-width);
    height: var(--logo-height);
    flex: 0 0 var(--logo-width);
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.58);
    text-decoration: none;
    transition: transform 180ms ease, background-color 180ms ease;
  }

  .infinite-logo-carousel__logo:hover,
  .infinite-logo-carousel__logo:focus-visible {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-0.2rem);
  }

  .infinite-logo-carousel__logo:focus-visible {
    outline: 3px solid #24556b;
    outline-offset: 4px;
  }

  .infinite-logo-carousel__logo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .infinite-logo-carousel:hover .infinite-logo-carousel__track,
  .infinite-logo-carousel:focus-within .infinite-logo-carousel__track {
    animation-play-state: paused;
  }

  @keyframes infinite-logo-carousel-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @media (max-width: 40rem) {
    .infinite-logo-carousel {
      --carousel-gap: 1rem;
      --logo-width: 9rem;
      --logo-height: 5.5rem;
      --carousel-speed: 26s;
      padding: 1.25rem 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .infinite-logo-carousel__track {
      animation: none;
      transform: translateX(0);
    }

    .infinite-logo-carousel__viewport {
      overflow-x: auto;
      mask-image: none;
    }
  }
</style>
```

## Replace the placeholders

For each logo, replace:

```html
href="#"
src="YOUR-LOGO-URL-1"
alt="Logo 1"
```

with the real destination and image URL, for example:

```html
<a class="infinite-logo-carousel__logo" href="https://example.com" aria-label="Example organization">
  <img src="https://example.com/logo.svg" alt="Example organization">
</a>
```

Update the matching duplicated item as well so the loop remains seamless. To add more logos, add the same item to both `.infinite-logo-carousel__set` elements.
