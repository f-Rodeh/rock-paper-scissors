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

// Declare function logBracketResults that takes totalRounds to log it
function logBracketResults( type = "", totalRounds ){
    // Declare msg variable with initial value ""
    let msg = ""
    console.group( "Game Over!" )
    // Log userScore
    console.log( "Your score: " + userScore )
    // Log computerScore
    console.log( "Computer score: " + computerScore )
    
    if( userScore > computerScore ) { // if won
        // msg is win result
        msg = `Congrats! you won ${type} ${totalRounds} :D` 
    } else if( userScore < computerScore ){ // if lost 
        // msg is lost result
        msg = `You lost ${type} ${totalRounds} :(`
    } else if( userScore === computerScore ){// if tie
        // Log tie result'
        console.log(`${type} ${totalRounds} it's a tie! WHAT IS  HAPPENING?`)
        console.groupEnd()
        // run tieBraker()
        tieBraker()
        return
    }
    // Log msg
    console.log( msg )
    console.groupEnd()
    
    // When finished, delete data and ask user to play again
    let currentScore = "Computer: " + computerScore;
        currentScore += " | You: " + userScore + " "
        
    let playAgain = confirm( currentScore + "\n" + msg + "\n" + "Play again?")
    computerScore = 0;
    userScore = 0;
    if( playAgain ){
        bestOf(5)
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

// Declare function isResultSecured(totalRounds). Returns true / false
function isResultSecured( totalRounds ){
    // user wins if it has won more than half total (score is greater)
    let userWon = userScore > (totalRounds / 2);
    // computer wins if it has won more than half of total (score is greater)
    let computerWon = computerScore > (totalRounds / 2);
    // Return true if user or computer won
    // Return false otherwise
    return userWon || computerWon
}//

// Declare function tieBraker()
function tieBraker(){
    let n = 0;
    // while userScore is exactly computerScore
    for (let i = 0; userScore === computerScore; i++) {
        n = i + 1
        // Ask the user to continue with tie brakers
        if( confirm("IT'S A TIE !! do you want a Tie Braker?") ){
            // count how many times has played tie braker with variable i
            playRound("Tie Braker", i) 
        } else {      
            break
        }
    }
    logBracketResults("Tie Braker", n)
}//