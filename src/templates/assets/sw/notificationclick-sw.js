/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 * https://jordifernandes.com
 *
 * notificationclick-sw.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/* Listen notificationclick events */
self.addEventListener('notificationclick', (e) => {
    let notification = e.notification;
    let primaryKey = notification.data.primaryKey;
    let action = e.action;
    if (action === 'close') {
        notification.close();
    } else {
        clients.openWindow(notification.data.clickUrl);
        notification.close();
    }
});
