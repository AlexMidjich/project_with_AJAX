//Javascript for loadin the Films API from Swapi.com.

var request = new XMLHttpRequest();

	request.onreadystatechange = function() {

		if ((request.readyState===4) && (request.status===200))
		{
			var arr = JSON.parse(request.responseText);
			console.log(arr.title);
			//This writes out selected data from the API to the html
			$("#title").html("<b>Title: </b>" + arr.title);
			$("#episode").html("<b>Episode: </b>" + arr.episode_id);
			$("#release").html("<b>Release Date: </b>" + arr.release_date);
			$("#intro").html("<b>Intro: </b>" + arr.opening_crawl);
			/*
			for(var i in arr)
			{
				$("ul")[4].append("<li>" + arr[i] + "</li>");
			}*/
		}
	}

		$(document).ready(function() {
			//Click function that display the selected data from the API when the buttons are clicked.
			//The click function also shows a img for each of the movies.
			$("#e1").click(function() {
				request.open("Get", "https://swapi.co/api/films/4/");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e1.png'	
			});	
			$("#e2").click(function() {
				request.open("Get", "https://swapi.co/api/films/5/");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e2.jpg'		
			});
			$("#e3").click(function() {
				request.open("Get", "https://swapi.co/api/films/6");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e3.jpg'	
			});
			$("#e4").click(function() {
				request.open("Get", "https://swapi.co/api/films/1/");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e4.jpg'	
			});
			$("#e5").click(function() {
				request.open("Get", "https://swapi.co/api/films/2/");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e5.jpg'	
			});
			$("#e6").click(function() {
				request.open("Get", "https://swapi.co/api/films/3");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e6.jpg'	
			});
			$("#e7").click(function() {
				request.open("Get", "https://swapi.co/api/films/7/");
				request.send();
				$("#poster").show();
			document.getElementById("poster").src = 'img/covers/e7.jpg'	
			});
		});


