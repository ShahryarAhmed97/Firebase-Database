

  function postFun(){
    let name=document.getElementById('name').value;
    let msg=document.getElementById('msg').value;
    let msgPost={
        name,
        msg
    }
let userUid=firebase.auth().currentUser.uid
let posts=document.getElementById('posts');
    firebase.database().ref('post/'+userUid).
    push(msgPost)
    .then((success)=>{
        firebase.database().ref('post/'+userUid)
        .once('value',(data)=>{
            var msgData=data.val();
            for (var key in msgData) {
                let name=msgData[key].name
                let msgs=msgData[key].msg

               posts.innerHTML+= 
               `
               <div class="card bg-primary text-white">
                              <strong >${name}</strong>
                              <div class="card-body" >${msgs}</div>
                          </div>
               `
                
            }


        })

    }).catch((error)=>{
      let posts=document.getElementById('posts');

      posts.innerHTML+= "ERROR "+error;
    });
}