// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the Service Worker by passing in the messagingSenderId.
// Replace with your project's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyCUuzbpOeZOFHxrFzL3gijeKtRw9e_veHM",
    authDomain: "alvanyos-szolgalat.firebaseapp.com",
    projectId: "alvanyos-szolgalat",
    storageBucket: "alvanyos-szolgalat.firebasestorage.app",
    messagingSenderId: "1037601102689",
    appId: "1:1037601102689:web:e4f22b9df0f8360f6d4320"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});