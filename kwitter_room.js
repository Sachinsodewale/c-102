const firebaseConfig = {
  apiKey: "AIzaSyCSL1bNDFgWnxH2rs37enQk9wJkxgBdy3U",
  authDomain: "kwitter101-a8d74.firebaseapp.com",
  databaseURL: "https://kwitter101-a8d74-default-rtdb.firebaseio.com",
  projectId: "kwitter101-a8d74",
  storageBucket: "kwitter101-a8d74.appspot.com",
  messagingSenderId: "400092874490",
  appId: "1:400092874490:web:4c7d8d0ad008cd57e96b43"
};


firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
