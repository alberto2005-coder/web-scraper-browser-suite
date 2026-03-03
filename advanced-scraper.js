const { chromium } = require('playwright');

async function runScraper() {
    const browser = await chromium.launch({ headless: true }); 
    const page = await browser.newPage();

    await page.goto('https://www.chollometro.com/', { waitUntil: 'domcontentloaded' });

    const productos = await page.evaluate(() => {
        const data = [];
        document.querySelectorAll('.clase-contenedor-producto').forEach(el => {
            data.push({
                articulo: el.querySelector('.clase-nombre').innerText,
            });
        });
        return data;
    });

    console.log(`Productos extraídos: ${productos.length}`);
    require('fs').writeFileSync('productos_avanzados.json', JSON.stringify(productos, null, 2));

    await browser.close();
}

runScraper();