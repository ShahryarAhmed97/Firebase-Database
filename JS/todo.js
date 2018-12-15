
var config = {
    apiKey: "AIzaSyB8p7917au3-Nfudds5_po0iZyM7RJHgGc",
    authDomain: "database-shary.firebaseapp.com",
    databaseURL: "https://database-shary.firebaseio.com",
    projectId: "database-shary",
    storageBucket: "database-shary.appspot.com",
    messagingSenderId: "912855744314"
  };
  firebase.initializeApp(config);





function todoFun(){

    todo_input=document.getElementById('todo_input').value;
    let userUid=firebase.auth().currentUser.uid
    let todo_Obj={
        todo_input
    }
let  todo_list= document.getElementById
    firebase.database().ref('todoItems/'+userUid).push(todo_Obj)
    .then((success)=>{
        firebase.database().ref('todoItems/'+userUid)
        .once('value',(data)=>{
            let todo_data=data.val();

            for(var key in todo_data)
            {
                let tdata=todo_data[key].todo_input


            }

        })

    })
    .catch((error)=>{

    });



}