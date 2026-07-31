# Jake Foster

Source for [jakefoster.dev](https://jakefoster.dev), a static personal website hosted with GitHub Pages.

## Project structure

- `index.html` contains the page content and semantic structure.
- `style.css` contains responsive styles and animations.
- `app.js` controls the mobile navigation and scrolling header.
- `img/` and `cv/` contain static assets.
- `CNAME` configures the custom domain for GitHub Pages.

## Local development

The site has no build step or runtime dependencies. Open `index.html` directly in a browser, or serve the repository with any static file server.

For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

GitHub Pages publishes the files from the repository's configured source branch. Keep asset paths relative so the site works both locally and through GitHub Pages, and retain `CNAME` when deploying the custom domain.