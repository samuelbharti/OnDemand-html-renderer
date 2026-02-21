# ondemand-html-viewer-extension

A Chrome/Chromium extension that restores HTML report viewing for OnDemand (v2+) by opening HTML output in a dedicated preview viewer instead of relying on the default in-app rendering.

## Quick overview
Detects OnDemand HTML report output and opens it in a clean preview page for reliable viewing in Chrome/Chromium.

## Why this exists
OnDemand v2+ changed how HTML reports are rendered, and Chrome/Chromium no longer display the output properly inside the OnDemand app. This extension bypasses the in-app rendering by loading the HTML in a dedicated preview viewer.

## Load in Chrome (developer / local testing)
Developer mode install:

1. Clone this repo.
2. Update the OnDemand URL match in [ood-html-render/manifest.json](ood-html-render/manifest.json).
3. Open `chrome://extensions`.
4. Enable **Developer mode** (top right).
5. Click **Load unpacked**.
6. Select the extension folder at `ood-html-render`.
7. Optional: Zip the `ood-html-render` folder for sharing or a manual install workflow.

## Usage
1. Open an OnDemand HTML report as you normally would.
2. The extension detects the HTML output and opens a clean preview tab/page.
3. View and scroll the report in the preview viewer.

## Configuration
- Edit `host_permissions` and `content_scripts.matches` in [ood-html-render/manifest.json](ood-html-render/manifest.json) to your OnDemand host.
- Example (sanitized): `https://ondemand.example.edu/` and `https://ondemand.example.edu/pun/sys/dashboard/files/fs/*`.

## Troubleshooting
- **Extension not triggering**: Confirm the report URL matches the extension's match patterns.
- **URL patterns**: Ensure your OnDemand host/domain is covered by the extension's allowed patterns.

## Where to edit
The extension lives in the `ood-html-render` folder and currently includes:

- [ood-html-render/manifest.json](ood-html-render/manifest.json) — Chrome extension manifest (entry points, permissions, etc.)
- [ood-html-render/render-html.js](ood-html-render/render-html.js) — main JavaScript file that does the HTML rendering logic

To change behavior, edit [ood-html-render/render-html.js](ood-html-render/render-html.js). If you need to change extension metadata, permissions, or add scripts, update [ood-html-render/manifest.json](ood-html-render/manifest.json).

## Development notes
- No build step is required unless you add one; this is plain JavaScript intended to run in the browser environment.
- After editing, return to `chrome://extensions` and reload the unpacked extension.
- For distribution, update the URL match, then zip the `ood-html-render` folder (Chrome loads unpacked folders for dev mode).
- Open an issue or PR with a clear description and reproduction steps.

## Disclaimer
This project is not affiliated with, endorsed by, or supported by OnDemand or its vendor.

## License
MIT. See [LICENSE](LICENSE).
