# API Reference


## Classes

<dl>
<dt><a href="#ServiceWorker">ServiceWorker</a></dt>
<dd><p>Service Workers</p>
</dd>
<dt><a href="#Notification">Notification</a></dt>
<dd><p>Notifications</p>
</dd>
<dt><a href="#Push">Push</a></dt>
<dd><p>Push Manager</p>
</dd>
<dt><a href="#Navigator">Navigator</a></dt>
<dd><p>Navigator</p>
</dd>
<dt><a href="#Server">Server</a></dt>
<dd><p>Server</p>
</dd>
<dt><a href="#Helper">Helper</a></dt>
<dd><p>Helpers</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#PWA">PWA</a></dt>
<dd><p>Global const.</p>
</dd>
</dl>

<a name="ServiceWorker"></a>

## ServiceWorker
Service Workers

**Kind**: global class  

* [ServiceWorker](#ServiceWorker)
    * [.register()](#ServiceWorker.register) ⇒ <code>undefined</code>
    * [.getRegistration(callback)](#ServiceWorker.getRegistration) ⇒ <code>Object</code>

<a name="ServiceWorker.register"></a>

### ServiceWorker.register() ⇒ <code>undefined</code>
Register principal Service Worker

**Kind**: static method of [<code>ServiceWorker</code>](#ServiceWorker)  
<a name="ServiceWorker.getRegistration"></a>

### ServiceWorker.getRegistration(callback) ⇒ <code>Object</code>
Get registered Service Worker

**Kind**: static method of [<code>ServiceWorker</code>](#ServiceWorker)  
**Returns**: <code>Object</code> - registration object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with registration object.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Notification"></a>

## Notification
Notifications

**Kind**: global class  

* [Notification](#Notification)
    * [.show(title, options, callback)](#Notification.show) ⇒ <code>Boolean</code>
    * [.isDefault()](#Notification.isDefault) ⇒ <code>Boolean</code>
    * [.isGranted()](#Notification.isGranted) ⇒ <code>Boolean</code>
    * [.isBlocked()](#Notification.isBlocked) ⇒ <code>Boolean</code>
    * [.isDenied()](#Notification.isDenied) ⇒ <code>Boolean</code>
    * [.requestPermission(callback)](#Notification.requestPermission) ⇒ <code>String</code>
    * [.getPermission()](#Notification.getPermission) ⇒ <code>String</code> \| <code>null</code>

<a name="Notification.show"></a>

### Notification.show(title, options, callback) ⇒ <code>Boolean</code>
Show notification

**Kind**: static method of [<code>Notification</code>](#Notification)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>title</td><td><code>String</code></td><td><p>Notification title.</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Options of navigator.serviceWorker.registration.showNotification().</p>
</td>
    </tr><tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with boolean</p>
</td>
    </tr>  </tbody>
</table>

<a name="Notification.isDefault"></a>

### Notification.isDefault() ⇒ <code>Boolean</code>
Notifications permission with default status

**Kind**: static method of [<code>Notification</code>](#Notification)  
**Returns**: <code>Boolean</code> - Return true if is default status.  
<a name="Notification.isGranted"></a>

### Notification.isGranted() ⇒ <code>Boolean</code>
Notifications permission was granted

**Kind**: static method of [<code>Notification</code>](#Notification)  
**Returns**: <code>Boolean</code> - Return true if is granted.  
<a name="Notification.isBlocked"></a>

### Notification.isBlocked() ⇒ <code>Boolean</code>
Notifications permission was blocked

**Kind**: static method of [<code>Notification</code>](#Notification)  
**Returns**: <code>Boolean</code> - Return true if is blocked  
<a name="Notification.isDenied"></a>

### Notification.isDenied() ⇒ <code>Boolean</code>
Notifications are denied

**Kind**: static method of [<code>Notification</code>](#Notification)  
**Returns**: <code>Boolean</code> - Return true if is denied  
<a name="Notification.requestPermission"></a>

### Notification.requestPermission(callback) ⇒ <code>String</code>
Displays a pop-up message from the browser requesting permission to allow notifications.

**Kind**: static method of [<code>Notification</code>](#Notification)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with status string.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Notification.getPermission"></a>

### Notification.getPermission() ⇒ <code>String</code> \| <code>null</code>
Get notifications permission

**Kind**: static method of [<code>Notification</code>](#Notification)  
**Returns**: <code>String</code> \| <code>null</code> - Return string ('granted'|'blocked'|'denied') or null.  
<a name="Push"></a>

## Push
Push Manager

**Kind**: global class  

* [Push](#Push)
    * [.subscribe(callback)](#Push.subscribe) ⇒ <code>Object</code>
    * [.unsubscribe(callback)](#Push.unsubscribe) ⇒ <code>Boolean</code>
    * [.updateSubscription(callback)](#Push.updateSubscription) ⇒ <code>Boolean</code>
    * [.getSubscription(callback)](#Push.getSubscription) ⇒ <code>Object</code> \| <code>null</code>

<a name="Push.subscribe"></a>

### Push.subscribe(callback) ⇒ <code>Object</code>
Subscribe to Push and send to Server API

**Kind**: static method of [<code>Push</code>](#Push)  
**Returns**: <code>Object</code> - subscription  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with subscription object.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Push.unsubscribe"></a>

### Push.unsubscribe(callback) ⇒ <code>Boolean</code>
Unsubscribe to Push and send to Server API

**Kind**: static method of [<code>Push</code>](#Push)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with boolean</p>
</td>
    </tr>  </tbody>
</table>

<a name="Push.updateSubscription"></a>

### Push.updateSubscription(callback) ⇒ <code>Boolean</code>
Update the subscription to Push and send to Server API

**Kind**: static method of [<code>Push</code>](#Push)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with boolean</p>
</td>
    </tr>  </tbody>
</table>

<a name="Push.getSubscription"></a>

### Push.getSubscription(callback) ⇒ <code>Object</code> \| <code>null</code>
Get subscription object

**Kind**: static method of [<code>Push</code>](#Push)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>callback</td><td><code>function</code></td><td><p>Return callback with subscription object or null.</p>
</td>
    </tr>  </tbody>
</table>

<a name="Navigator"></a>

## Navigator
Navigator

**Kind**: global class  

* [Navigator](#Navigator)
    * [.isSupportedServiceWorker()](#Navigator.isSupportedServiceWorker) ⇒ <code>Boolean</code>
    * [.isSupportedNotification()](#Navigator.isSupportedNotification) ⇒ <code>Boolean</code>
    * [.isOffline()](#Navigator.isOffline) ⇒ <code>Boolean</code>
    * [.clearCache()](#Navigator.clearCache) ⇒ <code>undefined</code>

<a name="Navigator.isSupportedServiceWorker"></a>

### Navigator.isSupportedServiceWorker() ⇒ <code>Boolean</code>
Navigator support Service Workers

**Kind**: static method of [<code>Navigator</code>](#Navigator)  
<a name="Navigator.isSupportedNotification"></a>

### Navigator.isSupportedNotification() ⇒ <code>Boolean</code>
Navigator support Notifications

**Kind**: static method of [<code>Navigator</code>](#Navigator)  
<a name="Navigator.isOffline"></a>

### Navigator.isOffline() ⇒ <code>Boolean</code>
Navigator is offline

**Kind**: static method of [<code>Navigator</code>](#Navigator)  
<a name="Navigator.clearCache"></a>

### Navigator.clearCache() ⇒ <code>undefined</code>
Clear Cache of Navigator

**Kind**: static method of [<code>Navigator</code>](#Navigator)  
<a name="Server"></a>

## Server
Server

**Kind**: global class  

* [Server](#Server)
    * [.send(endpoint, method, body)](#Server.send) ⇒ <code>Object</code>
    * [.sendSubscription(subscription, method)](#Server.sendSubscription) ⇒ <code>Object</code>

<a name="Server.send"></a>

### Server.send(endpoint, method, body) ⇒ <code>Object</code>
Send data to API Server

**Kind**: static method of [<code>Server</code>](#Server)  
**Returns**: <code>Object</code> - Return Promise object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>endpoint</td><td><code>String</code></td><td><p>URL of endpoint of server API</p>
</td>
    </tr><tr>
    <td>method</td><td><code>String</code></td><td><p>(&#39;GET&#39;|&#39;POST&#39;|&#39;PUT&#39;|&#39;DELETE&#39;)</p>
</td>
    </tr><tr>
    <td>body</td><td><code>ArrayBuffer</code> | <code>ArrayBufferView</code> | <code>Blob</code> | <code>File</code> | <code>String</code> | <code>URLSearchParams</code> | <code>FormData</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="Server.sendSubscription"></a>

### Server.sendSubscription(subscription, method) ⇒ <code>Object</code>
Send subscription data to API Server

**Kind**: static method of [<code>Server</code>](#Server)  
**Returns**: <code>Object</code> - Return       Promise object  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>subscription</td><td><code>Object</code></td><td><p>Subscription object</p>
</td>
    </tr><tr>
    <td>method</td><td><code>String</code></td><td><p>(&#39;POST&#39;|&#39;PUT&#39;|&#39;DELETE&#39;)</p>
</td>
    </tr>  </tbody>
</table>

<a name="Helper"></a>

## Helper
Helpers

**Kind**: global class  
<a name="Helper.urlBase64ToUint8Array"></a>

### Helper.urlBase64ToUint8Array(base64String) ⇒ <code>Uint8Array</code>
Covert urlBase64 To Uint8Array

**Kind**: static method of [<code>Helper</code>](#Helper)  
**Returns**: <code>Uint8Array</code> - Uint8Array  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>base64String</td><td><code>String</code></td><td><p>base64 string</p>
</td>
    </tr>  </tbody>
</table>

<a name="PWA"></a>

## PWA

**Kind**: global constant  
**Version**: 0.1  
**Author**: Jordi Fernandes Alves <jfadev@gmail.com>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>PWA_CONFIG</td><td><code>Object</code></td><td><p>PWA global configs</p>
</td>
    </tr><tr>
    <td>notification</td><td><code>Object</code></td><td><p>Notification native class.</p>
</td>
    </tr>  </tbody>
</table>
