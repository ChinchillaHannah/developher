var myob = require('myobio-node')

var shuffle = function(a) {
   var output = a
   var random, tmp;
   for (var i = output.length; i; i--) {
       random = Math.floor(Math.random() * i);
       tmp = output[i - 1];
       output[i - 1] = output[random];
       output[random] = tmp;
   }
   return output;
}

var buildCar = function(name){
 console.log('-------------------------------');
 console.log('Making a car for ' + name);
 return {color: myob.input('please input a color: \n'),
 make: myob.input('please input a make: \n'),
 model: myob.input('please input a model: \n'),
 year: myob.input('please input a year: \n'),
 used: myob.input('used or new: \n')
 }
}

var makePerson = function(name){
 return {name: name,
   car: buildCar(name)}
}

var people = [makePerson('Androo'), makePerson('Jon'), makePerson('Viv'), makePerson('Oggs')];

var shuffledPeople = shuffle(people);

console.log(shuffledPeople[0]);
console.log(shuffledPeople[1]);
console.log(shuffledPeople[2]);
console.log(shuffledPeople[3]);
