document.getElementById('scrapeButton').addEventListener('click', () => {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Iniciando scraping...';

    // 1. Obtener la pestaña activa
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const tabId = tabs[0].id;

        // 2. Inyectar el script de contenido (scraping)
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['indexeddb.js', 'content-script.js'] // Inyectar IndexedDB primero
        }, () => {
            if (chrome.runtime.lastError) {
                statusDiv.textContent = `Error de inyección: ${chrome.runtime.lastError.message}`;
                return;
            }
            statusDiv.textContent = 'Script inyectado. Extrayendo datos...';
        });
    });
});

// Este código no necesita comunicación post-ejecución, 
// ya que el content-script.js puede llamar a indexeddb.js directamente.