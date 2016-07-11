"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var i = 0;

do {
	var name = prompt('What is your name?');
	if (i == 5) {
		alert("Ok, We are just going to call you 'Confused'");
		name = "Confused";
		break;
	}
	i++;
}while (name == '');

alert('Hello ' + name + '! Welcome to this page!');

var answer = confirm(name + ', Do you like pizza?');

if (answer) {
	alert('You must be a fat American like me!');
} else if (i == 5) {
	alert("You don't know your name and you don't like pizza?!.....I hate you!");
} else {
	alert(name + ", I think you have an eating disorder.");
}

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.