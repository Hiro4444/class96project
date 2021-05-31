var firebaseConfig = {
      apiKey: "AIzaSyCEuJ-GAsFAlNGr05xAmoN3p_fhU1KLnOo",
      authDomain: "kwitter-4b7fd.firebaseapp.com",
      databaseURL: "https://kwitter-4b7fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b7fd",
      storageBucket: "kwitter-4b7fd.appspot.com",
      messagingSenderId: "1045005375139",
      appId: "1:1045005375139:web:54801859c9f461e82f9116"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send() {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();