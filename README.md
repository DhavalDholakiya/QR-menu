# Cuppa Chai QR Menu

Static QR menu website for Cuppa Chai Restaurant & Cafe.

## Project Structure

```text
.
├── index.html              # Main page
├── styles.css              # Theme, layout, responsive styling
├── script.js               # Menu data, search, filters, item modal
├── assets/
│   ├── fonts/              # Local brand fonts
│   ├── icons/              # Dirham icon and other icons
│   ├── images/             # Logo and restaurant background
│   └── menu-images/        # Future item images
├── docs/
│   ├── cuppa-theme-palette.md
│   └── menu-reference/     # Source PDFs/text/renders for reference
└── scripts/                # Helper scripts for PDF/theme extraction checks
```

## Local Preview

From this folder:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8080/
```

## Deploy

This is a static site. It can be hosted on GitHub Pages, Netlify, Vercel, or any normal web hosting.

For GitHub Pages, keep `index.html`, `styles.css`, `script.js`, and `assets/` in the repository root. In GitHub:

1. Go to repository `Settings`.
2. Open `Pages`.
3. Choose `Deploy from a branch`.
4. Select `main` and `/root`.
5. Save.

## Updating Menu Items

Edit `menuData` in `script.js`.

Item images are optional. To add one later:

```js
{
  name: "Poha",
  price: "14",
  description: "Description here.",
  image: "assets/menu-images/poha.jpg",
}
```

