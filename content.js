// Hide/remove Shorts UI elements that appear in feeds/search/etc.
(function () {
  const style = document.createElement("style");
  style.textContent = `
    /* Any tiles/list entries that contain a shorts link */
    ytd-rich-item-renderer:has(a[href^="/shorts"]),
    ytd-rich-item-renderer:has(a[href*="/shorts/"]),
    ytd-video-renderer:has(a[href^="/shorts"]),
    ytd-video-renderer:has(a[href*="/shorts/"]),
    ytd-grid-video-renderer:has(a[href^="/shorts"]),
    ytd-grid-video-renderer:has(a[href*="/shorts/"]),
    ytd-compact-video-renderer:has(a[href^="/shorts"]),
    ytd-compact-video-renderer:has(a[href*="/shorts/"]) {
      display: none !important;
    }

    /* Shorts shelves/sections */
    ytd-reel-shelf-renderer,
    ytd-rich-shelf-renderer[is-shorts],
    ytd-rich-section-renderer:has(a[href^="/shorts"]),
    ytd-rich-section-renderer:has(a[href*="/shorts/"]) {
      display: none !important;
    }

    /* Left nav / guide entry pointing to Shorts */
    ytd-guide-entry-renderer:has(a[href^="/shorts"]),
    ytd-guide-entry-renderer:has(a[href*="/shorts/"]) {
      display: none !important;
    }
  `;
  document.documentElement.appendChild(style);
})();
