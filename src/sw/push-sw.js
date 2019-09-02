/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * push-sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/* Listen push events from the server */
self.addEventListener('push', (e) => {
    if (self.Notification && self.Notification.permission === 'granted') {
        if (e.data) {
            let options = PWA_CONFIG.push.notification.options;
            let data = e.data.json();
            options.body = data.text;
            options.data.clickUrl = data.url;

            e.waitUntil(
                self.registration.showNotification(
                    PWA_CONFIG.push.notification.title,
                    options
                )
            );
        }
    }
});
