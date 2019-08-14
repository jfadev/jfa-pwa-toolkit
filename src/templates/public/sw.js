/**
 * JFA PWA Toolkit
 * https://github.com/jfadev/jfa-pwa-toolkit
 * license that can be found in the LICENSE file.
 *
 * @author Jordi Fernandes Alves <jfadev@gmail.com>
 * @version 0.1
 */

const PWA_ROOT = '/pwa';

// Import configs
importScripts('{{config-dir}}pwa.config.js');

// Import Main Service Worker
importScripts('{{sw-dir}}sw.js');
