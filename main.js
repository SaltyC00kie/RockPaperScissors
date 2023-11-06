const rock = "Rock";
const paper = "Paper"; 
const scissors = "Scissors";
const player1 = "You";
const player2 = "Computer";
const WINSCORE = 5;

let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll(".btn");
const outputDiv = document.querySelector(".output");

gameButtons.forEach(btn => btn.addEventListener('click', function(e){

    let playerChoice = e.target.innerText;
    let computerChoice = getComputerChoice();

    writeToOutput("You choosed: " + playerChoice);
    writeToOutput("Computer choosed: " + computerChoice, true);

    let roundWinner = playRound(playerChoice, computerChoice);
    
    writeToOutput("Try again :) ", true);
    checkWinner(); 
    
}));

outputDiv.addEventListener("click", e => clearOutput());



/*
    writes the messsage to the outputbox if append true, text will be appended at the end

    @param {String} pMessage - messsage which should be shown
    @param {Boolean} append - check if the message should be attended at the bottom

    @return {Void}
*/
function writeToOutput(message, doAppend = false)
{

    const outputDiv = document.querySelector(".output");

    if(doAppend)
    {
        message = outputDiv.innerText + "\n" + message;
    }

    outputDiv.innerText = message;
}

/*
    clears the outputdiv 

    @return {Void}
*/
function clearOutput()
{
    writeToOutput(null);
}



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
function playRound(pPlayersChoice, pComputerChoice) 
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

    let winningText;
    if(winner === "Draw")
    {
        winningText = "Draw";
    }
    else if(winner == player1)
    {
        winningText = "You've won!"
    }
    else
    {
        winningText = "Computer won!";
    }
    
    increaseScore(winner);
    writeToOutput(winningText + "\n ----------\n ", true)

    return winner;
}


/*
    increases the game score of the winner and updates the score at the ui <br>
    when draw no score has to be updated
    

    @param {String} winner

    @return {Void}
*/
function increaseScore(winner)
{
    if(winner == player1)
    {
        playerScore++;
        setUiScore(winner, playerScore);
        return;
    }

    //computer won
    if(winner == player2)
    {
        computerScore++;
        setUiScore(winner, playerScore); 
        return; 
    }
}

/*
    writes the new Score to the ui

    @param {String} winner 
    @param {Number} score - the score which should be set 

    @return {Void}
 */
function setUiScore(winner, score)
{
    let scoreDiv = document.querySelector(".score"); 
    let regex = new RegExp(winner + ": \\d+");

    scoreDiv.innerText = scoreDiv.innerText.replace(regex, winner + ": " + score);
}

function checkWinner()
{
    if(playerScore >= WINSCORE)
    {
        setWinnerUi(player1);
    }
    else if(computerScore >= WINSCORE)
    {
        setWinnerUi(player2);
    }
}

/*
    displays the winner of the game and replaces the game button with a reset button

    @param {String} winner - the winner of the game

    @return {void}
*/
function setWinnerUi(winner)
{
    writeToOutput(winner + (winner == player1 ? " have " : " has" )+ " won!");
    writeToOutput("Want to play again?", true); 

    let inputDiv = document.querySelector(".input");
    let gameButtons = document.querySelectorAll(".btn");

    gameButtons.forEach(btn => btn.remove());

    let resetButton = document.createElement("button"); 
    resetButton.classList.add("btn");
    resetButton.textContent = "Reset";

    inputDiv.appendChild(resetButton);

   resetButton.addEventListener("click", e => {
       location.reload(); 
       return false
    });
}