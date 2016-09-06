var myob = require('myobio-node');
var number = Math.ceil(Math.random() * 10);
var guess = myob.input("Enter a number from 1 - 10");


while(true){
  guess = parseInt(guess);
  if (guess === number) {
    myob.output("Yay you guessed the number");
    break;
  }
  if (guess > number){
    myob.output("That's not the number, try guessing lower");
    guess = myob.input("Enter a number from 1 - 10");
  }
  if (guess < number){
    myob.output("That's not the number, try guessing higher");
    guess = myob.input("Enter a number from 1 - 10");
  }
}
