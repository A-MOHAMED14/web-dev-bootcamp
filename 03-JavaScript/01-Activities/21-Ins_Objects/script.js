// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

var person = { 
  name: "John",
  age: 31,
  favColor: "green",
  height: 183
};

person.favColor = "blue";


// To access a property's value that is a string, number or boolean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);


var userOptons = [{
  useUpprcase: true,
  useLowercase: false,
  useNumbers: true,
  useSpecialCharacters: false,
  passwordLength: 8
},
{
  useUpprcase: true,
  useLowercase: false,
  useNumbers: true,
  useSpecialCharacters: false,
  passwordLength: 8
},
{
  useUpprcase: true,
  useLowercase: false,
  useNumbers: true,
  useSpecialCharacters: false,
  passwordLength: 8
}];


