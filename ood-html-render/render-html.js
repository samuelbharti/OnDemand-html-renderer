(function () {
  // Try to find where OOD is showing the file contents
  let el = document.querySelector("pre, textarea");

  // Fallback: if we don't find a specific element, use the whole body
  if (!el) {
    el = document.body;
  }

  if (!el) return;

  const raw = el.innerText || el.textContent;
  if (!raw) return;

  const lower = raw.toLowerCase();

  // Only proceed if it looks like HTML
  if (
    !(
      lower.includes("<!doctype html") ||
      lower.includes("<html") ||
      lower.includes("<head") ||
      lower.includes("<body")
    )
  ) {
    return;
  }

  // Unescape basic entities that OOD is showing
  let decoded = raw
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

  // Create a blob so the HTML is loaded in a clean context
  const blob = new Blob([decoded], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  // Open in a new tab; this tab won't have OOD's CSP
  const win = window.open(url, "_blank");
  if (!win) {
    alert("Popup blocked. Allow popups for this site to render HTML.");
    URL.revokeObjectURL(url);
    return;
  }

  // Optional: when the new tab unloads, free the blob URL
  win.addEventListener("beforeunload", () => {
    URL.revokeObjectURL(url);
  });
})();
