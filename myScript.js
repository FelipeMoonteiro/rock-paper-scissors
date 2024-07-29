
let playerChoice = window.prompt("Whats your choice?");
let markerHuman,markerComputer;

function getComputerChoice () {
    return Math.floor(Math.random()*3);
}

function getHumanChoice (){
    return playerChoice.toLowerCase();

}

switch (getComputerChoice()){
    case 0:
        console.log("Computer: Rock");
        markerComputer = 0;
        break;
    case 1:
        console.log("Computer: Paper");
        markerComputer = 1;
        break;
    case 2:
        console.log("Computer: Scissors");
        markerComputer = 2;
        break;
}

switch(getHumanChoice()){
    case "rock":
        console.log("Human: Rock");
        markerHuman = 0;
        break;
    case "paper":
        console.log("Human: Paper");
        markerHuman = 1;
        break;
    case "scissors":
        console.log("Human: Scissors");
        markerHuman = 2;
        break;
    default:
        console.log("Invalid choice. Please choose rock, paper or scissors. ");
        markerHuman = -1;
        break;
}

if (markerHuman === -1) {
    console.log("Game could not be played due to invalid input.");
} else {
    if (markerComputer === markerHuman) {
        console.log("Draw");
    } else if ((markerHuman === 0 && markerComputer === 2) ||
               (markerHuman === 1 && markerComputer === 0) ||
               (markerHuman === 2 && markerComputer === 1)) {
        console.log("Human Victory");
    } else {
        console.log("Computer Victory");
    }
}