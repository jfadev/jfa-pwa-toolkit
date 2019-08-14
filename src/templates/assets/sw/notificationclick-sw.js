/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

// Listen notificationclick events
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
