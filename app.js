var firstName = prompt("what is your first name");
var lastName = prompt("what is your last name");
var age = prompt("what is your age");
var fullName =  firstName + "" + lastName;
console.log("Your full Name is " + fullName);


var age = prompt("what is your age");
var days = age * 365;
alert(age + "") 


if(age < 18) {
    console.log("Your nor old enough to join the party");
}

else if(age <21) {
    console.log("you can enter the team joint, but cant drink at the bar");
}

else(
    console.log("Welcome, Drinks are at the bar")
);





/// EXERCISES FROM MR COLT STEELE///






if(age < 21) {
    console.log("Error Get-Out of the Party You Cunt!!!")
}

else if(age === 21) {
    console.log(" Ciroc Party has just Started Join the party")

}






//// Guessing Game Project /////

// Create a secret Number //

var secretNumber = 4;

// ask user for guess
var stringGuess = prompt("Guess a Number")
var guess = Number(stringGuess);

// Check if the guess is correct 
if (guess === stringGuess) {
    alert("Your Guess is correct");
}

// Check if the guess is higher //

else if (guess > stringGuess) {
    alert("You Cunt, You guessed to high");
}

// Check if the guess is lower //

else   {
    alert("you guessed to low fck");
}







