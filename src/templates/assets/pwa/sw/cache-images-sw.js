/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Cache of images (cache first) (including images of external domains)
workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    workbox.strategies.cacheFirst({
        cacheName:  PWA_CONFIG.app.name + '-images-cache-' + PWA_CONFIG.app.version,
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxEntries: PWA_CONFIG.cache.images.maxentries,
                maxAgeSeconds: PWA_CONFIG.cache.images.maxageseconds,
            })
        ],
    })
);
