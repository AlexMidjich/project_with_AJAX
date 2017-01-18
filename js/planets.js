//document for the planets section.
//jQuery code fetches data from SWAPI

$(document).ready(function() {
	var i = 0;

	$("#startP").click(function() {
	i=1;

	$.getJSON("http://swapi.co/api/planets/1/", 
	function(data) {
	
		$("#nameP").html("<b>Name: </b>" + data.name);
		$("#climate").html("<b>Climate: </b>" + data.climate);
		$("#terrain").html("<b>Terrain: </b>" + data.terrain);
		$("#population").html("<b>Population: </b>" + data.population);
	});

		//FadeIn effect that displays prev and next button whe user pushes "Start" button
		$("#nextP, #prevP, #searchP, #submitP").fadeIn(3000);
	});	

	$("#nextP").click(function() {
		i+=1;
		//Shows the next planet from the api
		//The value of 61 is from the api
		if (i>61){
           	i=1
        }	
				
		$.getJSON("http://swapi.co/api/planets/" + [i], 
		function(data) {
	
		$("#nameP").html("<b>Name: </b>" + data.name);
		$("#climate").html("<b>Climate: </b>" + data.climate);
		$("#terrain").html("<b>Terrain: </b>" + data.terrain);
		$("#population").html("<b>Population: </b>" + data.population);
		});
	});

	$("#prevP").click(function() {
		i-=1;
		//Shows the previous planet from the api 
        	if (i<1) {
				i=61
            }  
		
		$.getJSON("http://swapi.co/api/planets/" + [i], 
		function(data) {
			
		$("#nameP").html("<b>Name: </b>" + data.name);
		$("#climate").html("<b>Climate: </b>" + data.climate);
		$("#terrain").html("<b>Terrain: </b>" + data.terrain);
		$("#population").html("<b>Population: </b>" + data.population);
		});
	});
	$("#submitP").click(function() {
	var planets = document.getElementById("searchP").value;

		$.getJSON("http://swapi.co/api/planets/?search=" + planets, 
		function(data) {
		$("#nameP").html("<b>Name: </b>" + data.results[0].name);
		$("#climate").html("<b>Climate: </b>" + data.results[0].climate);
		$("#terrain").html("<b>Terrain: </b>" + data.results[0].terrain);
		$("#population").html("<b>Population: </b>" + data.results[0].population);
			

		});
	});
});



