"use strict";self.addEventListener("push",function(a){if(self.Notification&&"granted"===self.Notification.permission&&a.data){var b=PWA_CONFIG.push.notification.options,c=a.data.json();b.body=c.text,b.data.clickUrl=c.url,a.waitUntil(self.registration.showNotification(PWA_CONFIG.push.notification.title,b))}});