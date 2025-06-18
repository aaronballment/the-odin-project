let userInput = parseInt(prompt("Please enter the number you would like to FizzBuzz up to : "))

for (i = 0; i < userInput; i++){
  if (i % 3 === 0 && i % 5 === 0){
    word = 'fizzbuzz';
  }
  else if (i % 5 === 0){
    word = 'buzz';
  }
  else if (i % 3 === 0){
    word = 'fizz';
  }
  else {
    word = i;
  }
  console.log(word)
}