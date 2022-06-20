const choices = ['rock', 'paper', 'scissors']
const winners = [];

function Game() {
    //play the game. 5 rounds
    for (let i = 1; i <= 5; i++) {
        playRound();
        logWins();
    }
}

function playRound() {
    const playerSelection = playerChoice();
    console.log('You chose ' + playerSelection);
    const computerSelection = computerChoice();
    console.log('The computer chose ' + computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    console.log(winner);
}

function playerChoice() {
    let input = prompt('Type rock, paper, or scissors');
    while (input == null) {
        input = prompt('Type rock, paper, or scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Type rock, paper, or scissors. Make sure everything is lowercase and spelling is exact.');
        while (input == null) {
            input = prompt('Type rock, paper, or scissors');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC) {
    if (choiceP == choiceC) {
        return 'Tie';
    } else if (
    (choiceP === 'rock' && choiceC === 'scissors') ||
    (choiceP === 'paper' && choiceC === 'rock') ||
    (choiceP === 'scissors' && choiceC === 'paper'))
    {
        return 'Player Wins!'
    } else {
        return 'Computer Wins :('
}
}

function logWins() {
    let playerWins = winners.filter((winners) => winners == 'Player Wins!').length;
    let computerWins = winners.filter((winners) => winners == 'Computer Wins :(').length;
    let tieAll = winners.filter((winners) => winners == 'Tie').length;
    console.log('Results:')
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', tieAll);
    if (playerWins > computerWins) {
        console.log('Congratulations, You Won!');
    } else if (computerWins > playerWins) {
        console.log('Sorry, the Computer Wins');
    } else {
        console.log('You Tied with the Computer.');
    }
}
 
Game();