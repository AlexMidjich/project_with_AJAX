$(document).ready(function() {

	var quizP = [{
			question: "What color is Luke Skywalkers first lightsaber?",
			choices: ["Red", "Blue", "Yellow", "Green"],
			correctAnswer: "0100" 
		}, {
		    question: "What is the spaceship called that Ray and Finn uses to escape Jakku?",
		    choices: ["Millennium Falcon", "X-wing", "Tie-fighter", "Star cruiser"],
		    correctAnswer: "1000"
		}, {
		    question: "Give me the name of the latest Star Wars movie, released 2016?",
		    choices: ["The Force Awakens", "The Phantom Menace", "The Empire Strikes Back", "Rouge one"],
		    correctAnswer: "0001"
		}, {
		    question: "What year was the first Star Wars movie released",
		    choices: ["1967", "1977", "1987", "1982"],
		    correctAnswer: "0100"
		}, {
		    question: "In which movie does Luke meet Yoda for the first time?",
		    choices: ["A new Hope", "The Force Awakens", "The Empire Strikes Back", "Attack of the Clones"],
		    correctAnswer: "0010"
		}];

	var counter = 0; //Tracks your number of guesses
	var correctAnswers = []; //Stores all your right guesses
	var wrongAnswers = []; //Stores all your wrong guesses
	var html; //Prints out your results at the end of the quiz

	//Function that directs where to print out the message at the end of the quiz
	function print(message) {
	  var outputDiv = document.getElementById("output").innerHTML = message;
	}

	//Function that is used to print out the message at the end of the quiz
	function list(arr){
		var listHTML = "<ol>";
			for (var i=0; i < arr.length; i+=1){
				listHTML += "<li>" + arr[i] + "</li>"
			}
			listHTML += "</ol>"	;
			return listHTML;
	}	

	//Quiz starts when the button with id="quizP" is pressed 
	$("#quiz5").click(function(){
		document.getElementById("radio").style.visibility = "visible";
		document.getElementById("submit").style.visibility = "visible";
		document.getElementById("quiz10").style.display = "none";
		document.getElementById("quiz20").style.display = "none";
	var i = 0; //i is set to 0 so the first question in the object array will print out
		
		document.getElementById("question").innerHTML = quizP[i].question; //Prints the question
		document.getElementById("c1").innerHTML = quizP[i].choices[0]; //Prints alt 1
		document.getElementById("c2").innerHTML = quizP[i].choices[1]; //Prints alt 2
		document.getElementById("c3").innerHTML = quizP[i].choices[2]; //Prints alt 3
		document.getElementById("c4").innerHTML = quizP[i].choices[3]; //Prints alt 4

	
		$("#submit").click(function(){
		//When button with id="submit" is pressed this script will check witch radiobutton is checked.		
			if(document.getElementById("r1").checked)
				answer="1000";
			if(document.getElementById("r2").checked)
				answer="0100";
			if(document.getElementById("r3").checked)
				answer="0010";
			if(document.getElementById("r4").checked)
				answer="0001";
			if(answer===quizP[i].correctAnswer){ //Checks if you have the correct answer
				console.log("correct");//This line is not neccesary
				correctAnswers.push(quizP[i].question); //Adds all your correct answers to correctAnswers Array
				counter+=1; //Add 1 to counter for each correct guess
			}else{
				console.log("wrong");//This line is not neccesary
				wrongAnswers.push(quizP[i].question);//Adds all your wrong answers to wrongAnswers Array
			}
					
		i+=1; //Adds 1 to submit every time that submit is pressed so that next question and alternatives will load
		
			if(i>=quizP.length){ //When you have answered all questions
				console.log("stop");//This line is not neccesary
				$("#question, #radio, #submit").fadeOut(0000);
								
				html = "<p>You got " + counter + " out of " + quizP.length + " correct answers.</p>";

				if(counter > 4){
					html += "<h4>Congratulations! You achieved the rank of Padawan</h4>";
				} else if (counter < 5) {
					html += "<p>Keep practice if you want to become a Padawan</p>";
				} 

				html += "<p>You got these questions correct:</p>";
				html += list(correctAnswers);
				html += "<p>You got these questions wrong:</p>"
				html += list(wrongAnswers);
				print(html);
				document.getElementById("play").style.visibility = "visible";
				$("#play").click(function(){
					location.reload();
				});

			} else{

			document.getElementById("question").innerHTML = quizP[i].question;
			document.getElementById("c1").innerHTML = quizP[i].choices[0];
			document.getElementById("c2").innerHTML = quizP[i].choices[1];
			document.getElementById("c3").innerHTML = quizP[i].choices[2];
			document.getElementById("c4").innerHTML = quizP[i].choices[3];
			}
		});
	});

	/*
	=============================
	=========End Padawan=========
	=============================
	*/

	var quizK = [{
			question: "Who has a purple lightsaber in the Star Wars movies?",
			choices: ["Darth Vader", "Obi-Wan Kenobi", "Mace Windu", "Darth Maul"],
			correctAnswer: "0010" 
		}, {
		    question: "Who reveals himself as the emperor, also known as Darh Sidious?",
		    choices: ["Luke Skywalker", "Darth Vader", "Yoda", "Palpatine"],
		    correctAnswer: "0001"
		}, {
		    question: "What species does Jar-Jar Binks belong to?",
		    choices: ["Genosian", "Gungan", "Evok", "Twi-lek"],
		    correctAnswer: "0100"
		}, {
		    question: "What is the name for the big moon like spacestation first seen in episode IV?",
		    choices: ["Death Star", "Yavin IV", "Tatooine", "Cloud City"],
		    correctAnswer: "1000"
		}, {
		    question: "Who becomes Darth Vader?",
		    choices: ["Qui-Gon Jinn", "Palpatine", "Anakin Skywalker", "Han Solo"],
		    correctAnswer: "0010"
		}, {  
			question: "Who represents the planet of Naboo in the senate??",
			choices: ["c3p0", "Jar-Jar Binks", "Padme Amidala", "Bail Organa"],
			correctAnswer: "0010" 
		}, {
		    question: 'From what movie does the phrase "Luke I am your father" come from?',
		    choices: ["The Empire Strikes Back", "A New Hope", "The Force Awakens", "Rouge One"],
		    correctAnswer: "1000"
		}, {
		    question: "On what planet/moon does the Ewoks live?",
		    choices: ["Alderaan", "Jakku", "Evok", "Coruscant"],
		    correctAnswer: "0010"
		}, {
		    question: "What planet is Luke Skywalkers homeplanet?",
		    choices: ["Mustafar", "Tatooine", "Jakku", "Naboo"],
		    correctAnswer: "0100"
		}, {
		    question: "In epsiode III, what is the name of the planet where Obi-Wan defeats Anakin?",
		    choices: ["Bespin", "Hoth", "Dagobah", "Mustafar"],
		    correctAnswer: "0001"
		}];

	var counter = 0;
	var correctAnswers = [];
	var wrongAnswers = [];
	var html;


	function print(message) {
	  var outputDiv = document.getElementById("output").innerHTML = message;
	}

	function list(arr){
		var listHTML = "<ol>";
			for (var i=0; i < arr.length; i+=1){
				listHTML += "<li>" + arr[i] + "</li>"
			}
			listHTML += "</ol>"	;
			return listHTML;
	}	

	$("#quiz10").click(function(){
	var j = 0;
		document.getElementById("radio").style.visibility = "visible";
		document.getElementById("submit").style.visibility = "visible";
		document.getElementById("quiz5").style.display = "none";
		document.getElementById("quiz20").style.display = "none";

		document.getElementById("question").innerHTML = quizK[j].question;
		document.getElementById("c1").innerHTML = quizK[j].choices[0];
		document.getElementById("c2").innerHTML = quizK[j].choices[1];
		document.getElementById("c3").innerHTML = quizK[j].choices[2];
		document.getElementById("c4").innerHTML = quizK[j].choices[3];

	
		$("#submit").click(function(){
				
			if(document.getElementById("r1").checked)
				answer="1000";
			if(document.getElementById("r2").checked)
				answer="0100";
			if(document.getElementById("r3").checked)
				answer="0010";
			if(document.getElementById("r4").checked)
				answer="0001";
			if(answer===quizK[j].correctAnswer){
				console.log("correct");
				correctAnswers.push(quizK[j].question);
				counter+=1;
			}else{
				console.log("wrong");
				wrongAnswers.push(quizK[j].question);
			}
					
		j+=1;
		
			if(j>=quizK.length){
				console.log("stop");
				$("#question, #radio, #submit").fadeOut(0000);
				
				html = "<p>You got " + counter + " out of " + quizK.length + " correct answers.</p>";

				if(counter > 4){
					html += "<h4>Congratulations! You achieved the rank of Jedi Knight</h4>";
				} else if (counter < 5) {
					html += "<p>Keep practice if you want to become a Jedi Knight</p>";
				} 

				html += "<p>You got these questions correct:</p>";
				html += list(correctAnswers);
				html += "<p>You got these questions wrong:</p>"
				html += list(wrongAnswers);
				print(html);

				document.getElementById("play").style.visibility = "visible";
				$("#play").click(function(){
					location.reload();
				});

			} else{

			document.getElementById("question").innerHTML = quizK[j].question;

			document.getElementById("c1").innerHTML = quizK[j].choices[0];
			document.getElementById("c2").innerHTML = quizK[j].choices[1];
			document.getElementById("c3").innerHTML = quizK[j].choices[2];
			document.getElementById("c4").innerHTML = quizK[j].choices[3];
			}
		});
	});

	/*
	=============================
	=======End Jedi Knight=======
	=============================
	*/

	var quizM = [{
			question: "Who was Obi-Wan Kenobis Jedi master?",
			choices: ["Yoda", "Qui-Gon Jinn", "Mace Windu", "Anakin Skywalker"],
			correctAnswer: "0100" 
		}, {
		    question: "Who runs the operations on Cloud City?",
		    choices: ["Han Solo", "Jaba the Hutt", "Darth Vader", "Lando Calrissian"],
		    correctAnswer: "0001"
		}, {
		    question: "What movie was released in 1999?",
		    choices: ["A New Hope", "The Phantom Menace", "Attack of the Clones", "Return of the Jedi"],
		    correctAnswer: "0100"
		}, {
		    question: "What is the spacestation called that was destroyed in the battle of Yavin?",
		    choices: ["Death Star", "Cloud City", "Valor", "Pellezara Station"],
		    correctAnswer: "1000"
		}, {
		    question: "In which movie does Darth Vader defeat Obi-Wan?",
		    choices: ["Revenge of the Sith", "Return of the Jedi", "A New Hope", "The Phantom Menace"],
		    correctAnswer: "0010"
		}, {  
			question: "What is the name of the antagonist in Episode 1 - The phantom Menace?",
			choices: ["Darth Maul", "General Grievous", "Darth Vader", "Count Dooku"],
			correctAnswer: "1000" 
		}, {
		    question: "What is the traditional color of a siths lightsaber?",
		    choices: ["Purple", "Blue", "Red", "Yellow"],
		    correctAnswer: "0010"
		}, {
		    question: "What planet is the capitol planet in the Star Wars universe",
		    choices: ["Coruscant", "Alderaan", "Kashyk", "Dantooine"],
		    correctAnswer: "1000"
		}, {
		    question: "What is the name of the character that helped Luke get away from Tatooine?",
		    choices: ["Greedo", "Obi-Wan Kenobi", "Han Solo", "Chewbacca"],
		    correctAnswer: "0010"
		}, {
		    question: "What is the name of Poe Damerons astromech droid",
		    choices: ["Choper", "R2D2", "c3p0", "BB-8"],
		    correctAnswer: "0001"
		}, {
			question: "What is Han Solos spaceship called?",
			choices: ["The Ghost", "Millennium Falcon", "Rouge Shadow", "Slave I"],
			correctAnswer: "0100" 
		}, {
		    question: "Who is Luke Skywalkers sister?",
		    choices: ["Padme Amidala", "Shmi Skywalker", "Leia Organa", "Jyn Erso"],
		    correctAnswer: "0010"
		}, {
		    question: "What is the title of Episode VII?",
		    choices: ["A New Hope", "Revenge of the Sith", "Rouge One", "The Force Awakens"],
		    correctAnswer: "0001"
		}, {
		    question: "On what planet does the Gungans live?",
		    choices: ["Geonosis", "Naboo", "Jakko", "Lothal"],
		    correctAnswer: "0100"
		}, {
		    question: "What is the name of the golden colored protocol droid?",
		    choices: ["Chopper", "K-2S0", "R2D2", "c3p0"],
		    correctAnswer: "0001"
		}, {  
			question: "What is the name of the bounty hunter that Han Solo encounters on Tatooine in episode IV?",
			choices: ["Greedo", "Jaba the Hutt", "Boba Fett", "Cad Bane"],
			correctAnswer: "1000" 
		}, {
		    question: "Who is Luke Skywalkers and Leia Organas birthmother?",
		    choices: ["Shmi Skywalker", "Padme Amidala", "Jyn Erso", "Hera Syndulla"],
		    correctAnswer: "0100"
		}, {
		    question: "What is the name of the order that Ben Solo is part of?",
		    choices: ["The Siths", "The Jedi", "Knights of Ren", "Nightsisters"],
		    correctAnswer: "0010"
		}, {
		    question: "Who is the male lead character in Rouge One?",
		    choices: ["Cassian Andor", "Finn", "Han Solo", "Galen Erso"],
		    correctAnswer: "1000"
		}, {
		    question: "Who created the Star Wars universe",
		    choices: ["Peter Jackson", "Christopher Nolan", "George Lucas", "Scott Ridley"],
		    correctAnswer: "0010"
		}];


	var counter = 0;
	var correctAnswers = [];
	var wrongAnswers = [];
	var html;


	function print(message) {
	  var outputDiv = document.getElementById("output").innerHTML = message;
	}

	function list(arr){
		var listHTML = "<ol>";
			for (var i=0; i < arr.length; i+=1){
				listHTML += "<li>" + arr[i] + "</li>"
			}
			listHTML += "</ol>"	;
			return listHTML;
	}	

	$("#quiz20").click(function(){
	var y = 0;
		
		document.getElementById("radio").style.visibility = "visible";
		document.getElementById("submit").style.visibility = "visible";
		document.getElementById("quiz5").style.display = "none";
		document.getElementById("quiz10").style.display = "none";
		document.getElementById("question").innerHTML = quizM[y].question;
		document.getElementById("c1").innerHTML = quizM[y].choices[0];
		document.getElementById("c2").innerHTML = quizM[y].choices[1];
		document.getElementById("c3").innerHTML = quizM[y].choices[2];
		document.getElementById("c4").innerHTML = quizM[y].choices[3];

	
		$("#submit").click(function(){
				
			if(document.getElementById("r1").checked)
				answer="1000";
			if(document.getElementById("r2").checked)
				answer="0100";
			if(document.getElementById("r3").checked)
				answer="0010";
			if(document.getElementById("r4").checked)
				answer="0001";
			if(answer===quizM[y].correctAnswer){
				console.log("correct");
				correctAnswers.push(quizM[y].question);
				counter+=1;
			}else{
				console.log("wrong");
				wrongAnswers.push(quizM[y].question);
			}
					
		y+=1;
		
			if(y>=quizM.length){
				console.log("stop");
				$("#question, #radio, #submit").fadeOut(0000);
				
				html = "<p>You got " + counter + " out of " + quizM.length + " correct answers.</p>";

				if(counter > 4){
					html += "<h4>Congratulations! You achieved the rank of Jedi Master</h4>";
				} else if (counter < 5) {
					html += "<p>Keep practice if you want to become a Jedi Master</p>";
				} 

				html += "<p>You got these questions correct:</p>";
				html += list(correctAnswers);
				html += "<p>You got these questions wrong:</p>"
				html += list(wrongAnswers);
				print(html);

				document.getElementById("play").style.visibility = "visible";
				$("#play").click(function(){
					location.reload();
				});

			} else{

			document.getElementById("question").innerHTML = quizM[y].question;

			document.getElementById("c1").innerHTML = quizM[y].choices[0];
			document.getElementById("c2").innerHTML = quizM[y].choices[1];
			document.getElementById("c3").innerHTML = quizM[y].choices[2];
			document.getElementById("c4").innerHTML = quizM[y].choices[3];
			}
		});
	});

/*
=============================
=======End Jedi Master=======
=============================
*/

}); // Close (document).ready