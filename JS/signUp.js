

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8p7917au3-Nfudds5_po0iZyM7RJHgGc",
    authDomain: "database-shary.firebaseapp.com",
    databaseURL: "https://database-shary.firebaseio.com",
    projectId: "database-shary",
    storageBucket: "database-shary.appspot.com",
    messagingSenderId: "912855744314"
  };
  firebase.initializeApp(config);

console.log(config)




function signUpFun(){
    let name=document.getElementById('name').value;

    let address=document.getElementById('address').value;

    let email=document.getElementById('email').value;

    let password=document.getElementById('password').value;

    // document.getElementById('loader').style.display='block';

    firebase.auth()
    .createUserWithEmailAndPassword(email,password)
    .then((success)=>{
        let userObj={
            name,
            address,
            email

        }
    

        let userUid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + userUid)
            .set(userObj)
            .then(() => {

                swal({
                    title:'Success',
                    text:"Ypour Account has been Created!",
                    icon:'success',
                    button:'Ok'
                });
                    window.location.href = '../Pages/signIn.html'
                })
        
    })
    .catch((error)=>{

        // document.getElementById("loaders").style.display = 'none'
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log(errorMessage)
        swal({
            title: "Error",
            text: errorMessage,
            icon: "error",
            button: "Ok",
        });

    });
}



