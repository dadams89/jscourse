
//Coding Challenge 2//**

var years = [1990,1989,1920,1980,2002];
var years2 = [1925,1906,2010,2008];
var empty = [];

console.log(years);
console.log(years2);

function printFullAge(years){

    for (let i = 0; i < years.length; i++) {
        let age = 2016 - years[i];

        empty.push(age);

        if(age >= 18){
            console.log('Person ' + i + ' is of full age, their age is ' + age);
            years[i] = true;
        }else if(age < 18 && age > 0){
            console.log('Person ' + i + ' is not of full age, their age is ' + age);
            years[i] = false;
        }
    }


    return years;
}


full_1 = printFullAge(years);
full_2 = printFullAge(years2);

console.log(full_1);
console.log(full_2);



//Lecture: Loops

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// var names = ['John','Jane','Mary','Mark','Bob'];

// for (let index = names.length - 1; index >= 0; index--) {
//     console.log(names[index]);
// }
// var i = 0;
// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// for (let index = 1; index <= 5; index++) {
//     if(index===3){continue;}
//     console.log(index);
// }


//Lecture: Objects and Methods

// var arr = [1,2,3];

//v1.0

// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane','Mark','Bob'],
//     calculateAge: function(yearOfBirth){
//         return 2016 - this.yearOfBirth;
//     }
// };

// console.log(john.calculateAge());

// john.age = john.calculateAge();

// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane','Mark','Bob'],
//     calculateAge: function(yearOfBirth){
//         this.age = 2016 - this.yearOfBirth;
//     },
// };

// john.calculateAge();


// var mike = {
//     yearOfBirth: 1990,
//     calculateAge: function(yearOfBirth){
//         this.age = 2016 - this.yearOfBirth;
//     },
// };

// mike.calculateAge();


/*console.log(john.lastName);
console.log(john.name);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane.job = 'Retired';
jane.isMarried = true;

console.log(jane);*/

//Lecture: arrays

/*var names = ['John','Jane','Mark'];
var years = new Array(1990,1969,1948);

console.log(names[0]);

names[1] = 'Ben';

console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

//Add element to end
john.push('blue');
//Add element to beginning
john.unshift('Mr.');
//Remove last element
console.log(john.pop());
//Remove first element
console.log(john.shift());
//Get i based on value
console.log(john.indexOf('Smith'));

console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}*/

//Lecture: Statements & Expressions

/*function someFunction(par){
    //statement
}

var someFun = function(){
    //expression
}*/

// Lecture: Functions

/*function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 65-age;

    if(retirement < 0){
        console.log(name + ' has been retired for ' + Math.abs(retirement) + ' years!' );
    }else{
    console.log(name + ' retires in ' + retirement + ' years!');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);*/


//Coding Challenge #1

/*playerOne = {name: 'Jared', age: 16, height: Math.floor(Math.random() * 1001), score: 0};
playerTwo = {name: 'Jack',age: 25, height: Math.floor(Math.random() * 1001), score: 0};
playerThree = {name: 'Jerry',age: 43, height: Math.floor(Math.random() * 1001), score: 0};
players = [playerOne,playerTwo,playerThree];
var scores = [];
players.forEach(element => {
    element.score = element.height + (element.age * 5);
    scores.push(element.score);
});

//Find the max value
var maxval = Math.max(...scores);

//find winners and push to array
var winners = [];
players.forEach(element => {
    if(element.score === maxval){
        winners.push(element);
    }
});

//determine if there is a tie
if(winners.length > 1){
    console.log('We have a tie!');
    console.log('Our winners are:');
}else if(winners.length === 1){
    console.log('We have a winner!');
    console.log('Our winner is:');
}

//print the winners
winners.forEach(element => {
    console.log(element.name + ' age: ' + element.age + ' height in cm: ' + element.height)
    + ' score = ' + element.score;
});*/




//Lecture: boolean logic and switch

/*var age = 30;

if (age < 20) {
    console.log('John is a teenager');
}
else if(age >= 20 && age <= 30){
    console.log('John is a young man');
}else{
    console.log('John is an adult');
}

var job = 'Teacher';

job = prompt('What does John do for work?');

switch (job.toLowerCase()) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    
    case 'driver':
        console.log('John drives a cab in Lisbon');
        break;

    case 'cop':
        console.log('John helps fight crime');
        break;

    default:
        console.log('John does something else');
        break;
}*/


//Lecture: if/else statements

/*var name = 'John';
var age = '26';
var isMarried = 'yes';

if (isMarried == 'yes') {
    console.log(name + ' is married! ');
} else {
    console.log(name + ' will hopefully marry soon! ');
}


isMarried = false;
if (isMarried) {
    console.log(name + ' is married! ');
} else {
    console.log(name + ' will hopefully marry soon! ');
}


if (isMarried) {
    console.log(name + ' is married! ');
}*/


// Lecture: Operators

/*var now = 2016;

var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);


var ageJohn = 30;

var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;


console.log(ageJohn,ageMark);

ageJohn++;
ageMark *= 2;*/


// Lecture: Variables 2

// var name = "John";
// var age = 26;


// // console.log(name + age);
// // console.log(age + age);

// var job,isMarried;

// // console.log(job);


// job = "Teacher";
// isMarried = false;

// console.log(name + " is a " + age + " years old " + job +
//  " Is he married? " + isMarried + ".");

//  age = 'thirty six';
//  job = 'driver';

//  console.log(name + " is a " + age + " years old " + job +
//  " Is he married? " + isMarried + ".");

// var lastName = prompt('What is your last name?');
// console.log(lastName);

// alert("I'm an alert!");

// var name = "John";

// console.log(name);

// var lastName = "Smith";

// console.log(lastName);

// var age = 26;

// console.log(age);

// var fullAge = true;

// console.log(fullAge);