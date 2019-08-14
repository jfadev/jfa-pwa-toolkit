/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Cache first strategy
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.cachefirst.regex,
    workbox.strategies.cacheFirst({
        cacheName:  PWA_CONFIG.app.name + '-pages-cache-' + PWA_CONFIG.app.version,
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxEntries: PWA_CONFIG.cache.routes.cachefirst.maxentries,
                maxAgeSeconds: PWA_CONFIG.cache.routes.cachefirst.maxageseconds,
            })
        ],
    })
);
