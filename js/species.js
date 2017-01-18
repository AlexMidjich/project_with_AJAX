//document for the species section.
//jQuery code fetches data from SWAPI

$(document).ready(function() {
	var i = 0;

	$("#startS").click(function() {
	i=1;

	$.getJSON("http://swapi.co/api/species/1/", 
	function(data) {
	
		$("#nameS").html("<b>Name: </b>" + data.name);
		$("#class").html("<b>Classification: </b>" + data.classification);
		$("#height").html("<b>Average height: </b>" + data.average_height);
		$("#life").html("<b>Average lifespan: </b>" + data.average_lifespan);
		$("#lang").html("<b>Language: </b>" + data.language);
	});

		//FadeIn effect that displays prev and next button whe user pushes "Start" button
		$("#nextS, #prevS, #searchS, #submitS").fadeIn(3000);
	});	

	$("#nextS").click(function() {
		i+=1;
		//Shows the next planet from the api
		//The value of 37 is from the api
		if (i>37){
           	i=1
        }	
				
		$.getJSON("http://swapi.co/api/species/" + [i], 
		function(data) {
	
		$("#nameS").html("<b>Name: </b>" + data.name);
		$("#class").html("<b>Classification: </b>" + data.classification);
		$("#height").html("<b>Average height: </b>" + data.average_height);
		$("#life").html("<b>Average lifespan: </b>" + data.average_lifespan);
		$("#lang").html("<b>Language: </b>" + data.language);
		});
	});

	$("#prevS").click(function() {
		i-=1;
		//Shows the previous planet from the api 
        	if (i<1) {
				i=37
            }  
		
		$.getJSON("http://swapi.co/api/species/" + [i], 
		function(data) {
			
		$("#nameS").html("<b>Name: </b>" + data.name);
		$("#class").html("<b>Classification: </b>" + data.classification);
		$("#height").html("<b>Average height: </b>" + data.average_height);
		$("#life").html("<b>Average lifespan: </b>" + data.average_lifespan);
		$("#lang").html("<b>Language: </b>" + data.language);
		});
	});
	$("#submitS").click(function() {
	var species = document.getElementById("searchS").value;

		$.getJSON("http://swapi.co/api/species/?search=" + species, 
		function(data) {
		$("#nameS").html("<b>Name: </b>" + data.results[0].name);
		$("#class").html("<b>Classification: </b>" + data.results[0].classification);
		$("#height").html("<b>Average height: </b>" + data.results[0].average_height);
		$("#life").html("<b>Average lifespan: </b>" + data.results[0].average_lifespan);
		$("#lang").html("<b>Language: </b>" + data.results[0].language);
			

		});
	});
});



