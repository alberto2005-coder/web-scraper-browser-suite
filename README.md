# Web Scraper Browser Suite 🕵️‍♂️

[English](#english) | [Español](#español)

---

<a name="english"></a>
## English

### Overview
A comprehensive web scraping suite that includes a **Chrome Extension** for real-time scraping and an **Advanced Scraper** powered by Playwright for automated tasks.

### Features
- **Browser Extension**: Scrapes product offers and saves them directly to your browser's IndexedDB.
- **Advanced Scraper**: Standalone script for deeper scraping and JSON export.
- **IndexedDB Integration**: Persistent storage within the browser.

### Installation

#### 1. Chrome Extension
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top right).
3. Click **Load unpacked**.
4. Select the project folder.

#### 2. Advanced Scraper (Playwright)
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Open a terminal in the project folder.
3. Install dependencies:
   ```bash
   npm install playwright
   ```
4. Run the scraper:
   ```bash
   node advanced-scraper.js
   ```

### Usage

#### Using the Extension
1. Go to a supported website (e.g., Chollometro).
2. Click the extension icon.
3. Press **"Iniciar Scraping y Guardar"**.
4. Check the console or the IndexedDB in DevTools (Application tab) to see the results.

#### Using the Advanced Scraper
- The script `advanced-scraper.js` currently targets Chollometro.
- It will launch a headless browser, extract products, and save them in `productos_avanzados.json`.

---

<a name="español"></a>
## Español

### Descripción General
Una suite completa de web scraping que incluye una **Extensión de Chrome** para scraping en tiempo real y un **Scraper Avanzado** potenciado por Playwright para tareas automatizadas.

### Características
- **Extensión de Navegador**: Extrae ofertas de productos y las guarda directamente en la IndexedDB de tu navegador.
- **Scraper Avanzado**: Script independiente para scraping profundo y exportación a JSON.
- **Integración con IndexedDB**: Almacenamiento persistente dentro del navegador.

### Instalación

#### 1. Extensión de Chrome
1. Abre Chrome e ve a `chrome://extensions/`.
2. Activa el **Modo de desarrollador** (interruptor arriba a la derecha).
3. Haz clic en **Cargar descomprimida**.
4. Selecciona la carpeta del proyecto.

#### 2. Scraper Avanzado (Playwright)
1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:
   ```bash
   npm install playwright
   ```
4. Ejecuta el scraper:
   ```bash
   node advanced-scraper.js
   ```

### Uso

#### Uso de la Extensión
1. Ve a un sitio web compatible (ej. Chollometro).
2. Haz clic en el icono de la extensión.
3. Pulsa **"Iniciar Scraping y Guardar"**.
4. Revisa la consola o la IndexedDB en las DevTools (pestaña Application) para ver los resultados.

#### Uso del Scraper Avanzado
- El script `advanced-scraper.js` actualmente está configurado para Chollometro.
- Iniciará un navegador en segundo plano, extraerá los productos y los guardará en `productos_avanzados.json`.

---

## Technical Details / Detalles Técnicos
- **Languages**: JavaScript, HTML, CSS.
- **Storage**: IndexedDB (Browser), JSON (File).
- **Engine**: Playwright (for advanced scraper).
