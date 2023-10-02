const rock = "Rock";
const paper = "Paper"; 
const scissors = "Scissors";
const player1 = "Player1";
const player2 = "Computer";

function getComputerChoice()
{
    const choices = [rock, paper, scissors];
    let randomIndex = getRandomInt(0, choices.length-1);

    return choices[randomIndex];
}

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
/*
    plays the game and returns the winner

    @param pPlayersChoice - 
    @param pComputerChoice - 

    @return {String} winner of the game
*/
function playGame(pPlayersChoice, pComputerChoice)
{
    let winner;

    switch(pPlayersChoice)
    {
        case "Rock": 
            if(pComputerChoice === paper)
                winner = player2; 
            else if(pComputerChoice === scissors)
                winner = player1;
            else if(pComputerChoice === rock)
                winner = "Draw";
            break;
        case "Paper":
            if(pComputerChoice === paper)
                winner = "Draw";
            else if(pComputerChoice === scissors)
                winner = player2;
            else if(pComputerChoice === rock)
                winner = player1;
            break;
        case "Scissors":
            if (pComputerChoice === paper)
                winner = player1; 
            else if(pComputerChoice == scissors)    
                winner = "Draw";
            else if(pComputerChoice === rock)
                winner = player2;
            break;
    }

    console.log("Winner is: " + winner + " - ")
}

playGame("Rock", getComputerChoice());