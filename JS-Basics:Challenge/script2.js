//Lecture: Functions//

/*function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageMike);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(name + ' is already retired.');
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/
/*
/////Lecture: Statements and Expressions
function someFun (par) {
    //code
}

var someFun = function(par) {
    //code
}

//Expressions 
3+4;
var x = 3;
///statements
if (x === 5){
    //do something 
}
*/

///////
////// Lecture: Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990,1969,1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John','Smith',1990,'designer',false];

john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}
*/


/////
///// Lecture: Objects


//var arr = [1,2,3];
//arr[0];
/*

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job']= 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/

////////////////////////////////////
//////Lecture: Objects and Methods//

//v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function(yearOfBirth) {
        return 2018 - this.yearOfBirth;
    }
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

//v2.0
var mike = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1950,
    job: 'teacher',
    isMarried: false,
    family: ['Jane','Mark','Bob'],
    calculateAge: function(yearOfBirth) {
       // return 2018 - this.yearOfBirth;
        this.age = 2018 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/


///////////////////////////////////////////
///////// Lecture: Loops //////////////////

/*for (var i = 0; i < 10; i++) {
    console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
*/
//for (var i = 0; i < names.length; i++){
//    console.log(names[i]);
//}

/*for (var i = names.length; i > 0; i--) {
    console.log(names[i-1]);
}
*/

// while Loop 
/*
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}


// Break
for (var i = 1; i <= 5; i++) {
    console.log(i);
    
     if (i === 3) {
         break;
     }
}

for (var i = 1; i <= 5; i++) {    
     if (i === 3) {
         continue;
     }
    
    console.log(i);
}
*/

/////////////////////////////////////
///// Coding Challenge 2 ///////////
/*
var years = [1998, 1960, 1975, 1984, 1992, 2005, 2000];

var years2 = [1965, 2008, 1992];


function printFullAge (array) {
    var age = [];
    var output = [];

    for (var i = 0; i < array.length; i++) {
        age[i] = 2018 - array[i];

        if (age[i] >= 18) {
            console.log('Person ' + (i+1) + ' is 18 or older. They are ' + age[i] );
            output.push(true);
        } else {
            console.log('Person ' + (i+1) + ' is NOT 18 or older. They are ' + age[i]);
            output.push(false);
        }
    }
    
    return output;
    
}

var full_1 = printFullAge(years);
var full_2 = printFullAge(years2);
*/

////////////////////////////////////////////////
/////////////////Lecture: Hoisting/////////////
/*

//functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2018 - year);
}//function declaration

// retirement(1990);

var retirement = function(year) {
    age = (2018-year);
    console.log(65-age);
}//function expression


//variables
console.log(age);
var age = 23;
//console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/


////////////////////////////////////////////////
// Lecture: Scoping

/*
// First Scoping Example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

//Example to show the difference between execution stack and scope chin


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(c);
    console.log(a+d);
}

*/

////////////////////////////////////////////////
// Lecture: The 'this' Keyword

//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
    console.log(2018-year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2018-this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();*/
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
    
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();











































