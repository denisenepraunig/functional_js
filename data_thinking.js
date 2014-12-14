var zombie = {
    name: "Bub",
    film: "Day of the dead"
};

/**
 * getting the keys and values of an object
 */

console.log("_.keys", _.keys(zombie));
// => ["name", "film"];

console.log("_.values", _.values(zombie));
// => ["Bug", "Day of the Dead"]

/**
 * plug takes an array of objects and a key and returns all those values
 * for the key as an array
 */
var books = [{
    title: "Chton",
    author: "Anthony"
}, {
    title: "Grendel",
    author: "Gardner"
}, {
    title: "After Dark"
}];

console.log("_.pluck", _.pluck(books, "author"));
// => ["Anthony", "Gardner", undefined]

/**
 * pairs returns key value pairs as nested arrays
 */
console.log("_.pairs", _.pairs(zombie));
// => [["name", "Bub"], ["film", "Day of the Dead"]]

var result = _.object(_.map(_.pairs(zombie), function(pair) {
	return [pair[0].toUpperCase(), pair[1]];
}));

console.log("_.object & pairs was used to build an object", result);
// => {NAME: "Bub", FILM: "Day of the dead"}

/**
 * invert inverts key and value
 */
console.log("_.invert", _.invert(zombie));
// => {Bub: "name", Day of the dead: "film"}

// be aware that in JavaScript keys can only be strings
console.log("string keys", _.keys(_.invert({a: 9, b: 10})));
// => ["9", "10"]