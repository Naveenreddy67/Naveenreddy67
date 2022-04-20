class person{
    constructor(firstName,lastName, email, password, confirmPassword){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}

var personArray = [];

function  Register(){
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    let usr = new person(firstName, lastName, email, password, confirmPassword);
    if(password === confirmPassword){
        this.personArray.push(usr);
        alert(firstName+' user created');
        window.localStorage.setItem("globalObject", JSON.stringify(this.personArray));
        window.location.href = "login.html";
    }
    else{
        alert(firstName+' user not created');
    }
 }