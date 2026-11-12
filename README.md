# Web Scraper Browser Suite

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Chrome](https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Playwright](https://img.shields.io/badge/Playwright-Headless-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![MIT](https://img.shields.io/badge/Licencia-MIT-green)](LICENSE)

[Español](#español) · [English](#english)

---

## Español

### Índice

- [Descripción](#descripción)
- [Componentes](#componentes)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Aviso legal](#aviso-legal)
- [Licencia](#licencia)

### Descripción

Suite de **web scraping** con dos piezas independientes que comparten la misma idea: extraer ofertas de producto y guardarlas de forma persistente.

1. **Extensión de Chrome** para scraping en tiempo real desde la página que estás viendo, con guardado en **IndexedDB**.
2. **Scraper avanzado** con **Playwright** para ejecuciones desatendidas y exportación a **JSON**.

### Componentes

| Componente | Qué hace | Dónde guarda |
|---|---|---|
| Extensión (`manifest.json`, `popup.js`, `content-script.js`) | Recorre la página, extrae las ofertas y las muestra en el popup | IndexedDB del navegador (`indexeddb.js`) |
| Scraper avanzado (`advanced-scraper.js`) | Lanza un navegador headless, pagina y extrae los productos | `productos_avanzados.json` |

### Requisitos

- **Chrome** (o un navegador compatible con extensiones Manifest V3) para la extensión.
- **Node.js 18+** para el scraper avanzado.
- Conexión a Internet y acceso a la web que quieras analizar.

### Instalación

**1. Extensión de Chrome**

```text
chrome://extensions → Modo de desarrollador → Cargar descomprimida → carpeta del proyecto
```

**2. Scraper avanzado**

```bash
npm install playwright
npx playwright install chromium
node advanced-scraper.js
```

### Uso

**Con la extensión**

1. Abre una web compatible (por ejemplo, Chollometro).
2. Pulsa el icono de la extensión.
3. Pulsa **Iniciar Scraping y Guardar**.
4. Revisa los resultados en la consola o en **DevTools → Application → IndexedDB**.

**Con el scraper avanzado**

```bash
node advanced-scraper.js
```

El script abre Chromium en segundo plano, extrae los productos y escribe `productos_avanzados.json` en la carpeta del proyecto. Los selectores y la URL objetivo están en la parte superior del archivo, listos para adaptarlos a otro sitio.

### Estructura del proyecto

```text
web-scraper-browser-suite/
├── manifest.json         # Permisos y configuración de la extensión
├── popup.html            # Interfaz del popup
├── popup.js              # Acciones del popup y mensajes al content script
├── content-script.js     # Extracción de datos en la página
├── indexeddb.js          # Capa de persistencia en IndexedDB
├── advanced-scraper.js   # Scraper con Playwright y export a JSON
├── LICENSE
└── README.md
```

### Aviso legal

El scraping debe respetar los **términos de servicio** de cada sitio, su `robots.txt`, los límites de peticiones y la legislación aplicable sobre datos personales y propiedad intelectual. Usa el proyecto solo sobre contenido al que tengas derecho de acceso y no lo emplees para eludir protecciones técnicas.

### Licencia

**MIT** — consulta [LICENSE](LICENSE).

---

## English

### Table of contents

- [Overview](#overview)
- [Components](#components)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project structure](#project-structure)
- [Legal notice](#legal-notice)
- [License](#license)

### Overview

A **web scraping** suite made of two independent pieces built around the same idea: extract product offers and store them persistently.

1. A **Chrome extension** for real-time scraping of the page you are viewing, stored in **IndexedDB**.
2. An **advanced Playwright scraper** for unattended runs and **JSON** export.

### Components

| Component | What it does | Where it stores |
|---|---|---|
| Extension (`manifest.json`, `popup.js`, `content-script.js`) | Walks the page, extracts offers and shows them in the popup | Browser IndexedDB (`indexeddb.js`) |
| Advanced scraper (`advanced-scraper.js`) | Launches a headless browser, paginates and extracts products | `productos_avanzados.json` |

### Requirements

- **Chrome** (or a Manifest V3-compatible browser) for the extension.
- **Node.js 18+** for the advanced scraper.
- An Internet connection and access to the site you want to analyse.

### Installation

**1. Chrome extension**

```text
chrome://extensions → Developer mode → Load unpacked → project folder
```

**2. Advanced scraper**

```bash
npm install playwright
npx playwright install chromium
node advanced-scraper.js
```

### Usage

**With the extension**

1. Open a supported site (for example, Chollometro).
2. Click the extension icon.
3. Press **Iniciar Scraping y Guardar**.
4. Inspect the results in the console or under **DevTools → Application → IndexedDB**.

**With the advanced scraper**

```bash
node advanced-scraper.js
```

The script opens Chromium in the background, extracts the products and writes `productos_avanzados.json` into the project folder. The selectors and target URL sit at the top of the file, ready to be adapted to another site.

### Project structure

```text
web-scraper-browser-suite/
├── manifest.json         # Extension permissions and configuration
├── popup.html            # Popup interface
├── popup.js              # Popup actions and content-script messaging
├── content-script.js     # In-page data extraction
├── indexeddb.js          # IndexedDB persistence layer
├── advanced-scraper.js   # Playwright scraper and JSON export
├── LICENSE
└── README.md
```

### Legal notice

Scraping must respect each site's **terms of service**, its `robots.txt`, request limits and applicable personal-data and intellectual-property law. Use the project only on content you are allowed to access, and never to bypass technical protections.

### License

**MIT** — see [LICENSE](LICENSE).
