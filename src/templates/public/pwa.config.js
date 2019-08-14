/**
 *     _  __      ___
 *  _ | |/ _|__ _|   \ _____ __
 * | || |  _/ _` | |) / -_) V /
 *  \__/|_| \__,_|___/\___|\_/
 *
 * Copyright © 2019 Jordi Fernandes Alves
 * https://jordifernandes.com
 *
 * pwa.config.js (2019-05-23T15:35:14-03:00)
 *
 * @package:   jfa-pwa-toolkit
 * @author:    Jordi Fernandes Alves <jfadev@gmail.com>
 * @version:   1.0.0
 * @license:   MIT License
 * @link:      https://github.com/jfadev/jfa-pwa-toolkit/
 * @docs:      https://github.com/jfadev/jfa-pwa-toolkit/blob/master/README.md
 */


/**
 * Global Configs
 */
const PWA_CONFIG = {

    /* App config */
    /**************/
    app: {
        /* App name */
        name: '{{app-name}}',
        /* App version */
        version: '{{app-version}}',
    },

    /* Service Worker config */
    /*************************/
    sw: {
        /* Main service worker filepath (always root of project) */
        filepath: '/sw.js',
        /* Route of offline page */
        offline_route: '/pwa/errors/offline/',
    },

    /* Push manager config */
    /***********************/
    push: {
        /* Enable/disable push notifications */
        active: false,
        /* Push notification server config */
        server: {
            /* API public key */
            public_key: 'YOURAPIPUBLICKEY',
            /* Subscription API endpoint */
            endpoint: '/api/push/subscription/',
        },
        /* Notification config */
        notification: {
            /* Title of notifications from the server */
            title: '{{app-name}}',
            /* Options object same that showNotification() options
             * (https://developer.mozilla.org/es/docs/Web/API/ServiceWorkerRegistration/showNotification) */
            options: {
                /* A string representing an extra content to display within the notification */
                body: '',
                /* The URL of an image to be used as an icon by the notification */
                icon: '{{icons-dir}}firefox/firefox-general-64-64.png',
                /* A vibration pattern to run with the display of the notification.
                 * A vibration pattern can be an array with as few as one member.
                 * The values are times in milliseconds where the even indices (0, 2, 4, etc.)
                 * indicate how long to vibrate and the odd indices indicate how long to pause.
                 * For example [300, 100, 400] would vibrate 300ms, pause 100ms, then vibrate 400ms. */
                vibrate: [100, 50, 100],
                /* Arbitrary data that you want associated with the notification. This can be of any data type */
                data: {
                    // dateOfArrival: Date.now(),
                    // primaryKey: '1',
                    // clickUrl: '',
                },
            },
            /* Notification click event */
            notificationclick: {
                /* Enable/disable notification click event */
                active: false,
            }
        }
    },

    /* Cache config */
    /****************/
    cache: {
        /* Images cache config (png|jpg|jpeg|svg|gif) */
        images: {
            /* Enable/disable images caching */
            active: false,
            /* The maximum number of entries to cache.
             * Entries used the least will be removed as the maximum is reached. */
            // maxentries: 500,
            /* The maximum age of an entry before it's treated as stale and removed. */
            // maxageseconds: 365 * 24 * 60 * 60,
        },
        /* Static files cache config (js|json|css) */
        statics: {
            /* Enable/disable static files caching */
            active: false,
            /* The maximum number of entries to cache.
             * Entries used the least will be removed as the maximum is reached. */
            // maxentries: 500,
            /* The maximum age of an entry before it's treated as stale and removed. */
            // maxageseconds: 365 * 24 * 60 * 60,
        },
        /* Fonts cache config (eot|ttf|woff|woff2|otf)
         * with cross-origin requests example google fonts */
        fonts: {
            /* Enable/disable fonts caching */
            active: false,
            /* The maximum number of entries to cache.
             * Entries used the least will be removed as the maximum is reached. */
            // maxentries: 500,
            /* The maximum age of an entry before it's treated as stale and removed. */
            // maxageseconds: 365 * 24 * 60 * 60,
        },
        /* Cache your app routes with different strategies */
        routes: {
            /* Force the response to come from the network */
            networkonly: {
                /* Enable/disable network only routes caching */
                active: false,
                /* Matching routes with a Regular Expression */
                // regex: /\/(?:login|logout)\//,
            },
            /* Resources are requested from both the cache and the network in parallel.
             * The strategy will respond with the cached version if available,
             * otherwise wait for the network response.
             * The cache is updated with the network response with each successful request. */
            stalewhilerevalidate: {
                /* Enable/disable stale while revalidate routes caching */
                active: false,
                // regex: /\/news\/.*/,
            },
            /* Network first request strategy */
            networkfirst: {
                /* Enable/disable network first routes caching */
                active: false,
                // regex: /.*/,
            },
            /* Cache first request strategy */
            cachefirst: {
                /* Enable/disable cache first routes caching */
                active: false,
                // regex: /.*/,
                // maxentries: 500,
                // maxageseconds: 365 * 24 * 60 * 60,
            },
            /* Force the response to come from the browser */
            cacheonly: {
                active: false,
                // regex: /.*/,
            },
        },
        /* Add your custom service worker for load it */
        custom: {
            /* Enable/disable custom service worker */
            active: false,
            /* service worker script route */
            // script: '/pwa/sw/my-custom-sw.js',
        }
    },

    /* Precache config */
    /*******************/
    precache: {
        /* Enable/disable precaching */
        active: false,
        /* Routes to */
        routes: [
            // '/assets/example.css',
            // '/assets/example.png',
            // '/assets/example.js',
        ]
    }
};
