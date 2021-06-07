var paramValue = getQueryParams("errMsg");

if(paramValue) {
  document.querySelector('.invalidMsg').innerText = paramValue;
}

var eyeIcon = document.querySelector('.eyeIcon');

eyeIcon.addEventListener("click", function() {
  var adminPassword = document.querySelector('.adminPassword');
  var type = adminPassword.getAttribute("type");
  if(type == "password") {
    adminPassword.setAttribute("type", "text");
    this.innerText = "visibility";
  } else {
    adminPassword.setAttribute("type", "password");
    this.innerText = "visibility_off";
  }

});




function handleAdminFromSubmit(event) {

  event.preventDefault();
  
  var adminName = document.querySelector('.adminName').value;
  var adminPassword = document.querySelector('.adminPassword').value;
  
  var adminNameErrorMsg = document.querySelector('.adminNameErrorMsg');
  var adminPasswordErrorMsg = document.querySelector('.adminPasswordErrorMsg');
  
  if(isNullUserName(adminName) && isNullPassword(adminPassword)) {
    document.querySelector('.adminForm').submit();
  } else {
    if(!isNullUserName(adminName)) {     
        adminNameErrorMsg.innerText = "*User Name Required!"; 
    } else {
        adminNameErrorMsg.innerText = ""; 
    }
    
    if(!isNullPassword(adminPassword)) {    
       adminPasswordErrorMsg.innerText = "*Password Required!";
    } else {
       adminPasswordErrorMsg.innerText = "";
    }
    return false;
  }
  
} 


function isNullUserName(userName) {
  if(userName === undefined || userName === null || userName === '') {
     return false;
  } else {
    return true;
  }
}

function isNullPassword(password) {
  if(password === undefined || password === null || password === '') {
     return false;
  } else {
    return true;
  }
}

function getQueryParams(param) {
  if(param)
  var paramValue = new URLSearchParams(window.location.search).get(param);
  
  if(paramValue) return paramValue;
  else return false;
 
}

