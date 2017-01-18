$(document).ready(function(){
	//jQuery click functions that toggles the articles in the media-section.
	$( "#history_show" ).click(function() {
  		$( "#history_hide" ).slideToggle( "slow", function() {
    
  		});
	});
	$( "#jedi_show" ).click(function() {
  		$( "#jedi_hide" ).slideToggle( "slow", function() {
    
  		});
	});
	$( "#sith_show" ).click(function() {
  		$( "#sith_hide" ).slideToggle( "slow", function() {
    
  		});
	});
	$( "#universe_show" ).click(function() {
  		$( "#universe_hide" ).slideToggle( "slow", function() {
    
  		});
	});

	//Effect for the formfields in contact.html
	$("input, textarea").focus(function(){
        $(this).css("background-color", "#333333");
    });
    $("input, textarea").blur(function(){
        $(this).css("background-color", "#000000");
    });

});

//Validation for the form on the contact page.
function validation() {
     var x = document.forms["form"]["name"].value; //Sets the value of x = to the value on the input field "name"
    	if (x == "") { //If user didn't fill in any name the following code will execute
        document.getElementById("name").innerHTML = "Please fill in your name";
        event.preventDefault();
        return false;
    }
    var y = document.forms["form"]["email"].value; //Sets the value of y = to the value on the input field "email"
    	if (y == "") { //If user didn't fill in any email the following code will execute
       	document.getElementById("mail").innerHTML = "Please fill in your email";
       	event.preventDefault();
        return false;
    }
    var z = document.forms["form"]["message"].value; //Sets the value of z = to the value on the input field "message"

//This will write down that the form was sent succefully and also the content of the form.
document.getElementById("confirm").innerHTML = "Your'e email was succefully sent to: swtrivia@gmail.com";
document.getElementById("namefield").innerHTML = "<b>Name:</b> " + x;
document.getElementById("mailfield").innerHTML = "<b>Email:</b> " + y;
document.getElementById("messagefield").innerHTML = "<b>Message:</b> " + z;
event.preventDefault();
}
function reset() {
	document.getElementById("form_input").reset();
}

