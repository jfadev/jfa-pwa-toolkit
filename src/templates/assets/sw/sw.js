/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/**
 * Main Service Worker
 */

// Import Workbox lib (https://developers.google.com/web/tools/workbox/)
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    // Workbox configs
    workbox.core.setCacheNameDetails({
        prefix: PWA_CONFIG.app.name,
        suffix: PWA_CONFIG.app.version
    });

    // Import PreCache Service Worker
    if (PWA_CONFIG.precache.active) {
        importScripts(SW_DIR + '/precache-sw.js');
    }

    // Import Cache Images Service Worker
    if (PWA_CONFIG.cache.images.active) {
        importScripts(SW_DIR + '/cache-images-sw.js');
    }

    // Import Cache Statics (js, css, json) Service Worker
    if (PWA_CONFIG.cache.statics.active) {
        importScripts(SW_DIR + '/cache-statics-sw.js');
    }

    // Import Cache Fonts Service Worker
    if (PWA_CONFIG.cache.fonts.active) {
        importScripts(SW_DIR + '/cache-fonts-sw.js');
    }

    // Import Cache Routes Network Only Service Worker
    if (PWA_CONFIG.cache.routes.networkonly.active) {
        importScripts(SW_DIR + '/cache-routes-networkonly-sw.js');
    }

    // Import Cache Routes Stale While Revalidate Service Worker
    if (PWA_CONFIG.cache.routes.stalewhilerevalidate.active) {
        importScripts(SW_DIR + '/cache-routes-stalewhilerevalidate-sw.js');
    }

    // Import Cache Routes Network First Service Worker
    if (PWA_CONFIG.cache.routes.networkfirst.active) {
        importScripts(SW_DIR + '/cache-routes-networkfirst-sw.js');
    }

    // Import Cache Routes Cache First Service Worker
    if (PWA_CONFIG.cache.routes.cachefirst.active) {
        importScripts(SW_DIR + '/cache-routes-cachefirst-sw.js');
    }

    // Import Cache Routes Cache Only Service Worker
    if (PWA_CONFIG.cache.routes.cacheonly.active) {
        importScripts(SW_DIR + '/cache-routes-cacheonly-sw.js');
    }

    // Import Cache Custom Script Service Worker
    if (PWA_CONFIG.cache.custom.active) {
        importScripts(PWA_CONFIG.cache.custom.script);
    }

} else {
    console.error('PWA: Workbox didn\'t load.');
}

// Import Push Service Worker
if (PWA_CONFIG.push.active) {
    importScripts(SW_DIR + '/push-sw.js');
}

// Import Notificationclick Service Worker
if (PWA_CONFIG.push.notification.notificationclick.active) {
    importScripts(SW_DIR + '/notificationclick-sw.js');
}
