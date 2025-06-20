let playerChoice;

let computerChoice;

function player(){
    playerChoice = prompt("What is your choice?")
        if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
        alert("You chose incorrectly");
        player();
        }
    else{
        playerChoice.toLowerCase();
        computer();
    }
}
function computer(){
    let number = Math.floor(Math.random()* 3);
    console.log(number);
    switch (number){
        case 0: 
            computerChoice = "rock";
            console.log(computerChoice);
            gameResult();
            break;
        case 1: 
            computerChoice = "paper";
            console.log(computerChoice);
            gameResult();
            break;
        case 2: 
            computerChoice = "scissors";
            console.log(computerChoice);
            gameResult();
            break;
        default: 
            console.log("Error - computer failed to load")
            break;
    }
}

function gameResult(){
    alert(`The computer chose: ${computerChoice}`);
    alert("The winner is...");
    if (playerChoice === computerChoice){
        alert("It's a draw!")
    }else if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper"){
        alert("You! 🦸")
    }else {
        alert("The computer! 🤖")
    }
    menu();
}

function menu(){
    let menuChoice = prompt("Would you like to play again? yes or no","no");
    if (menuChoice.toLowerCase() === "no"){
        alert("Thanks for Playing!");
    } else if (menuChoice.toLowerCase() === "yes"){
        player();
    } else{
        alert("Please enter yes or no.");
        menu();
    }
}
player();