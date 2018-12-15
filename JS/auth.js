
var config = {
    apiKey: "AIzaSyB8p7917au3-Nfudds5_po0iZyM7RJHgGc",
    authDomain: "database-shary.firebaseapp.com",
    databaseURL: "https://database-shary.firebaseio.com",
    projectId: "database-shary",
    storageBucket: "database-shary.appspot.com",
    messagingSenderId: "912855744314"
  };
  firebase.initializeApp(config);


  function signOut(){

    firebase.auth().signOut.
    then(()=>{
        localStorage.getItem('uaerInfo',JSON.stringify({user:null}))

        window.location='../Pages/signIn.html'

    })
    .catch((error)=>{
        errMsg=error.message;

        swal({
            title:'Error',
            text:errMsg,
            icon:'error',
            button:'Ok'

        });

    });

  }
