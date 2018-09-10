var firstName = 'Terreance';
console.log(firstName);
const states = 50;
var x = 5;
var y = 4;
var z = x + y;
var n = firstName.charCodeAt(0);
if (n > 76) {
    console.log('Back of the line!');
} else {
    console.log('next!');
}
function sayHello() {
    console.log('Hello World!');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) console.log('Sorry ' + name + " you aren't old enough");
}
// checkAge('Charles', 21);
// checkAge('Abby', 27);
// checkAge('James', 18);
// checkAge('John', 17);
var vegetables = ['carrots', 'peas', 'corn'];
for (var v = 0; v < vegetables.length; v++) {
    console.log(vegetables[v]);
}
var nameAge = [
    { name: 'Tim', age: 18 },
    { name: 'Charles', age: 22 },
    { name: 'Derek', age: 20 },
    { name: 'Kim', age: 24 },
    { name: 'Mike', age: 25 },
];

for (let i = 0; i < nameAge.length; i++) {
    checkAge(nameAge[i].name, nameAge[i].age);
}

function getLength(str) {
    return str.length;
}

let numofChararcters = getLength('Hello World');

n % 11 == 0;
('The world is a odd place!');
