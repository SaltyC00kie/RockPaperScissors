const rock = "Rock";
const paper = "Paper"; 
const scissors = "Scissors";
const player1 = "Player1";
const player2 = "Computer";


game(); 

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

    switch(pPlayersChoice.toUpperCase())
    {
        case "ROCK": 
            if(pComputerChoice === paper)
            {
                winner = player2;
            }
            else if(pComputerChoice === scissors)
            {
                winner = player1;
            }
            else if(pComputerChoice === rock)
            {
                winner = "Draw";
            }
            break;
        case "PAPER":
            if(pComputerChoice === paper)
            {
                winner = "Draw";
            }
            else if(pComputerChoice === scissors)
            {
                winner = player2;
            }
            else if(pComputerChoice === rock)
            {
                winner = player1;
            }
            break;
        case "SCISSORS":
            if (pComputerChoice === paper)
            {
                winner = player1;
            }
            else if(pComputerChoice === scissors)
            {
                winner = "Draw";
            }
            else if(pComputerChoice === rock)
            {
                winner = player2;
            }
            break;
        default: 
            console.log("Wrong Input, pick between Rock Paper Scissors");
            return;
    }

    let winningCondition;
    if(winner === "Draw")
    {
        winningCondition = pPlayersChoice + " is even to " + pComputerChoice;
    }
    else if(winner == player1)
    {
        winningCondition = pPlayersChoice + " beats " + pComputerChoice;
    }
    else
    {
        winningCondition = pComputerChoice + " beats " + pPlayersChoice;
    }
    
    console.log("Winner is: " + winner + " - " + winningCondition); 
    return winner;
}


function game()
{
    let scorePlayer1 = 0;
    let scorePlayer2 = 0;

    for(let i = 0; i <= 5; i++)
    {
        let userInput = prompt("Let's play Rock Paper Scissors! Pick one")
        let gameResult = playGame(userInput, getComputerChoice());

        if(gameResult == player1)
        {
            scorePlayer1++;
        }
        if(gameResult == player2)
        {
            scorePlayer2++;
        }
    }

    console.log("Winner is: " + ( (scorePlayer1 > scorePlayer2) ? player1 + " with a Score of: " + scorePlayer1 + ":" +scorePlayer2  : player2 + " with a Score of: " + scorePlayer2 + ":" + scorePlayer1));
}