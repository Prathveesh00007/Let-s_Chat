function addUser(){
    user_name = document.getElementById("user_name").value;
    if(user_name == ""){
        document.getElementById("popup").innerHTML = "*Please Enter a Login Name*"
    }
    else{
        localStorage.setItem("user_name",user_name);
        window.location = "room.html";
    }
    
}

