const { chromium } = require('playwright');

async function runScraper() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.chollometro.com/', { waitUntil: 'domcontentloaded' });

    const productos = await page.evaluate(() => {
        const data = [];
        document.querySelectorAll('article.thread').forEach(el => {
            const titleEl = el.querySelector('.js-thread-title');
            if (titleEl) {
                data.push({
                    articulo: titleEl.innerText.trim(),
                });
            }
        });
        return data;
    });

    console.log(`Productos extraídos: ${productos.length}`);
    require('fs').writeFileSync('productos_avanzados.json', JSON.stringify(productos, null, 2));

    await browser.close();
}

runScraper();