/** 
 * sortBy sorts via a certain critera function
 */
var people = [{
	name: "Rick",
	age: 30
}, {
	name: "Jaka",
	age: 24
}];

console.log(_.sortBy(people, function(person) {

	return person.age;
}));

/**
 * groubBy groups via a certain criteria function
 * @type {Array}
 */
var albums = [{
	title: "Sabbath Bloddy Sabbath",
	genre: "Metal"
}, {
	title: "Scientist",
	genre: "Dub"
}, {
	title: "Undertow",
	genre: "Metal"
}];

console.log(_.groupBy(albums, function(album) {
	return album.genre;
}));

/**
 * countBy counts the occurencies based on the critera function
 */
console.log(_.countBy(albums, function(album) {
	return album.genre;
}));
