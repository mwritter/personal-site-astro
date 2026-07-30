declare global {
  interface Window {
    __themeInit?: boolean;
  }
}

const COLORS = { light: "#8aa7bd", dark: "#0d1a24" };

export function setupTheme() {
  applyTheme();

  if (!window.__themeInit) {
    window.__themeInit = true;

    document.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest("[data-theme-toggle]")) return;

      var next = resolveTheme() === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      document.documentElement.dataset.theme = next;
      applyTheme();
    });

    // The router swaps in a fresh <html>, dropping the data-theme attribute.
    document.addEventListener("astro:after-swap", applyTheme);
  }
}

function applyTheme() {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.dataset.theme = stored;
    }
  } catch (e) {}

  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", COLORS[resolveTheme()]);
}

function resolveTheme() {
  return (document.documentElement.dataset.theme ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")) as keyof typeof COLORS;
}
