/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Network first strategy
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.networkfirst.regex,
    ({event}) => {
        return workbox.strategies.networkFirst({
            cacheName: PWA_CONFIG.app.name + '-pages-cache-' + PWA_CONFIG.app.version,
        }).handle({event})
            .then((response) => {
                return response || caches.match(PWA_CONFIG.sw.offline_route);
            })
            .catch(() => caches.match(PWA_CONFIG.sw.offline_route)
        );
    }
);
