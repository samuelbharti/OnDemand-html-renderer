# ondemand-html-viewer-extension

A Chrome/Chromium extension that restores HTML report viewing for OnDemand (v2+) by opening HTML output in a dedicated preview viewer instead of relying on the default in-app rendering.

## Quick overview
This extension detects OnDemand HTML report output and opens it in a clean preview page for reliable viewing in Chrome/Chromium.

## Why this exists
OnDemand v2+ changed how HTML reports are rendered, and Chrome/Chromium no longer display the output properly inside the OnDemand app. This extension bypasses the in-app rendering by loading the HTML in a dedicated preview viewer.

## Load in Chrome (developer / local testing)
Developer mode install:

1. Clone this repo.
2. Open `chrome://extensions`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked**.
5. Select the extension folder.

## Usage
1. Open an OnDemand HTML report as you normally would.
2. The extension detects the HTML output and opens a clean preview tab/page.
3. View and scroll the report in the preview viewer.

## Configuration
- TODO: Add configuration options if/when settings are introduced.

## Troubleshooting
- **Extension not triggering**: Confirm the report URL matches the extension's match patterns.
- **URL patterns**: Ensure your OnDemand host/domain is covered by the extension's allowed patterns.
- **Caching**: Reload the report page or disable cache in DevTools to test changes.
- **Mixed content**: If the report pulls HTTP resources inside an HTTPS page, Chrome may block them.

## Where to edit
This project is intentionally small and currently includes:

- `manifest.json` — Chrome extension manifest (entry points, permissions, etc.)
- `render-html.js` — main JavaScript file that does the HTML rendering logic

- To change behavior, edit `render-html.js`.
- If you need to change extension metadata, permissions, or add scripts, update `manifest.json`.

## Development notes
- No build step is required unless you add one; this is plain JavaScript intended to run in the browser environment.
- Load the unpacked extension from the repo root (see Installation) and reload after changes.
- Open an issue or PR with a clear description and reproduction steps.

## Disclaimer
This project is not affiliated with, endorsed by, or supported by OnDemand or its vendor.

## License
MIT. See [LICENSE](LICENSE).
