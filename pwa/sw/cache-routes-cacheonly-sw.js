/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Cache only strategy
workbox.routing.registerRoute(
    PWA_CONFIG.cache.routes.cacheonly.regex,
    workbox.strategies.cacheOnly({
        cacheName:  PWA_CONFIG.app.name + '-pages-cache-' + PWA_CONFIG.app.version,
    })
);
