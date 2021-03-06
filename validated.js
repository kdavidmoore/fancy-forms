function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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

var validated = true;
var foundNumber = 0;
var original = "";
var caps = "";
var foundCaps = 0;
var problem = "";

$(document).ready(function() {
    $('button').click(function() {
        var buttonID = $(this).attr('id');
        if (buttonID == "submit-button") {
            var thisName = $("#name").val();
            var thisAddress = $("#address").val();
            var thisEmail = $("#email").val();
            var thisPhone = $("#phone").val();
            var thisPassword1 = $("#password1").val();
            var thisPassword2 = $("#password2").val();
            var theseSkills = $("#skills").val();
            var thisAge = $("#age").val();
            var isChecked = $("#agree-checkbox").prop('checked');

            var myData = new dataObj(thisName, thisAddress, thisEmail, thisPhone, thisPassword1,
            	thisPassword2, theseSkills, thisAge);

            // the form validation begins...
            for (var prop in myData) {
            	if (myData[prop] == "") {
            		validated = false;
                    problem = "you left one or more forms empty.";
            	}
            }
            console.log(validated);

            if (thisPassword1 != thisPassword2) {
            	validated = false;
                problem = "the passwords don't match.";
            }
            console.log(validated);
            
            for (i=0; i<thisPassword1.length; i++) {
            	if (isNumeric(thisPassword1[i])) {
            		foundNumber++;
            	}
            }
            if (foundNumber < 1) {
            	validated = false;
                problem = "the password must have at least one number.";
            }
            console.log(validated);

            for (i=0; i<thisPassword1.length; i++) {
            	original = thisPassword1[i];
            	caps = original.toUpperCase();
            	if (isNaN(original) && original == caps) {
            		foundCaps++;
            	}
            }
            if (foundCaps < 1) {
            		validated = false;
                    problem = "the password must have at least one capital letter.";
            }
            console.log(validated);

            if (thisPassword1.length < 8 || thisPassword2.length < 8) {
            	validated = false;
                problem = "the password must be at least 8 characters long.";
            }
            console.log(validated);

           	if (!isChecked) {
            	validated = false;
                problem = "you must agree to the terms and conditions to proceed.";
            }
            console.log(validated);

            if (!validated) {
            	alert("Oh noes! Form input was not validated. Looks like the problem might be: " + problem);
            } else {
                alert("Success! Your info has been submitted.");
                window.location.reload();
            }
        } // end of if statement
    }); // end of button click listener
}); // end of callback function