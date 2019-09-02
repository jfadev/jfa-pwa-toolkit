/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * cache-images-sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/* Cache of images (cache first) (including images of external domains) */
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
