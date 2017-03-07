function validateForm() {
    var username = document.forms["loginform"]["username"].value;
    var password = document.forms["loginform"]["password"].value;
    var usernumber = document.forms["loginform"]["usernumber"].value;
    var geolocation = document.forms["loginform"]["geoglocation"].value;

    // check if any fields are empty
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    if (usernumber == "") {
        alert("User number must be filled out");
        return false;
    }
    if (geolocation == "") {
        alert("Geo location must be filled out");
        return false;
    }
    // check if username is valid
    re = /[0-9]/;
    if (!re.test(username)) {
        alert("Error: Username must contain at least one number (0-9)!");
        return false;
    }
    re = /[a-z]/;
    if (!re.test(username)) {
        alert("Error: Username must contain at least one lowercase letter (a-z)!");
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(username)) {
        alert("Error: Username must contain at least one uppercase letter (A-Z)!");
        return false;
    }
    re = /[^0-9a-zA-Z]/;
    if (re.test(username)) {
        alert("Error: Username cannot have special characters");
        return false;
    }
    //check if password is valid
    re = /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,15}$/;
    if (!re.test(password)) {
        alert("Error: Password must contain at least 2 numbers and be 8 to 15 characters in length");
        return false;
    }
    //check if user number is valid
    re = /^\d{36}$/;
    if (!re.test(usernumber)) {
        alert("Error: User Number must be 36 digits and have no non-numeral characters");
        return false;
    }

    alert("User Registered");
    return true;


}
