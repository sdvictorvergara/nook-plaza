# 🏝️ Nook Plaza

![Status](https://img.shields.io/badge/status-in%20development-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5-purple.svg)

A website built with React and Vite inspired by the Animal Crossing universe. Nook Plaza is a community platform designed to give players visibility for their islands and provide a way to preserve memories of their in-game worlds. Users can explore islands from other players, discover neighbors, and connect with the Animal Crossing community.

The website is designed to be fully responsive, ensuring a seamless experience across desktop and mobile devices.

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/your-username/nook-plaza
```

### Install Dependencies

```bash
cd nook-plaza-css
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

**Open the browser and navigate to `http://localhost:5173` to view the web**

## 🧩 Technologies

- React 18
- Vite 5
- Wouter (client-side routing)
- CSS3 (modules per component)

## 📂 Project Structure

````
nook-plaza/
│
├── package.json
├── vite.config.js
├── README.md
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       │   ├── bg/
│       │   ├── card/
│       │   ├── icon/
│       │   └── pj/
│       ├── components/
│       │   ├── ErrorBoundary/
│       │   ├── Footer/
│       │   ├── Header/
│       │   ├── IslandCard/
│       │   ├── Map/
│       │   ├── RssFeed/
│       │   └── ui/
│       ├── contexts/
│       ├── data/
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       │   ├── About/
│       │   ├── Contact/
│       │   ├── Home/
│       │   ├── NotFound/
│       │   └── Rss/
│       └── styles/
│
└── shared/
````

## 📄 Pages

- **Home** — Main landing page with island showcase and category filters (All, Pueblos, Vecinos)
- **About** — Information about the Nook Plaza project and its features
- **Contact** — Contact form for the community
- **RSS** — RSS feed with latest community news
- **Terms** — Terms of use
- **404 Not Found** — Custom error page

## ✒️ Author

Víctor Gabriel Vergara Alejandro