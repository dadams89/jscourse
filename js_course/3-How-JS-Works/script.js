///////////////////////////////////////
// Lecture: Hoisting


// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2016-year);
// }

//retirement(1990); - does not work as the function is not an expression

// var retirement = function(year){
//     console.log(65-(2016-year));
// }



//Variables


//console.log(age); - this does not work because it is hoisted as undefined before being given a value
// var age = 23;
// console.log(age);


// function foo () {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);







///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword


//console.log(this); - the window object

// calculateAge(1985);


// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016-this.yearOfBirth);
        // innerFunction();
        // function innerFunction(){
        //     console.log('doing inner function');
        //     console.log(this);
        // }

    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();