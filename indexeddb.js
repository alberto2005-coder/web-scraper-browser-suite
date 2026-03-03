const DB_NAME = 'OfertasDB';
const DB_VERSION = 1;
const STORE_NAME = 'productos';


function openDB() {
    return new Promise((resolve, reject) => {
        if (!('indexedDB' in window)) {
            return reject(new Error('IndexedDB no es soportado por este navegador.'));
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error(`IndexedDB error: ${event.target.errorCode}`);
            reject(new Error('Error al abrir la base de datos.'));
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, { keyPath: 'cod_unico' });
                store.createIndex('by_articulo', 'articulo', { unique: false });
                console.log(`[IndexedDB] Object Store '${STORE_NAME}' creada.`);
            }
        };
    });
}

function addProducts(products) {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);

            let count = 0;
            products.forEach(product => {
                const request = store.put(product);
                request.onsuccess = () => {
                    count++;
                };
                request.onerror = (event) => {
                    console.error(`Error al guardar producto: ${event.target.error}`);
                };
            });

            transaction.oncomplete = () => {
                console.log(`[IndexedDB] ${count} productos guardados exitosamente.`);
                resolve();
            };
            transaction.onerror = (event) => {
                reject(new Error(`Transacción fallida: ${event.target.error}`));
            };
        });
    });
}

window.addProducts = addProducts;