var firebaseConfig = {
    apiKey: "AIzaSyBG4VrH0v9IGX-GpRxi25ozSqUEcmAvNCE",
    authDomain: "test-264010.firebaseapp.com",
    databaseURL: "https://test-264010.firebaseio.com",
    projectId: "test-264010",
    storageBucket: "test-264010.appspot.com",
    messagingSenderId: "612235124443",
    appId: "1:612235124443:web:4b94bb947ccb31e582f6fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();


const signInButton = document.querySelector('#signIn');
const signOutButton = document.querySelector('#signOut');

signInButton.addEventListener("click",(e)=>{
    e.preventDefault();
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   console.log("You have Signed in");
    //   // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   console.log("Error!",errorMessage);
    //   // ...
    // });
    firebase.auth().signInWithRedirect(provider);
    //add the code below to your previous lines
    firebase.auth().getRedirectResult().then(function(authData) {
        console.log(authData);
    }).catch(function(error) {
        console.log(error);
    });
    
});