var firebaseConfig = {
    apiKey: "AIzaSyCVEYuq5SiCwzD0CXfN4i0IRkPMy_7XIGQ",
    authDomain: "lets-chat-3455c.firebaseapp.com",
    databaseURL: "https://lets-chat-3455c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3455c",
    storageBucket: "lets-chat-3455c.appspot.com",
    messagingSenderId: "181648716473",
    appId: "1:181648716473:web:cadf295c1f6ebbc6db2168",
    measurementId: "G-SSJCXDZR6K"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

//creating new room
function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "chat_page.html";
}
//using existing room
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}