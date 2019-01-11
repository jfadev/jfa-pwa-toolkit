/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Cache of fonts (cache first) (including fonts of external domains)
workbox.routing.registerRoute(
    /.*\.(?:eot|ttf|woff|woff2|otf)/,
    workbox.strategies.cacheFirst({
        cacheName:  PWA_CONFIG.app.name + '-fonts-cache-' + PWA_CONFIG.app.version,
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxEntries: PWA_CONFIG.cache.fonts.maxentries,
                maxAgeSeconds: PWA_CONFIG.cache.fonts.maxageseconds,
            })
        ],
    })
);
