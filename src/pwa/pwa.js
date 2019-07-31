/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 *
 * @param {Object} PWA_CONFIG   PWA global configs
 * @param {Object} notification Notification native class.
 */
const PWA = ((PWA_CONFIG, notification) => {

    /**
     * Service Workers
     */
    class ServiceWorker {

        /**
         * Register principal Service Worker
         * @return {undefined}
         */
        static register() {
            if (Navigator.isSupportedServiceWorker()) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register(PWA_CONFIG.sw.filepath)
                        .then((registration) => {
                            console.log('PWA: Service Worker ready!');
                            registration.update();
                        })
                        .catch((error) => {
                            console.error('PWA: Service Worker registration failed with ' + error);
                        })
                    ;
                });
            }
        }

        /**
         * Get registered Service Worker
         * @param  {Function} callback Return callback with registration object.
         * @return {Object}   registration object
         */
        static getRegistration(callback) {
            if (Navigator.isSupportedServiceWorker()) {
                navigator.serviceWorker.getRegistration()
                    .then((registration) => {
                        callback(registration);
                    })
                    .catch((error) => {
                        console.error('PWA: Service Worker don\'t registered: ' + error);
                    })
                ;
            }
        }
    }

    /**
     * Notifications
     */
    class Notification {

        /**
         * Show notification
         * @param  {String}   title    Notification title.
         * @param  {Object}   options  Options of navigator.serviceWorker.registration.showNotification().
         * @param  {Function} callback Return callback with boolean
         * @return {Boolean}
         */
        static show(title, options, callback) {
            if (this.isGranted()) {
                ServiceWorker.getRegistration((registration) => {
                    if (registration) {
                        registration.showNotification(title, options);
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
            }
        }

        /**
         * Notifications permission with default status
         * @return {Boolean} Return true if is default status.
         */
        static isDefault() {
            if (this.getPermission() == 'default') {
                console.log('PWA: Permission for Notifications are with default status.');
                return true;
            }
            return false;
        }

        /**
         * Notifications permission was granted
         * @return {Boolean} Return true if is granted.
         */
        static isGranted() {
            if (this.getPermission() == 'granted') {
                console.log('PWA: Permission for Notifications was granted!');
                return true;
            }
            return false;
        }

        /**
         * Notifications permission was blocked
         * @return {Boolean} Return true if is blocked
         */
        static isBlocked() {
            if (this.getPermission() == 'blocked') {
                console.warn('PWA: Permission for Notifications was blocked.');
                return true;
            }
            return false;
        }

        /**
         * Notifications are denied
         * @return {Boolean} Return true if is denied
         */
        static isDenied() {
            if (this.getPermission() == 'denied') {
                console.warn('PWA: Permission for Notifications was denied.');
                return true;
            }
            return false;
        }

        /**
         * Displays a pop-up message from the browser requesting permission to allow notifications.
         * @param  {Function} callback Return callback with status string.
         * @return {String}
         */
        static requestPermission(callback) {
            if (Navigator.isSupportedNotification()) {
                notification.requestPermission((status) => {
                    console.log('PWA: Notification permission status:', status);
                    callback(status);
                });
            }
        }

        /**
         * Get notifications permission
         * @return {(String|null)} Return string ('granted'|'blocked'|'denied') or null.
         */
        static getPermission() {
            if (Navigator.isSupportedNotification()) {
                return notification.permission;
            }
            return null;
        }
    }

    /**
     * Push Manager
     */
    class Push {

        /**
         * Subscribe to Push and send to Server API
         * @param  {Function} callback Return callback with subscription object.
         * @return {Object}   subscription
         */
        static subscribe(callback) {
            if (Navigator.isSupportedServiceWorker()) {
                ServiceWorker.getRegistration((registration) => {
                    if (registration) {
                        registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: Helper.urlBase64ToUint8Array(PWA_CONFIG.push.server.public_key)
                        })
                            .then((subscription) => {
                                console.log('PWA: Subscribed to push service!');
                                Server.sendSubscription(subscription, 'POST');
                                callback(subscription);
                            })
                            .catch((error) => {
                                if (!Notification.isDenied()) {
                                    console.error('PWA: Unable to subscribe to Push', error);
                                }
                            })
                        ;
                    }
                });
            }
        }

        /**
         * Unsubscribe to Push and send to Server API
         * @param  {Function} callback Return callback with boolean
         * @return {Boolean}
         */
        static unsubscribe(callback) {
            this.getSubscription((subscription) => {
                if (subscription) {
                    Server.sendSubscription(subscription, 'DELETE');
                    subscription.unsubscribe();
                    console.log('PWA: Unsubscribed to push service!');
                    callback(true);
                } else {
                    callback(false);
                }
            });
        }

        /**
         * Update the subscription to Push and send to Server API
         * @param  {Function} callback Return callback with boolean
         * @return {Boolean}
         */
        static updateSubscription(callback) {
            this.getSubscription((subscription) => {
                if (subscription) {
                    Server.sendSubscription(subscription, 'PUT');
                    console.log('PWA: Update the subscription to push service!');
                    callback(true);
                } else {
                    callback(false);
                }
            });
        }

        /**
         * Get subscription object
         * @param  {Function} callback Return callback with subscription object or null.
         * @return {Object|null}
         */
        static getSubscription(callback) {
            if (Navigator.isSupportedServiceWorker()) {
                ServiceWorker.getRegistration((registration) => {
                    if (registration) {
                        registration.pushManager.getSubscription().then((subscription) => {
                            if (subscription === null) {
                                console.error('PWA: Not subscribed to push service!');
                                callback(null);
                            } else {
                                callback(subscription);
                            }
                        });
                    }
                });
            }
        }
    }

    /**
     * Navigator
     */
    class Navigator {

        /**
         * Navigator support Service Workers
         * @return {Boolean}
         */
        static isSupportedServiceWorker() {
            if ('serviceWorker' in navigator) {
                return true;
            }
            console.error('PWA: This browser does not support service workers.');
            return false;
        }

        /**
         * Navigator support Notifications
         * @return {Boolean}
         */
        static isSupportedNotification() {
            if ('Notification' in window && navigator.serviceWorker) {
                return true;
            }
            console.error('PWA: This browser does not support Notifications.');
            return false;
        }

        /**
         * Navigator is offline
         * @return {Boolean}
         */
        static isOffline() {
            if (navigator.onLine) {
                return false;
            }
            return true;
        }

        /**
         * Clear Cache of Navigator
         * @return {undefined}
         */
        static clearCache() {
            if ('caches' in window) {
                caches.keys().then((names) => {
                    for (let name of names) {
                        caches.delete(name);
                    }
                });
                console.log('PWA: Cache cleared!');
            } else {
                console.error('PWA: This browser does not support Caches API.');
            }
        }
    }

    /**
     * Server
     */
    class Server {

        /**
         * Send data to API Server
         * @param  {String} endpoint URL of endpoint of server API
         * @param  {String} method   ('GET'|'POST'|'PUT'|'DELETE')
         * @param  {(ArrayBuffer|ArrayBufferView|Blob|File|String|URLSearchParams|FormData)} body
         * @return {Object} Return Promise object
         */
        static send(endpoint, method, body) {
            return fetch(endpoint, {
                method: method,
                body: body
            });
        }

        /**
         * Send subscription data to API Server
         * @param  {Object} subscription Subscription object
         * @param  {String} method       ('POST'|'PUT'|'DELETE')
         * @return {Object} Return       Promise object
         */
        static sendSubscription(subscription, method) {
            const key = subscription.getKey('p256dh');
            const token = subscription.getKey('auth');
            const contentEncoding = (PushManager.supportedContentEncodings || ['aesgcm'])[0];

            return this.send(PWA_CONFIG.push.server.endpoint, method, JSON.stringify({
                endpoint: subscription.endpoint,
                publicKey: key ? btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                authToken: token ? btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null,
                contentEncoding,
            }));
        }
    }

    /**
     * Helpers
     */
    class Helper {

        /**
         * Covert urlBase64 To Uint8Array
         * @param  {String}     base64String base64 string
         * @return {Uint8Array} Uint8Array
         */
        static urlBase64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');
            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);
            for (var i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }
    }

    return {
        ServiceWorker,
        Notification,
        Push,
        Navigator,
        Server,
        Helper
    };

}) (PWA_CONFIG, Notification);
