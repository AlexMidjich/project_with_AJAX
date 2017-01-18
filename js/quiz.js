document.getElementById("quiz5").addEventListener("click", function(){

var questions = [
				["1. What color is Luke Skywalkers first lightsaber?", "blue"],
				["2. Name the spaceship that Ray and Finn uses to escape Jakku?", "millennium falcon"],
				["3. Give me the name of the latest Star Wars movie, released 2016?", "rouge one"],
				["4. What year was the first Star Wars movie released", "1977"],
				["5. In which movie does Luke meet Yoda for the first time, give me the title?",
				 "the empire strikes back"],
				];
var counter = 0;
var question;
var answer;
var response;
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

for(var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	
	response = prompt(question);
	response = response.toLowerCase();
	if (response === answer){
		counter += 1;
		correctAnswers.push(question);	
	}else {
		wrongAnswers.push(question);
	}
}

html = "<p>You got " + counter + " out of " + questions.length + " correct answers.</p>";

if(counter > 4){
	html += "<p>Congratulations! You achieved the rank of Padawan</p>";
} else if (counter < 5) {
	html += "<p>Keep practice if you want to become a Padawan</p>";
} 

html += "<p>You got these questions correct:</p>";
html += list(correctAnswers);
html += "<p>You got these questions wrong:</p>"
html += list(wrongAnswers);
print(html);
});


document.getElementById("quiz10").addEventListener("click", function(){

var questions = [
				["1. Who has a purple lightsaber in the Star Wars movies", "mace windu"],
				["2. Who reveals himself as the emperor, also known as Darh Sidious?", "palpatine"],
				["3. What species does Jar-Jar Binks belong to?", "gungans"],
				["4. What is the name for the big moon like spacestation first seen in episode IV", "death star"],
				["5. Who becomes Darth Vader?", "anakin skywalker"],
				["6. Name the person that represent the planet of Naboo in the senate?", "padme amidala"],
				['7. From what movie does the phrase "Luke I am your father" come from?', "the empire strikes back"],
				["8. On what planet does the Ewoks live?", "endor"],
				["9. What planet is Luke Skywalkers homeplanet?", "tatooine"],
				["10. In epsiode III, what is the name of the planet where Obi-Wan defeats Anakin?", "mustafar"],
				];
var counter = 0;
var question;
var answer;
var response;
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

for(var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	
	response = prompt(question);
	response = response.toLowerCase();
	if (response === answer){
		counter += 1;
		correctAnswers.push(question);	
	}else {
		wrongAnswers.push(question);
	}
}

html = "<p>You got " + counter + " out of " + questions.length + " correct answers.</p>";
if(counter > 9){
	html += "<p>Congratulations! You achieved the rank of Jedi Knight</p>";
} else if (counter < 10) {
	html += "<p>Keep practice if you want to become a Jedi Knight</p>";
} 
html += "<p>You got these questions correct:</p>";
html += list(correctAnswers);
html += "<p>You got these questions wrong:</p>"
html += list(wrongAnswers);
print(html);
});

document.getElementById("quiz20").addEventListener("click", function(){

var questions = [
				["1. Who is Obi-Wan Kenobis master?", "qui-gon jinn"],
				["2. Who runs the operations on Cloud City?", "lando calrissian"],
				["3. Name the movie that was released in 1999? (Give me the title)", "the phantom menace"],
				["4. What is the spacestation called that was destroyed in the battle of Yavin?", "death star"],
				["5. In which movie does Darth Vader defeat Obi-Wan (Give me the title)", "a new hope"],
				["6. What is the name of the antagonist in Episode 1 - The phantom Menace?", "darth maul"],
				["7. What is the traditional color of a siths lightsaber?", "red"],
				["8. What planet is the capitol planet in the Star Wars universe", "corucant"],
				["9. What is the name of the character that helped Luke get away from Tatooine?", "han solo"],
				["10. What is the name of Poe Damerons astromech droid", "bb-8"],
				["11. What is Han Solos spaceship called?", "millennium falcon"],
				["12. Who is Luke Skywalkers sister?", "leia organa"],
				["13. What is the title of Episode VII?", "the force awakens"],
				["14. On what planet does the Gungans live?", "naboo"],
				["15. What is the name of the bounty hunter that Han Solo encounters on Tatooine?", "greedo"],
				["16. What is the name of the golden colored protocol droid?", "c3p0"],
				["17. Who is Luke Skywalkers and Leia Organas birthmother?", "padme amidala"],
				["18. What is the name of the order that Ben Solo is part of?", "knights of ren"],
				["18. Who does Leia Organa maries to?", "han solo"],
				["20. Who created the Star Wars universe", "george lucas"],
				];
var counter = 0;
var question;
var answer;
var response;
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

for(var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	
	response = prompt(question);
	response = response.toLowerCase();
	if (response === answer){
		counter += 1;
		correctAnswers.push(question);	
	}else {
		wrongAnswers.push(question);
	}
}

html = "<p>You got " + counter + " out of " + questions.length + " correct answers.</p>";
if(counter > 19){
	html += "<p>Congratulations! You achieved the rank of Jedi Master</p>";
} else if (counter < 20) {
	html += "<p>Keep practice if you want to become a Jedi Master</p>";
} 

html += "<p>You got these questions correct:</p>";
html += list(correctAnswers);
html += "<p>You got these questions wrong:</p>"
html += list(wrongAnswers);
print(html);
});
