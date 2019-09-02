/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * cache-routes-stalewhilerevalidate-sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/* Stale while revalidate strategy */
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.stalewhilerevalidate.regex,
    ({event}) => {
        return workbox.strategies.staleWhileRevalidate({
            cacheName: PWA_CONFIG.app.name + '-pages-cache-' + PWA_CONFIG.app.version,
        }).handle({event})
            .then((response) => {
                return response || caches.match(PWA_CONFIG.sw.offline_route);
            })
            .catch(() => caches.match(PWA_CONFIG.sw.offline_route)
        );
    }
);
