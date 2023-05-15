let userScore = 0;
let computerScore = 0;

const body = document.querySelector('body');
const results = document.createElement('div');
const scores = document.querySelector('#scores');

const buttons = document.querySelectorAll('#user-choice > button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})

function playRound(userChoice) {

    if ( userScore >= 5 || computerScore >= 5 ) return;

    let computerChoice = randomChoice() 
    let msg = ""
    let winner = decideWinner( userChoice, computerChoice )

    // Set msg
    switch( winner ){
        case "user":
            userScore++
            msg = `${userChoice} beats ${computerChoice}! you win this round`
            break;
        case "computer":
            computerScore++
            msg = `Oh no! ${computerChoice} beats ${userChoice}! you lose this round`
            break; 
        case "tie":
            msg = `${userChoice} vs ${computerChoice}? this round is a tie`
            break;
    }

    // Display results
    results.textContent = msg;
    body.appendChild(results)
    
    // Display score
    scores.textContent = 
      `Your score: ${userScore} | Computer score: ${computerScore}`;

    if( userScore >= 5) displayWinner('user')
    if( computerScore >= 5) displayWinner('computer')
}

function displayWinner( winner ){
    let msg = '';

    if('user') msg = 'You won 5 rounds! game over';
    else if('computer') msg = 'Computer won 5 rounds! game over';
    else msg = 'error';

    const wnr = document.createElement('h1');
    wnr.textContent = msg;
    body.appendChild(wnr)
}

// returns "rock" / "paper" / "scissors"
function randomChoice(){
    let randomNumber = Math.random()
    if ( randomNumber < 1/3 ){
        return "rock"
    } else if ( randomNumber < 2/3 ){
        return "paper"
    } else if ( randomNumber < 1){
        return "scissors"
    }
}

// returns "user" / "computer" / "tie"
function decideWinner(userChoice, computerChoice){
    // return "user" if rock -> scissors
    return (userChoice === "rock" && computerChoice === "scissors") ? "user": 
        // paper -> rock = "user"
        (userChoice === "paper" && computerChoice === "rock") ? "user":
        // scissors -> paper = "user"
        (userChoice === "scissors" && computerChoice === "paper") ? "user":
        // return "tie" if userChoice is exactly computerChoice
        (userChoice === computerChoice) ? "tie":
        // return "computer" otherwise
        "computer"
}//