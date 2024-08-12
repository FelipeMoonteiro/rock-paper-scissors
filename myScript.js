

    let markerHuman, markerComputer;
    let humanScore = 0, computerScore = 0, rounds = 3;
    let btn = document.querySelector("#btn");


    btn.addEventListener('click', function(event) {
        let targetID = event.target.id;
        switch(targetID){
            case 'rock':
                markerHuman = 0;
                console.log('Rock button was clicked');
                break;
            case 'paper':
                markerHuman = 1;
                console.log("Paper button was clicked");
                break;
            case 'scissors':
                markerHuman = 2;  
                console.log('Scissors button was clicked');
                break;
            default:
                break;
        }
    playGame();
    });

    function playGame (rounds){
        let result;
        // for (let i = 0; i < rounds; i++){
            // let playerChoice = window.prompt("Rock, Paper or Scissors?");
            // let playerChoice = ;
            function getComputerChoice () {
                return Math.floor(Math.random()*3);
            }

            // function getHumanChoice (){
            // //     return playerChoice.toLowerCase();
                
            // }
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

            // switch(getHumanChoice()){
            //     case "rock":
            //         console.log("Human: Rock");
            //         markerHuman = 0;
            //         break;
            //     case "paper":
            //         console.log("Human: Paper");
            //         markerHuman = 1;
            //         break;
            //     case "scissors":
            //         console.log("Human: Scissors");
            //         markerHuman = 2;
            //         break;
            //     default:
            //         console.log("Invalid choice. Please choose rock, paper or scissors. ");
            //         markerHuman = -1;
            //         break;
            // }

            // if (markerHuman === -1) {
            //     console.log("Game could not be played due to invalid input.");
            // } else {
                if (markerComputer === markerHuman) {
                    result = "Draw";
                } else if  ((markerHuman === 0 && markerComputer === 2) ||
                            (markerHuman === 1 && markerComputer === 0) ||
                            (markerHuman === 2 && markerComputer === 1)) {
                    result = "Human Victory";
                    ++humanScore;
                } else {
                    result = "Computer Victory";
                    ++computerScore;
                }
            // }
//  alert(result);
//  alert("Score: Computer: " + computerScore + "  Human: " + humanScore);
console.log(result);
console.log("Score: Computer: " + computerScore + "  Human: " + humanScore);
console.log("\n");
}
    // }
