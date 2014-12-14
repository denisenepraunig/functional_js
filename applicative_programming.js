/**
 * map
 *
 * Calls a function on every value of the collection
 * returns a collection of the result
 */

var aNums = [1, 2, 3, 4, 5],
	aNums2 = [100, 2, 25];

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


/**
 * division functions
 * @param  {array} 		aValues 	array with numbers
 * @return {number}
 */
function div(dividend, divisor) {

	return dividend / divisor;
}

function divLeft(aValues) {

	// for our aNums2 array: (100/2) / 25
	return _.reduce(aValues, div);
}

function divRight(aValues) {

	// for our aNums2 array: (25/2) / 100
	return _.reduceRight(aValues, div);
}

console.log("Division left with redcue", divLeft(aNums2));
console.log("Division right with redcueRight", divRight(aNums2));

/**
 * Checks if all functions return true
 * @param {functions} 	0..n functions
 * @return {boolean} 	default is true without params
 */
function allOf( /* functions */ ) {

	return _.reduce(arguments, function(truth, f) {

		return truth && f();
	}, true); // <- this true will passed into variable truth when _.reduce 
	// is called for the first time
}

/**
 * Checks if any function returns true
 * @param {functions} 	0..n functions
 * @return {boolean} 	default is false without params
 */
function anyOf( /* functions */ ) {

	return _.reduce(arguments, function(truth, f) {

		return truth || f();
	}, false); // <- this false will passed into variable truth when _.reduce
	// is called for the first time
}

function T() {

	return true;
}

function F() {

	return false;
}

/**
 * Finds the first element which fullfills the criteria
 * @param  {array} 		aValues 	array of values
 * @param  {function} 	fnWhat  	a function which returns true/false
 *                              	like _.isNumber
 * @return {value} 		the first value which fullfilled the criteria
 */

/* there are various predicate functions in underscore: _.isEqual, _.isEmpty, _.isElement,
_.isArray, _.isObject, _.isArguments, _.isFunction, _.isString, _.isNumber, _.isFinite,
_.isBoolean, _.isDate, _.isRegExp, _.isNaN, _.isNull, _.isUndefined */

function find(aValues, fnWhat) {

	return _.find(aValues, fnWhat);
}

/**
 * Returns all values which don't fulfill the criteria
 * it acts as the opposite of filter
 * @param  {array} 		aValues 	array of values
 * @param  {function} 	fnWhat  	a function which returns true/false
 *                              	like _.isNumber
 * @return {array} 		array of values which don't fulfill the criteria
 */
function reject(aValues, fnWhat) {

	return _.reject(aValues, fnWhat);
}

/**
 * Complements the given predicate - this is an example implementation of reject
 * @param  {function} 	fnPredicate 	a function which returns true/false
 * @return {function} 	a function which is the complement of fnPredicate
 */
function complement(fnPredicate) {

	return function() {

		// binding to null would just refer to the global object
		return !fnPredicate.apply(null, _.toArray(arguments));
	}
}


/**
 * Checks if all values fulfill a certain predicate
 * @param  {array} 		aValues     array of aValues
 * @param  {function} 	fnPredicate a predicate funciton
 * @return {boolean}    true if all values fulfill the predicate
 */
function all(aValues, fnPredicate) {

	return _.all(aValues, fnPredicate);
}


/**
 * Checks if any value fulfills a certain predicate
 * @param  {array} 		aValues     array of aValues
 * @param  {function} 	fnPredicate a predicate funciton
 * @return {boolean}    true if any value fulfills 	the predicate
 */
function any(aValues, fnPredicate) {

	return _.any(aValues, fnPredicate);
}
