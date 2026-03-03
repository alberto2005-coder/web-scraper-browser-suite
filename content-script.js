
const SELECTOR_CONTENEDOR_PRODUCTO = '.clase-contenedor-producto'; 
const SELECTOR_NOMBRE = '.clase-nombre-articulo';
const SELECTOR_PRECIO = '.clase-precio-final';
const SELECTOR_URL_IMG = '.clase-imagen-producto';


function normalizePrice(text) {
    if (!text) return 0;
    const normalized = text
        .replace(/[^\d.,]/g, '')
        .replace(/\./g, '')      
        .replace(/,/g, '.');     
    return parseFloat(normalized) || 0;
}

function scrapeAndSave() {
    const productos = [];
    const contenedores = document.querySelectorAll(SELECTOR_CONTENEDOR_PRODUCTO);
    
    console.log(`[Scraper] Encontrados ${contenedores.length} posibles productos.`);

    contenedores.forEach((contenedor, index) => {
        try {
            const articuloEl = contenedor.querySelector(SELECTOR_NOMBRE);
            const precioEl = contenedor.querySelector(SELECTOR_PRECIO);
            const imgEl = contenedor.querySelector(SELECTOR_URL_IMG);
            
            const articulo = articuloEl ? articuloEl.innerText.trim() : `Producto sin nombre ${index}`;
            const precioTexto = precioEl ? precioEl.innerText.trim() : '0';
            const url_img = imgEl ? (imgEl.src || imgEl.getAttribute('data-src') || '') : '';
            const url = window.location.href;

            const producto = {
                cod_unico: `${Date.now()}-${index}`, 
                
                gtin: null, 
                articulo: articulo, 
                marca: null, 
                fabricante: null, 
                modelo: null, 
                precio: normalizePrice(precioTexto), 
                descuento: null, 
                fecha_limite: null, 
                url: url, 
                url_img: url_img,
                sitio_web: window.location.hostname 
            };
            
            productos.push(producto);
            
        } catch (error) {
            console.error(`[Scraper] Error al procesar el producto ${index}:`, error);
        }
    });

    if (productos.length > 0) {
        console.log(`[Scraper] Se guardarán ${productos.length} productos...`);

        addProducts(productos)
            .then(() => {
                alert(`¡Scraping completado! ${productos.length} productos guardados en IndexedDB.`);
            })
            .catch(err => {
                alert(`Error al guardar en IndexedDB: ${err.message}`);
                console.error(err);
            });
    } else {
        alert('No se encontraron productos con los selectores actuales. Revisa el DOM.');
    }
}

scrapeAndSave();