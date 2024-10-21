const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/",
            "/css/centered-container.css",
            "/css/background-waves.css",
            "/css/site.css",
            "/js/classes/RefreshTable.js",
            "/js/color-scheme-preference.js",
            "/js/color-scheme-switcher.js",
            "/js/site.js"
        ]),
    );
});
