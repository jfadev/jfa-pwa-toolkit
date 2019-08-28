# jfa-pwa-toolkit
Add Progressive Web Apps (PWA) Features to Any website very Easy and Fast ⚡️


Set a simple configuration file or exploit more features with the easy-to-use library in your js code.

Note: This project is **Beta**

## Features
* Web App Manifest
* Icons Structure Files
* Add to Home Screen (A2HS)
* Offline Work Mode
* Precaching
* Caching Strategies
* Push Notifications

## Demo
* [Live Demo](https://pwa-toolkit-demo.jordifernandes.com)
* [Demo Repository](https://github.com/jfadev/jfa-pwa-toolkit-demo)

<!-- ## Examples
[See our demo here](demo-app/src/example/Example.react.js) -->

## Requirements
* [Workbox](https://github.com/GoogleChrome/workbox)

This package uses Workbox internally but you do not need to import it.

## Starting with an Example
* 🇬🇧 [Example in English](https://jordifernandes.com/jfa-pwa-toolkit/)
* 🇪🇸 [Ejemplo en Español](https://jordifernandes.com/es/jfa-pwa-toolkit/)
* 🇫🇷 [Exemple en Français](https://jordifernandes.com/fr/jfa-pwa-toolkit/)
* 🇧🇷 [Exemplo em Português](https://jordifernandes.com/pt/jfa-pwa-toolkit/)

## Getting Started

Clone the repository
```console
$ git clone git@github.com:jfadev/jfa-pwa-toolkit.git
```
Create the app icons manually or with the tool [PWA Image Generator](https://www.pwabuilder.com/imageGenerator) and replace files in `/pwa/icons/`.

If you have moved the `pwa` folder somewhere else in your project, edit the `PWA_ROOT` variable in your `/sw.js` file. It is important that the file `sw.js` is in the root of your site.

Edit the template of your project to include the metatags and scripts needed as in the following example.
**Attention** with the paths if you decided to move the `pwa` folder
```html
<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <!-- Theme color -->
    <meta name="theme-color" content="#000" />

    <!-- PWA Manifest -->
    <link rel="manifest" href="/pwa/manifest.json"></link>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/pwa/icons/chrome/chrome-favicon-16-16.png">

    <!-- Only for iOS: Configs -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="jfaPWAtk">
    <!-- Icons -->
    <link rel="apple-touch-icon" href="/pwa/icons/ios/ios-appicon-76-76.png">
    <link rel="apple-touch-icon" href="/pwa/icons/ios/ios-appicon-120-120.png" sizes="120x120">
    <link rel="apple-touch-icon" href="/pwa/icons/ios/ios-appicon-152-152.png" sizes="152x152">
    <link rel="apple-touch-icon" href="/pwa/icons/ios/ios-appicon-180-180.png" sizes="180x180">
    <link rel="apple-touch-icon" href="/pwa/icons/ios/ios-appicon-1024-1024.png" sizes="1024x1024">
    <!-- Splash Screen -->
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-640-960.png" sizes="640x960">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-640-1136.png" sizes="640x1136">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-750-1334.png" sizes="750x1334">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-768-1024.png" sizes="768x1024">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-1024-768.png" sizes="1024x768">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-1242-2208.png" sizes="1242x2208">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-1334-750.png" sizes="1334x750">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-1536-2048.png" sizes="1536x2048">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-2048-1536.png" sizes="2048x1536">
    <link rel="apple-touch-startup-image" href="/pwa/icons/ios/ios-launchimage-2208-1242.png" sizes="2208x1242">

    <title>JFA PWA Toolkit Example</title>

</head>
<body>

    <!-- Load JFA PWA Toolkit Configs -->
    <script type="text/javascript" src="/pwa/config.js"></script>

    <!-- Load JFA PWA Toolkit Lib -->
    <script type="text/javascript" src="/pwa/pwa.js"></script>

    <!-- Register principal Service Worker -->
    <script type="text/javascript">
        PWA.ServiceWorker.register();
    </script>

</body>
</html>
```

Edit the manifest file `/pwa/manifest.json`. 
You can rename `manifest.json` to `app.webmanifest` if you prefer [Reccomended by W3C](https://w3c.github.io/manifest/#media-type-registration).
**Attention** with the paths of icons if you decided to move the `pwa` folder
```json
{
    "name": "Your App Name",

    "short_name": "Your App Short Name",
    "description": "Your App Description.",
    "orientation": "any",
    "theme_color": "#000",
    "background_color": "#000",

    "icons": [{
            "src": "/pwa/icons/windows10/Square71x71Logo.scale-400.png",
            "sizes": "284x284"
        },
    ]
}
```

Edit the config file `/pwa/config.js`.
**Attention** with the paths of icons if you decided to move the `pwa` folder
```javascript
const PWA_CONFIG = {

    // App config
    app: {
        // App name
        name: 'your-app-name',
        // App version
        version: 'v1',
    },

    // Service Worker config
    sw: {
        // Main service worker filepath (always root of project)
        filepath: '/sw.js',
        // Route of offline page
        offline_route: '/pwa/errors/offline/',
    },

    // Push manager config
    push: {
        // Enable/disable push notifications
        active: true,
        // Server config
        server: {
            // API public key
            public_key: 'YOURAPIPUBLICKEY',
            // Subscription API endpoint
            endpoint: '/api/push/subscription/',
        },
        // Notification config
        notification: {
            // Title of notifications from the server
            title: 'Your App Name',
            // Options object same that showNotification() options
            // (https://developer.mozilla.org/es/docs/Web/API/ServiceWorkerRegistration/showNotification)
            options: {
                // A string representing an extra content to display within the notification
                body: '',
                // he URL of an image to be used as an icon by the notification
                icon: '/pwa/icons/firefox/firefox-general-64-64.png',
                // A vibration pattern to run with the display of the notification.
                // A vibration pattern can be an array with as few as one member.
                // The values are times in milliseconds where the even indices (0, 2, 4, etc.)
                // indicate how long to vibrate and the odd indices indicate how long to pause.
                // For example [300, 100, 400] would vibrate 300ms, pause 100ms, then vibrate 400ms.
                vibrate: [100, 50, 100],
                // Arbitrary data that you want associated with the notification. This can be of any data type
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: '1',
                    clickUrl: '',
                },
            },
            // notification click event
            notificationclick: {
                // Enable/disable notification click event
                active: true,
            }
        }
    },

    // Cache config
    cache: {
        // Images cache config (png|jpg|jpeg|svg|gif)
        images: {
            // Enable/disable images caching
            active: true,
            // The maximum number of entries to cache.
            // Entries used the least will be removed as the maximum is reached.
            maxentries: 500,
            // The maximum age of an entry before it's treated as stale and removed.
            maxageseconds: 365 * 24 * 60 * 60,
        },
        // Static files cache config (js|json|css)
        statics: {
            // Enable/disable static files caching
            active: true,
            // The maximum number of entries to cache.
            // Entries used the least will be removed as the maximum is reached.
            maxentries: 500,
            // The maximum age of an entry before it's treated as stale and removed.
            maxageseconds: 365 * 24 * 60 * 60,
        },
        // Fonts cache config (eot|ttf|woff|woff2|otf)
        // with cross-origin requests example google fonts
        fonts: {
            // Enable/disable fonts caching
            active: true,
            // The maximum number of entries to cache.
            // Entries used the least will be removed as the maximum is reached.
            maxentries: 500,
            // The maximum age of an entry before it's treated as stale and removed.
            maxageseconds: 365 * 24 * 60 * 60,
        },
        routes: {
            // Force the response to come from the network
            networkonly: {
                // Enable/disable network only routes caching
                active: true,
                // Matching routes with a Regular Expression
                regex: /\/(?:login|logout)\//,
            },
	    // Resources are requested from both the cache and the network in parallel.
            // The strategy will respond with the cached version if available,
            // otherwise wait for the network response.
            // The cache is updated with the network response with each successful request.
            stalewhilerevalidate: {
                active: true,
                regex: /\/news\/.*/,
            },
	    // Network first request strategy.
            networkfirst: {
                active: true,
                regex: /.*/,
            },
	    // Cache first request strategy.
            cachefirst: {
                active: false,
                // regex: /.*/,
                // maxentries: 500,
                // maxageseconds: 365 * 24 * 60 * 60,
            },
	    // Force the response to come from the browser.
            cacheonly: {
                active: false,
                // regex: /.*/,
            },
        },
	// Add your custom service worker for load it.
        custom: {
            active: false,
            // service worker script route
	    // script: '/pwa/sw/my-custom-sw.js',
        },
    },

    // Precache config
    precache: {
        // Enable/disable precaching
        active: true,
        // Routes to
        routes: [
            '/assets/example.css',
            '/assets/example.png',
            '/assets/example.js',
        ],
    },
}
```

At this point your PWA is able to precache static resources, cache the different resources for offline access, icons, splash screen and add to home screen.


You may need more features, for this we will use the classes and methods offered by the global variable PWA that will allow us to do things like subscription to push notifications among other things.


## Code Examples

#### Button to subscribe to Push Notifications
```html
<button type="button" id="btn-subscription">
    Subscribe to recive Push Notifications
</button>
```
```javascript
document
    .getElementById('btn-subscription')
    .addEventListener('click', () => {
    	if (
            PWA.Notification.isDefault() ||
            PWA.Notification.isGranted()
        ) {
            PWA.Push.getSubscription((subscription) => {
                if (subscription) {
                    console.log('You are now subscribed to receive Push Notifications!');
                } else {
                    PWA.Push.subscribe((r) => {
                        console.log('Congratulations! You are subscribed to receive Push Notifications!');
                    });
                }
            });
        } else {
            console.log("You've turned off Push Notifications. Allow Push Notifications in your browser settings.");
        }	
    })
;
```

#### Checkbox toggle to subscribe/unsubscribe to Push Notifications
```html
<input type="checkbox" id="toggle-subscription"> Push Notifications
```
```javascript
document
    .getElementById('toggle-subscription')
    .addEventListener('change', () => {
    	if (
            PWA.Notification.isDefault() ||
            PWA.Notification.isGranted()
        ) {
            PWA.Push.getSubscription((subscription) => {
                if (subscription) {
                    PWA.Push.unsubscribe((r) => {
                        console.log('You have been unsubscribed to receive Push Notifications!');
                    });
                } else {
                    PWA.Push.subscribe((r) => {
                        console.log('You are now subscribed to receive Push Notifications!');
                    });
                }
            });
        } else {
            console.log("You've turned off Push Notifications. Allow Push Notifications in your browser settings.");
        }	
    })
;
```

#### Check the Notifications permissions

###### Default status 
```javascript
if (PWA.Notification.isDefault()) {
    console.log('Permission for Notifications are with default status.');
} else {
    console.log('Permission for Notifications are not with default status.');
}
```
###### Granted status 
```javascript
if (PWA.Notification.isGranted()) {
    console.log('Permission for Notifications was granted!');
} else {
    console.log('Permission for Notifications was not granted!');
}
```
###### Blocked status
```javascript
if (PWA.Notification.isBlocked()) {
    console.log('Permission for Notifications was blocked.');
} else {
    console.log('Permission for Notifications was not blocked.');
}
```
###### Denied status
```javascript
if (PWA.Notification.isDenied()) {
    console.log('Permission for Notifications was denied.');
} else {
    console.log('Permission for Notifications was not denied.');
}
```

#### Displays a pop-up requesting permission to allow Notifications
```javascript
PWA.Notification.requestPermission((status) => {
    console.log('Notification permission status:', status);
});
```

#### Get the Notifications permission status
```javascript
var permission = PWA.Notification.getPermission();
```

#### Show Notification sent by the browser
```javascript
const options = {
    body: 'Extra content to display within the notification',
    icon: '../images/touch/chrome-touch-icon-192x192.png'
};

PWA.Notification.show('Notification Title', options, sent => {
    if (sent) {
    	console.log('The Notification has been sent');
    }
});
```

#### Register the main service worker
```javascript
PWA.ServiceWorker.register();
```

#### Get the Registration object of the service worker
```javascript
PWA.ServiceWorker.getRegistration((registration) => {
    if (registration) {
    	console.log(registration);
    } else {
       console.log('The Service Worker is not registered!');
    }
});
```

#### Check if the browser support Service Workers
```javascript
if (PWA.Navigator.isSupportedServiceWorker()) {
    console.log('This browser support Service Workers!');
} else {
    console.log('This browser does not support Service Workers.');
}
```

#### Check if the browser support Notifications
```javascript
if (PWA.Navigator.isSupportedNotification()) {
    console.log('This browser support Notifications!');
} else {
    console.log('This browser does not support Notifications.');
}
```

#### Check if the browser is offline
```javascript
if (PWA.Navigator.isOffline()) {
    console.log('No Internet connection!');
} else {
    console.log('You have an Internet connection!');
}
```

#### Clear the browser app cache
```javascript
PWA.Navigator.clearCache();
```

## Documentation
* [API Reference](https://github.com/jfadev/jfa-pwa-toolkit/blob/master/docs/API.md)


## Playground
* [JSFiddle](https://jsfiddle.net/jfadev/5hsj1pgL/83/)


## License
JFA PWA Toolkit is MIT licensed, as found in the [LICENSE](LICENSE) file.
