"use strict";
(function(){
	var myNameIs = 'Ben'; 

	function sayHello(name) {
		return name;
	}

	console.log('Hello from ' + sayHello(myNameIs));
})();

(function() {
	var random = Math.floor((Math.random()*100)+1);

	function isOdd(number) {
		console.log(number)
		number % 2 == 0 ? console.log('This number is even') : console.log('This number is odd');
		return number;
	}

	isOdd(random);
})();