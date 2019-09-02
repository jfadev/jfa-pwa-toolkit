/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * cache-fonts-sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/* Cache of fonts (cache first) (including fonts of external domains) */
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
