# Color Palette

A beautiful web application to explore, generate, and copy color codes quickly. Switch between flat color palettes inspired by different styles or generate an infinite scroll of random colors for rapid design inspiration.

## Features

- 🌈 Browse curated flat color palettes based on various styles.
- 🔄 Infinite scrolling random color generator.
- 👀 View color codes in HEX (with and without #), RGB, or RGBA.
- 📋 One-click to copy your chosen color code in your preferred format.
- ⚡ Modern, minimal, responsive UI (mobile/tablet/desktop).
- 💾 Remembers your selected color code mode (HEX, RGB, etc.) by saving it to your browser's local storage.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) for state management
- [Vue Router](https://router.vuejs.org/) for navigation
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for build tooling
- [@vueuse/core](https://vueuse.org/) utilities
- [color-namer](https://www.npmjs.com/package/color-namer) for generating color names
- [vue3-toastify](https://vue3-toastify.js-bridge.com/) for notifications

## Usage

- Use the **navbar** to switch between random color generation and flat (curated) palettes.
- In the **Random Color** generator, infinite scrolling loads new colors. Click any color code to copy it.
- In **Flat Color** mode, pick any palette; click to go into details for easy copying.
- Switch color code formats (HEX, HEX with #, RGB, RGBA) with the dropdown selector in the navbar.
- Your preferred color code mode will be remembered even after you close or refresh the browser.

## Project Structure

```
color-palette/
├── index.html               # App entrypoint
├── src/
│   ├── App.vue              # Main App wrapper
│   ├── main.js              # App bootstrap
│   ├── router/              # Vue Router config
│   ├── common/
│   │   ├── components/      # Shared UI components (Navbar, etc)
│   │   ├── stores/          # Pinia state stores (mode.js)
│   │   └── util/            # Utilities and color palette data
│   ├── views/               # Page views (Home, PaletteGenerator, FlatColorList/Detail)
│   └── assets/              # Images & CSS
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── README.md                # This documentation file
```

## Inspirations

- Colors licensed and/or inspired by [Flat UI Colors](https://flatuicolors.com/).
