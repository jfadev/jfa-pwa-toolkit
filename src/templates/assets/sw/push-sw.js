/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Listen push events from the server
self.addEventListener('push', (e) => {
    if (self.Notification && self.Notification.permission === 'granted') {
        if (e.data) {
            let options = PWA_CONFIG.push.notification.options;
            let data = e.data.json();
            options.body = data.text;
            options.data.clickUrl = data.url;

            e.waitUntil(
                self.registration.showNotification(PWA_CONFIG.push.notification.title, options)
            );
        }
    }
});
