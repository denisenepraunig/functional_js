/**
 * map
 *
 * Calls a function on every value of the collection
 * returns a collection of the result
 */

var aNums = [1, 2, 3, 4, 5];

function doubleAll(aValues) {

	return _.map(aValues, function(value) {
		return value * 2;
	});
}

console.log("Everything doubled with _.map", doubleAll(aNums));


/**
 * reduce
 *
 * Collects a composite value from a collection
 *
 * reduce docu from underscore:
 *
 * _.reduce(list, iteratee, [memo], [context])
 *
 * If no memo is passed to the initial invocation of reduce,
 * the iteratee is not invoked on the first element of the list.
 * The first element is instead passed as the memo in the invocation
 * of the iteratee on the next element in the list.
 */

function sumArray(aValues) {

	return _.reduce(aValues, function(a, b) {

		// With our aNums array the values of a and be will be:
		// 1, 2
		// 3, 3
		// 6, 4
		// 10, 5

		return a + b;
	});
}

console.log("The sum of an array with _.reduce", sumArray(aNums));

function averageArray(aValues) {

	// instead of length also _.size(aValues)
	return sumArray(aValues) / aValues.length;
}

console.log("The average of an array with _.reduce", averageArray(aNums));


/**
 * filter
 *
 * Calls a function, which is returning true or false and grabs each value
 * where the function returned true.
 * Such functions are called predicate functions.
 */

function onlyEven(aValues) {

	return _.filter(aValues, function(value) {

		return value % 2 === 0;
	});
}

console.log("Only the even values of an array with _.filter", onlyEven(aNums));
