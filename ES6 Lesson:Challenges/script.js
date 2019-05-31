// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
//const name6 = 'Jane Smith'; Error, const cannot be changed
let name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/
/*
// ES5 
function driversLicense5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;

    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially able to drive a car! ');
}

driversLicense5(true);

// ES6 
function driversLicense6(passedTest) {
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
         firstName = 'John';

    }
    
console.log(firstName + ', born in ' + yearOfBirth + ', is now officially able to drive a car! ');
}

driversLicense6(true);
*/



/*
let i = 23;


for (let i = 0; i < 5; i++) {
    console.log(i);
}


console.log(i);
*/



//////////////////////////////
//// Lecture: Block and IIFEs
/*

// ES6//
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a+b);
console.log(c);


// ES5
(function() {
    var c = 3;
 })();

//console.log(c);

*/


///////// Lecture: Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
*/

/////////// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
    return 2019 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/


///////// Lecture: Arrow Functions 2

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
       var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

// ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box6.clickMe();

/*

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();



// ES5
function Person(name) {
    this.name = name;
    
}

Person.prototype.myFriends = function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends(friends);

// ES6

function Person(name) {
    this.name = name;
    
}

Person.prototype.myFriends6 = function(friends) {
    let arr = friends.map(el => 
        `${this.name} is friends with ${el}`);
    console.log(arr);
}


new Person('Mike').myFriends6(friends);
*/

///////////// Lecture: Destructuring
/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);




function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(1993);

console.log(age2);
console.log(retirement);
*/


///////// Lecture: Arrays

/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(curr) {
    curr.style.backgroundColor = 'dodgerblue';
});


// ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(curr => curr.style.backgroundColor = 'dodgerblue');
*/

// Loop over Array
// ES5
/*
 for (var i = 0; i < boxesArr5.length; i++) {
     
     if(boxesArr5[i].className === 'box blue'){
         continue;
     }
     
     boxesArr5[i].textContent = 'I changed to blue!';
 }

// ES6
for (const curr of boxesArr6) {
    if (curr.className.includes ('blue')) {
        continue;
    }
    curr.textContent = 'I changed to blue!';
}


// ES5
var ages = [12, 19, 8, 21, 14, 11];

var full = ages.map(function(curr) {
    return curr >= 18;
});
console.log(full);

//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);

// ES6
let newAge = ages.findIndex(curr => curr >= 18);
//console.log(newAge);
let newAge2 = ages.find(curr => curr >= 18);
//console.log(newAge2);
*/



////////// Lecture: Spread Operator
/*
function addFourAges (a,b,c,d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John','Jane','Mark'];
const familyMiller = ['Mary','Bob','Ann'];
const bigFamily = [...familySmith,'Lily',...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];

Array.from(all).forEach(curr => curr.style.color = 'purple');
*/


//////////// Lecture: Rest Parameters
/*
// ES5

function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(curr) {
        console.log((2019-curr) >= 18);
    })
}


isFullAge5(1990,2010,1965);
isFullAge5(1990, 1999, 1965, 2011, 1987);

// ES6
function isFullAge6(...years) {
    years.forEach(curr => console.log((2019-curr) >= 18));
}

isFullAge6(1990,2010,1965, 2018, 1987);
*/
/*
// ES5

function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    //console.log(argsArr);
    
    argsArr.forEach(function(curr) {
        console.log((2019-curr) >= limit);
    })
}


//isFullAge5(16,1990,2010,1965);
//isFullAge5(1990, 1999, 1965, 2011, 1987);

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(curr => console.log((2019-curr) >= limit));
}

isFullAge6(16, 1990,2010,1965, 2018, 1987);
*/

////////// Lecture: Default Parameters
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName;
    
    nationality === undefined ? nationality = 'American' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

//var john = new SmithPerson('John',1990);
//var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John',1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/


//////////// Lecture: Maps
/*
// ES6
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
//console.log(question.size);


if (question.has(4)) {
    //question.delete(4);
    //console.log('Answer 4 is here');
}

//question.clear();



//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/



//////////// Lecture: Classes
/*
// ES5
var Person5 = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
    }
    
    static greeting() {
        console.log('Hey There!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/



/////////////// Lecture: Subclasses

/*
// ES5
var Person5 = function(name,yearOfBirth,job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name,yearOfBirth,job, olympicGames,medals) {
    Person5.call(this,name,yearOfBirth,job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John',1990,'swimmer',3,10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();


// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    }

}

class Athelete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthelete6 = new Athelete6('John', 1990, 'swimmer', 3, 10);

johnAthelete6.wonMedal();
johnAthelete6.calculateAge();

*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
/*
-----PARKS REPORT-----
Green Park has a tree density of 1075 trees per square km.
National Park has a tree density of 1221.0344827586207 trees per square km.
Oak Park has a tree density of 2372.5 trees per square km.
Our 3 parks have an average of 74.33333333333333 years.
National Park has more than 1000 trees.
-----STREETS REPORT-----
Our 4 streets have a total length of 7.1000000000000005 km, with an average of 1.7750000000000001 km.
Ocean Avenue, build in 1999, is a big street.
Evergreen Street, build in 2008, is a small street.
4th Street, build in 2015, is a normal street.
Sunset Boulevard, build in 1982, is a huge street.
*/


class Element {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, nbrTrees) {
        super(name, buildYear);
        this.area = area;
        this.nbrTrees = nbrTrees;
    }
    
    treeDensity() {
        const density = this.nbrTrees/this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
    
    treeNumber() {
        if (this.nbrTrees > 1000) {
            console.log(`${this.name} has more than 1000 trees`);
        }
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name,buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifySt() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park',1921,5,5375),new Park('National Park',1954,10,945),new Park('Oak Park',1991,10,212)];

const allStreets = [new Street('Ocean Avenue',1994,1.1,4),new Street('Evergreen Street',2008,2.7,2),new Street('4th Street',2015,0.8),new Street('Sunset Boulevard',1970,2.5,5)];

function calc(arr) {
    const sum = arr.reduce((prev, curr, index) => prev+curr, 0);
    return [sum,sum/arr.length]
    //console.log(sum/arr.length);
};

function reportPark(p) {
    console.log('----PARKS REPORT----');
    // Density
    p.forEach(curr => curr.treeDensity());
    
    // Average Age
    /*
    const ages = [];
        for (const curr of p) {
            ages.push(curr.buildYear)
        };
    const [totalAge,avgAge] = calc(ages);
    */
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge,avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)


    //Which park has more than 1000
    //const i = p.map(el => el.nbrTrees).findIndex(el => el >= 1000);
    //console.log(p.map(el => el.nbrTrees));
    //console.log(`${p[i].name} has more than 1000 trees`);
    p.forEach(curr => curr.treeNumber());
}


function reportStreets(s) {
    console.log('----STREET REPORT----');
    
    // Total and Average Length
    const lengths = s.map(el => el.length);
    const [totalLen,avgLen] = calc(lengths);
    console.log(`Our 4 streets have a total length of ${totalLen} km, with an average of ${avgLen} km.`)
    
    //List all
    s.forEach(curr => curr.classifySt());
    
}

reportPark(allParks);
reportStreets(allStreets);






















































































