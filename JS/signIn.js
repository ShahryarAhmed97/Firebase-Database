
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

function signInFun()
{
    let email=document.getElementById('email').value; 

    let password=document.getElementById('password').value; 

    firebase.auth()
    .signInWithEmailAndPassword(email,password)
    .then((success)=>{
        console.log(success)
        let userInfo=localStorage.setItem('userInfo',JSON.stringify(success))

        window.location='../Pages/home.html'
      

    })
    .catch((error)=>{
        let errCode=error.code;
        let errMsg=error.message;

        swal({
            title:"Error"+errCode,
            text:errMsg,
            icon:"error",
            button:"Ok"


        });


    });

}