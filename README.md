# Astha Multispeciality Hospital

A single-page, framework-free hospital portal prototype. One HTML page hosts five
switchable views � **Website**, **Patient**, **Doctor**, **Admin**, and **Staff** �
built with plain HTML, CSS, and vanilla JavaScript (no build step required).

## Project structure

```
astha-hospital/
+-- index.html            # Markup + view containers (all screens)
+-- assets/
�   +-- css/
�   �   +-- styles.css     # All styles (design tokens, components, Sangam section)
�   +-- js/
�   �   +-- app.js         # App logic: data, rendering, view switching, actions
�   +-- img/               # Images / static assets
+-- README.md
+-- .gitignore
```

## Running locally

No dependencies or build tooling. Either open `index.html` directly in a browser,
or serve the folder over a local HTTP server (recommended, so relative asset paths
and fonts resolve cleanly):

```bash
# Python 3
python -m http.server 5173

# or Node
npx serve .
```

Then visit http://localhost:5173.

## How it works

- **Views** are toggled via the top switcher (`data-view` buttons in the app bar).
- **Screens** inside a view are shown/hidden with the `.on` class.
- Data (departments, doctors, staff) lives as arrays at the top of
  [assets/js/app.js](assets/js/app.js) and is rendered into the DOM on load.
- Interactive controls use global `onclick` handlers defined in `app.js`, so the
  script is loaded as a classic (non-module) script.

## Notes

- Placeholder content (doctor names, qualifications) is wrapped in `[...]` and
  meant to be replaced with real hospital data.
- Styles are driven by CSS custom properties defined in `:root` at the top of
  [assets/css/styles.css](assets/css/styles.css) � edit those to re-theme.
