<a id="readme-top"></a>

<div align="center">
  <img src="src/assets/icon/nookPlazaLogo.png" alt="NookPlaza Logo" width="180" />

  <h1>🌿 NookPlaza</h1>
  <p><strong>A community platform for Animal Crossing: New Horizons island enthusiasts</strong></p>

  <p>
    <a href="https://github.com/sdvictorvergara/nook-plaza"><strong>View on GitHub »</strong></a>
    &nbsp;·&nbsp;
    <a href="https://www.figma.com/design/Fcv2dHPlrm3rj43PLI6jal/Nook-Plaza?node-id=0-1&t=Bl3awkTRxpKaWd8x-1"><strong>View Figma Design »</strong></a>
  </p>

  <br/>

  ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)
  ![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)
  ![License](https://img.shields.io/badge/license-MIT-green?style=flat)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Pages & Features](#pages--features)
- [Third-Party Components](#third-party-components)
- [Helpful Tutorials](#helpful-tutorials)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design & Figma](#design--figma)
- [Firebase Hosting](#firebase-hosting)
- [Contributing](#contributing)
- [License](#license)

---

## 🏝️ About The Project

**NookPlaza** is a fan-made community website dedicated to players of *Animal Crossing: New Horizons*. It allows users to share, browse, and discover custom island designs from players around the world.

The main page features a full **CRUD interface** (Create, Read, Update, Delete) for island entries stored in a local JSON array, with filtering by category and text search. The project is built with **React + Vite** and is fully responsive, using **Flexbox** and **CSS media queries** throughout.

> ⚠️ This is a non-profit fan project. Animal Crossing: New Horizons and all related characters are property of Nintendo Co., Ltd.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📄 Pages & Features

### 🏠 Home (`/` and `/home`)
The main landing page includes:
- A **hero section** with the NookPlaza logo and a call-to-action button
- A "Who We Are" section and an "About Us" section with descriptive cards
- A full **CRUD island section**: search by name/description, filter by category, add new islands, edit existing ones, and delete entries — all managed with React `useState`

### 📰 News (`/news`)
A news page for the Animal Crossing community:
- Articles displayed as cards with category badges and dates
- Filter by category
- A prominent **RSS feed link** to [Nintendo Life News RSS](https://www.nintendolife.com/feeds/news)

### ℹ️ About (`/about`)
Information about the NookPlaza project, its purpose, and its main features.

### 📬 Contact (`/contact`)
- Contact information cards
- A working **contact form** with validation and success feedback
- An embedded **Google Maps** location

### 📜 Terms (`/terms`)
Full privacy policy, cookies policy, terms of service and intellectual property disclaimer — with a navigable sidebar index.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📦 Third-Party Components

| Library | Purpose | Link |
|---|---|---|
| **Wouter** | Lightweight client-side routing (alternative to React Router) | [github.com/molefrog/wouter](https://github.com/molefrog/wouter) |
| **Vite** | Build tool and dev server | [vitejs.dev](https://vitejs.dev/) |
| **Inter (Google Fonts)** | Main typeface used across the UI | [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter) |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🔗 Helpful Tutorials

- [Best README Template](https://github.com/othneildrew/Best-README-Template) — template used as the base for this README
- [Wouter docs — getting started](https://github.com/molefrog/wouter#readme) — routing setup reference
- [React useState hook](https://react.dev/reference/react/useState) — official docs used to implement the CRUD state logic
- [CSS Flexbox guide — CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) — reference for the responsive layout
- [Optimising images for the web — Shopify](https://www.shopify.com/es/blog/imagenes-para-web-tamano) — image size and resolution guidance
- [Clean Code principles — HostGator](https://www.hostgator.mx/blog/clean-code-codigo-limpio/) — clean code reference followed in this project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/sdvictorvergara/nook-plaza.git
cd nook-plaza/client

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173` and also at `http://localhost:5173/home`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🗂️ Project Structure

```
client/
├── public/
└── src/
    ├── assets/          # SVGs, PNGs, icons
    ├── components/
    │   ├── Footer/      # Footer component
    │   ├── Header/      # Header with hamburger menu
    │   ├── IslandCard/  # Island display card (props: island, onEdit, onDelete)
    │   ├── IslandForm/  # Create/Edit form (props: initialData, onSave, onCancel)
    │   └── NewsCard/    # News article card (props: newsItem)
    ├── data/
    │   └── homeText.json
    ├── pages/
    │   ├── About/
    │   ├── Contact/
    │   ├── Home/        # Main page with full CRUD
    │   ├── News/        # News + RSS feed link
    │   ├── NotFound/
    │   └── Terms/
    ├── styles/
    │   └── global.css   # CSS custom properties & resets
    ├── App.jsx
    └── main.jsx
```

Naming conventions followed:
- **PascalCase** for component files and CSS files (e.g. `IslandCard.jsx`, `IslandCard.css`)
- **kebab-case** for folders, routes, CSS class names and `.js` utility files
- **camelCase** for JavaScript variables and functions
- Boolean variables prefixed with `is`, `has`, or `should` (e.g. `isFormVisible`, `isMenuOpen`)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🎨 Design & Figma

The visual design of NookPlaza was created in Figma, following the warm pastel palette of Animal Crossing: New Horizons.

🔗 **[View the Figma design file](https://www.figma.com/design/Fcv2dHPlrm3rj43PLI6jal/Nook-Plaza?node-id=0-1&t=Bl3awkTRxpKaWd8x-1)**

The UI uses a consistent colour system defined as CSS custom properties in `global.css`:
- Primary accent: `#E3AD3B` (warm gold)
- Background light: `#FFFDDB`
- Background warm: `#FDDBAD`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🔥 Firebase Hosting

> _Coming soon — link will be added here once deployed._

The project will be deployed to Firebase Hosting. Once live, the production URL will be listed here.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🤝 Contributing

Contributions are welcome! If you have a suggestion or find a bug:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  Made with 🍃 for the Animal Crossing community
</div>
