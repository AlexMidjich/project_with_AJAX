//document for the characters section.
//jQuery code fetches data from SWAPI

$(document).ready(function() {
	var i = 0;

	$("#startC").click(function() {
		i=1;


		$.getJSON("http://swapi.co/api/people/1/", 
		function(data) {
	
			$("#nameC").html("<b>Name: </b>" + data.name);
			$("#birth_year").html("<b>Birth Year: </b>" + data.birth_year);
			$("#gender").html("<b>Gender: </b>" + data.gender);
			$("#hair").html("<b>Hair color: </b>" + data.hair_color);
			$("#skin").html("<b>Skin color: </b>" + data.skin_color);
			$("#eye").html("<b>Eye color: </b>" + data.eye_color);

		});
		//FadeIn effect that displays prev and next button whe user pushes "Start" button
		$("#nextC, #prevC, #searchC, #submitC").fadeIn(3000);
	});	

	$("#nextC").click(function() {
		i+=1;
		//Shows the next character from the api
		//The value of 88 is from the api
		if (i>88){
           	i=1
        }	
				
		$.getJSON("http://swapi.co/api/people/" + [i], 
		function(data) {
	
			$("#nameC").html("<b>Name: </b>" + data.name);
			$("#birth_year").html("<b>Birth Year: </b>" + data.birth_year);
			$("#gender").html("<b>Gender: </b>" + data.gender);
			$("#hair").html("<b>Hair color: </b>" + data.hair_color);
			$("#skin").html("<b>Skin color: </b>" + data.skin_color);
			$("#eye").html("<b>Eye color: </b>" + data.eye_color);

		});
	});

	$("#prevC").click(function() {
		i-=1;
		//Shows the previous character from the api 
        	if (i<1) {
				i=88
            }  
		
		$.getJSON("http://swapi.co/api/people/" + [i], 
		function(data) {
			$("#nameC").html("<b>Name: </b>" + data.name);
			$("#birth_year").html("<b>Birth Year: </b>" + data.birth_year);
			$("#gender").html("<b>Gender: </b>" + data.gender);
			$("#hair").html("<b>Hair color: </b>" + data.hair_color);
			$("#skin").html("<b>Skin color: </b>" + data.skin_color);
			$("#eye").html("<b>Eye color: </b>" + data.eye_color);
		});
	});

$("#submitC").click(function() {
	var character = document.getElementById("searchC").value;

		$.getJSON("http://swapi.co/api/people/?search=" + character, 
		function(data) {
			$("#nameC").html("<b>Name: </b>" + data.results[0].name);
			$("#birth_year").html("<b>Birth Year: </b>" + data.results[0].birth_year);
			$("#gender").html("<b>Gender: </b>" + data.results[0].gender);
			$("#hair").html("<b>Hair color: </b>" + data.results[0].hair_color);
			$("#skin").html("<b>Skin color: </b>" + data.results[0].skin_color);
			$("#eye").html("<b>Eye color: </b>" + data.results.eye_color);
			

		});
	});

});


