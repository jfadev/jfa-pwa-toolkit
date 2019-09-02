/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * cache-statics-sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/* Cache JS, JSON and CSS (request if it is available and update the cache in the background) */
workbox.routing.registerRoute(
    /\.(?:js|json|css)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: PWA_CONFIG.app.name + '-statics-cache-' + PWA_CONFIG.app.version,
    })
);
