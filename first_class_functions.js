/**
 * First class functions
 *
 * First class functions can take a function as an argument and return a function
 *
 * Examples and describing texts are taken from the O'Reilly book "Functional JavaScript"
 * by Michael Fogus, 2013
 */

/**
 * Storing in a variable
 * A number can be stored in a variable and so can be a function
 */

var vFortyTwo = 42;

var fnFortyTwo = function fortytwo() {

	return 42;
};

console.log("Storing a function in a variable", fnFortyTwo());


/**
 * Storing in an array
 * A number can be stored in an array and so can be a function
 */

var aFortyTwo = [42, function fortytwo() {
	return 42;
}];

console.log("Storing a function in an array", aFortyTwo[1]());


/**
 * Storing in an object
 * A number can be stored in an object and so can be a function
 */

var oFortyTwo = {
	number: 42,
	fun: function() {

		return 42;
	}
};

console.log("Storing a function in an object", oFortyTwo.fun());


/**
 * Creating on the fly
 * A number can be created as needed and so can be a function
 */

var vValue = 42 + (function() {
	return 42;
})();

console.log("Creating functions on the fly", vValue);


/**
 * Passing to a function
 * A number can be passed to a function and so can a function
 */

function fnWeirdAdd(num, fn) {

	return num + fn();
}

console.log("Passing functions to functions", fnWeirdAdd(42, function() {
	return 42;
}));


/**
 * Returning a function
 * A number can be returned from a function and so can ba a function
 */

function fnFortyTwoFn() {

	return function() {

		return 42;
	};
}

console.log("Returning frunctions from functions", fnFortyTwoFn()());
