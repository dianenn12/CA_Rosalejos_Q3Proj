let profiles = '{"id": [{"username": "dianners","password": "misskonasiya"},{"username": "catto","password": "misskonadinsiya"}]}';
let profilesData = JSON.parse(profiles);


function loginPage(){
    var ign,password, returnError, display;
    ign = document.getElementById('ign').value;
    password = document.getElementById("password").value;
    ifWrongValue = true;
    if(ign =="" && password ==""){
        returnError = "Error Detected. Please enter your username and password.";
    }else if(ign == "" && password != ""){
        returnError = "Error Detected. Please enter your username."
    }else if(ign != "" && password == ""){
        returnError = "Error Detected. Please enter your password."
    }else if(ign != "" && password != ""){
        returnError = "Wrong Values."
    };
    display = checkPass(ign, password);
    clearData();
    if(display == false && ifWrongValue == true){
        document.getElementById('error').innerHTML = returnError;
    }else if(display){
        openWindow();
    }
}
function checkPass(registeredIgn, registeredPass){
    var profileCount = profilesData.id.length;
    var returnString;
    var ifMatch = false;
    for(x=0; x<profileCount;x++){
        var currentIgn = profilesData.id[x].username;
        var currentPass = profilesData.id[x].password;
        if(registeredIgn == currentIgn&&registeredPass == currentPass){
            ifMatch = true;
        }
    }
    if(ifMatch){
        returnString="Success! Entering you now..."
    }else{
        returnString="Error. Not found."
    }
    document.getElementById('error').innerHTML=returnString;
    document.getElementById('ign').style="margin-top:25px";
    return ifMatch;
}

function signUp(){;
    var ign, password, confirmIf, profileCount;
    profileCount = profilesData.id.length;
    ign = document.getElementById('ign').value;
    password = document.getElementById("password").value;
    if(profileCount > 3){
        clearData();
        alert("No more available slots!");
    }else{
        if(ign == ""  || password ==""){
            clearData();
            document.getElementById("error").innerHTML = "Please enter sufficient values.";
            document.getElementById('ign').style="margin-top:45px";
        }else{
            confirmIf = confirm("Do you want to sign-up?");
            if(confirmIf){
                var newObj = '{"username":"'+ign+'","password":"'+password+'"}';
                profilesData.id.push(JSON.parse(newObj));
                clearData();
                alert("Hello "+ign+"! Welcome to our site!");
                document.getElementById('registered').innerHTML += "<br/>"+ign+" - "+password;
            }else{
                clearData();
                alert("Ok! Restarted!");
            }
        }
    }
    
}

function clearData(){
    document.getElementById('ign').value = "";
    document.getElementById('password').value ="";
}
function openWindow(){
    setTimeout(function(){
        window.open("CA_Rosalejos_2qProj/index.html")
    }, 3000);
}