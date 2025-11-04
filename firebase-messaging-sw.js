importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCUuzbpOeZOFHxrFzL3gijeKtRw9e_veHM",
  projectId: "alvanyos-szolgalat",
  messagingSenderId: "1037601102689",
  appId: "1:1037601102689:web:e4f22b9df0f8360f6d4320"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background message received: ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
