// firebase-messaging-sw.js
mportScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);

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

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});