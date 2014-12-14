function existy(vValue) {

	// no strict comparison, so no extra check for wether undefined is necessary
	return vValue != null;
}


// cat does not take functions as arguments, so it is not applicative
function cat() {

	var head = _.first(arguments);

	if (existy(head)) {

		// concat concatenates one ore more arrays
		return head.concat.apply(head, _.rest(arguments));
	} else {
		return [];
	}
}

console.log("cat different arrays", cat([1, 2, 3], [4, 5], [6, 7, 8]));
// => [1, 2, 3, 4, 5, 6, 7, 8]

// constructs an array, puts the head in front at the tail array
function construct(head, tail) {

	// puts an element in front of an array
	return cat([head], _.toArray(tail));
}

console.log("construct an array", construct(42, [1, 2, 3]));
// => [42, 1, 2, 3]


function mapcat(fn, collection) {

	return cat.apply(null, _.map(collection, fn));
}

function insertSymbol(element) {

	return construct(element, ["=^..^="]);
}

console.log(mapcat(insertSymbol, [1, 2, 3]));

/**
 * remove the last element from the collection
 * @param  {collection} 	collection
 * @return {array}      	all elements without the last from the collection
 */
function butLast(collection) {

	return _.toArray(collection).slice(0, -1);
}

console.log(butLast([1, 2, 3, 4, 5]));
// => [1, 2, 3, 4]


// add a specific symbol between each collection element
function interpose(inter, collection) {

	return butLast(mapcat(function(e) {
		return construct(e, [inter]);
	}, collection));
}

console.log(interpose(".", [1, 2, 3]));
