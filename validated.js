function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getValidatedInput() {
	var validated = true;
	var foundNumber = 0;
	var original = "";
	var caps = "";
	var foundCaps = 0;

    var thisName = document.getElementById("name").value;
    var thisAddress = document.getElementById("address").value;
    var thisEmail = document.getElementById("email").value;
    var thisPhone = document.getElementById("phone").value;
    var thisPassword1 = document.getElementById("password1").value;
    var thisPassword2 = document.getElementById("password2").value;
    var theseSkills = document.getElementById("skills").value;
    var thisAge = document.getElementById("age").value;
    var isChecked = document.getElementById("agree-checkbox").checked;

    function dataObj(name, address, email, phone, password1, password2, skills, age) {
    	this.name = name;
    	this.address = address;
    	this.email = email;
    	this.phone = phone;
    	this.password1 = password1;
    	this.password2 = password2;
    	this.skills = skills;
    	this.age = age;
    }

    var myData = new dataObj(thisName, thisAddress, thisEmail, thisPhone, thisPassword1,
    	thisPassword2, theseSkills, thisAge);

    // the form validation begins...
    for (var prop in myData) {
    	if (myData[prop] == "") {
    		validated = false;
    	}
    }
    console.log(validated);

    if (thisPassword1 != thisPassword2) {
    	validated = false;
    }
    console.log(validated);
    
    for (i=0; i<thisPassword1.length; i++) {
    	if (isNumeric(thisPassword1[i])) {
    		foundNumber++;
    	}
    }
    if (foundNumber < 1) {
    	validated = false;
    }
    console.log(validated);

    for (i=0; i<thisPassword1.length; i++) {
    	original = thisPassword1[i];
    	caps = original.toUpperCase();
    	if (original == caps) {
    		foundCaps++;
    	}
    }
    if (foundCaps < 1) {
    		validated = false;
    }
    console.log(validated);

    if (thisPassword1.length < 8 || thisPassword2.length < 8) {
    	validated = false;
    }
    console.log(validated);

   	if (!isChecked) {
    	validated = false;
    }
    console.log(validated);

    if (!validated) {
    	alert("Oh noes! Form input was not validated.");
    }
}