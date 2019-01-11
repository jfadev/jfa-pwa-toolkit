# jfa-pwa-toolkit
Build lightning fast Progressive Web Apps for any website with only simple configs.

Note: This project is **Beta**

## Features
* Web App Manifest
* Icons Structure Files
* Precaching
* Caching Strategies
* Push Notifications

## Examples
[See our demo here](demo-app/src/example/Example.react.js)

## Requirements
* [Workbox](https://github.com/GoogleChrome/workbox)


## Getting Started

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
**Attention** with the paths of icons if you decided to move the `pwa` folder
```json
{
    ...
    "name": "Your App Name",
    ...
    "short_name": "Your App Short Name",
    "description": "Your App Description.",
    "orientation": "any",
    "theme_color": "#000",
    "background_color": "#000",
    ...
    "icons": [{
            "src": "/pwa/icons/windows10/Square71x71Logo.scale-400.png",
            "sizes": "284x284"
        },
        ...
    ]
}
```

Edit the config file `/pwa/config.js`.
**Attention** with the paths of icons if you decided to move the `pwa` folder
```javascript
const PWA_CONFIG = {

    /**
     * App config
     */
    app: {
        name: 'your-app-name', // App name
        version: 'v1', // App version
    },

    /**
     * Service Worker config
     */
    sw: {
        filepath: '/sw.js', // Main service worker filepath (always root of project)
        offline_route: '/pwa/errors/offline/', // Route of offline page
    },

    /**
     * Push manager config
     */
    push: {
        active: true,
        server: {
            public_key: 'YOURAPIPUBLICKEY', // API public key
            endpoint: '/api/push/subscription/', // Subscription API endpoint
        },
        notification: {
            title: 'Your App Name', // Title of notifications from the server
            options: { // Options object same that showNotification() options.
                body: '',
                icon: '/pwa/icons/firefox/firefox-general-64-64.png',
                vibrate: [100, 50, 100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: '1',
                    clickUrl: '',
                },
            },
            notificationclick: {
                active: true,
            }
        }
    },

    /**
     * Cache config
     */
    cache: {
        images: {
            active: true,
            maxentries: 500,
            maxageseconds: 365 * 24 * 60 * 60,
        },
        statics: {
            active: true,
            maxentries: 500,
            maxageseconds: 365 * 24 * 60 * 60,
        },
        fonts: {
            active: true,
            maxentries: 500,
            maxageseconds: 365 * 24 * 60 * 60,
        },
        routes: {
            networkonly: {
                active: true,
                regex: /\/(?:login|logout|perfil)\//,
            },
            stalewhilerevalidate: {
                active: true,
                regex: /\/noticias\/.*/,
            },
            networkfirst: {
                active: true,
                regex: /.*/,
            },
            cachefirst: {
                active: false,
                // regex: /.*/,
                // maxentries: 500,
                // maxageseconds: 365 * 24 * 60 * 60,
            },
            cacheonly: {
                active: false,
                // regex: /.*/,
            },
        },
        custom: {
            active: false,
            script: '',
        },
    },

    /**
     * Precache config
     */
    precache: {
        active: true,
        routes: [
            '/assets/example.css',
            '/assets/example.png',
            '/assets/example.js',
        ],
    },
}
```



## License
JFA PWA Toolkit is MIT licensed, as found in the [LICENSE](LICENSE) file.
