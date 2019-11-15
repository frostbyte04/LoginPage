var userList = [{un: "admin", pass:"admin", name:"admin"},{un: "vineetks", pass:"vineetks",name:"VineedKS"},{un: "Ayush", pass:"12345",name:"Ayush Dwivedi"},{un: "shashu", pass:"1234",name:"ShashiKesh"}];
var flagLogin=0;
var isLocaldata=0;
(function namesetter(){
    document.getElementById("na").innerHTML= localStorage.getItem("ka");
})();
function checker(event){
    event.preventDefault();
    var user = document.getElementById("uss").value;
    var pasd = document.getElementById("pass").value;
    for(var i = 0; i<userList.length; i++){


        if(userList[i].un == user && userList[i].pass == pasd){
            window.location = "BS4Ass.html";
            flagLogin=1;
            localStorage.setItem("ka", userList[i].name);
            localStorage.setItem("flag", flagLogin);

        }

    }
    if(flagLogin==0){
           alert("Incorrect Credentials");
           window.location = "HTMLCSSASS.html"
    }
}

function login(){
    if(localStorage.getItem("flag")==1){
    window.location = "BS4Ass.html";
    }
}
function direct(){
    if(localStorage.getItem("flag")==0){
        window.location = "HTMLCSSASS.html";
    }
}
function so(){
    localStorage.clear();
    localStorage.setItem("flag", 0);
    window.location = "HTMLCSSASS.html"
}