/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Cache JS, JSON and CSS (request if it is available and update the cache in the background)
workbox.routing.registerRoute(
    /\.(?:js|json|css)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: PWA_CONFIG.app.name + '-statics-cache-' + PWA_CONFIG.app.version,
    })
);
