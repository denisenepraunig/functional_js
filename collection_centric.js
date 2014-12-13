/**
 * map also works on collections,
 * identity returns the values
 */

var oObj = {
		a: 1,
		b: 2
	},
	aArr = [1, 2];

function getValues(obj) {

	return _.map(obj, _.identity);
}

console.log("Get values of an object with _.map and _.identity", getValues(oObj));
console.log("The same also works for arrays sinc it is a 'collection'", getValues(aArr));

/**
 * Getting key/values of an object with _.map
 * @param  {object} obj the object
 * @return {array}      an array of arrays with key/value pairs
 */
function getKeyValues(obj) {

	return _.map(obj, function(value, key) {

		return [key, value];
	});
}

console.log("Key/values of an object with _.map", getKeyValues(oObj));

/**
 * get the key, values and the collection keys
 * _.map also accepts a third parameter collection
 * _.keys returns the keys of the collection
 *
 * @param  {object} obj the object
 * @return {array}     an array of arrays with the key, value and the keys
 */
function getKeyValuesCollection(obj) {

	return _.map(obj, function(value, key, collection) {

		return [key, value, _.keys(collection)];
	});
}

console.log("Key/values/collection with _.map", getKeyValuesCollection(oObj));
