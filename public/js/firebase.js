let firebaseConfig = {
    apiKey: "AIzaSyBpj0gUmceH98FA7NrnJXEDido7d88eNoY",
    authDomain: "newswebsite-cd230.firebaseapp.com",
    projectId: "newswebsite-cd230",
    storageBucket: "newswebsite-cd230.appspot.com",
    messagingSenderId: "901726859367",
    appId: "1:901726859367:web:25dc9230dea082426ce4c2"
  };
  
  // Initialize firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let auth = firebase.auth();

  const logoutUser = () => {
      auth.signOut();
      location.reload();
  }