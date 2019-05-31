// Lecture Variables

/*var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);*/

// Lecture variables 2

/*var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = "teacher";
isMarried = false;

console.log(name+' is a '+age+' year old '+job+'. Is he married? '+isMarried+'.');

age = 'thirty-six';
job = 'driver';

console.log(name+' is a '+age+' year old '+job+'. Is he married? '+isMarried+'.');


//var lastName = prompt('What is the last name?');
//onsole.log(lastName);


alert(name+' is a '+age+' year old '+job+'. Is he married? '+isMarried+'.');
*/

//Lecture: Operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;


console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;
//ageMark = ageMark * 2;
console.log(ageJohn);
//ageJohn = ageMark = 26;
console.log(ageMark);

*/
////////Lecture : if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}


if (23 == '23'){
    console.log('Something tp print....');
}
*/

//Lecture: Boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.')
}

var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
           }
*/

//Coding Challenge//

//Request player height
var playerOne = prompt('How tall is player one (in centimeters)?');
var playerOneHeight = parseInt(playerOne);

var playerTwo = prompt('How tall is player two (in centimeters)?');
var playerTwoHeight = parseInt(playerTwo);

var playerThree = prompt('How tall is player three (in centimeters)?');
var playerThreeHeight = parseInt(playerThree);

//Request player age
var playerOne = prompt('How old is player one?');
var playerOneAge = parseInt(playerOne);

var playerTwo = prompt('How old is player two?');
var playerTwoAge = parseInt(playerTwo);

var playerThree = prompt('How old is player three?');
var playerThreeAge = parseInt(playerThree);

//Calculate
var playerOneResult = playerOneHeight + (5 * playerOneAge);

var playerTwoResult = playerTwoHeight + (5 * playerTwoAge);

var playerThreeResult = playerThreeHeight + (5 * playerThreeAge);

//Crown the Champion!!!
if (playerOneResult > playerTwoResult && playerOneResult > playerThreeResult){
    console.log('Player 1 wins! With a score of:'+playerOneResult);
}
else if (playerTwoResult > playerOneResult && playerTwoResult> playerThreeResult) {
    console.log('Player 2 wins! With a score of:'+playerTwoResult);
}
else if (playerThreeResult > playerOneResult && playerThreeResult > playerTwoResult) {
    console.log('Player 3 wins! With a score of:'+playerThreeResult);
}


switch (true){
    case (playerOneResult == playerTwoResult && playerTwoResult == playerThreeResult && playerOneResult == playerThreeResult):
        console.log('Draw between all three!!')
        break;
    case playerOneResult == playerTwoResult:
        console.log('Draw between 1 and 2!!');
        break;
    case playerOneResult == playerThreeResult:
        console.log('Draw between 1 and 3!!');
        break;
    case playerTwoResult == playerThreeResult:
        console.log('Draw between 2 and 3!!');
        break;
            }
