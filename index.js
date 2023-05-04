// Declare variable userScore with initial value 0 to track the user score
let userScore = 0;
// Declare variable computerScore with initial value 0 to track the computer score
let computerScore = 0;

// Run the game
bestOf(5)

// Declare function playRound(type, i) to play a round. Return nothing
function playRound(type, i) {

    // Ask user to input  rock / paper / scissors
    // Store input in a String variable named userChoice
    let userChoice = prompt(`Round ${i+1}! Choose between  rock / paper / scissors`)
    // Make userChoice insensitive with insensitive()
    userChoice = insensitive(userChoice)

    // Declare variable computerChoice with initial value calculated
    // ... by randomChoice() to define computer choice
    let computerChoice = randomChoice()

    // Declare variable msg with initial value "" to display results to user
    let msg = ""
    // Declare variable winner calculated by decideWinner() to decide winner
    let winner = decideWinner( userChoice, computerChoice )

    // Display results
    // Group console with name `${type} ${i + 1}`  
    console.group( type + " " + (i + 1) )
    // Test who the winner is
    switch( winner ){
        // if winner is "user"
        case "user":
            // increase userScore by 1
            userScore++
            // set msg to win message
            msg = `${userChoice} beats ${computerChoice}! you win this round`
            // log msg
            console.log( msg )
            break;
        // if winner is "computer"
        case "computer":
            // increase computerScore by 1
            computerScore++
            // set msg to lose message
            msg = `Oh no! ${computerChoice} beats ${userChoice}! you lose this round`
            // log msg as an error
            console.error( msg )
            break;
        // if winner is "tie" 
        case "tie":
            // set msg to tie message
            msg = `${userChoice} vs ${computerChoice}? this round is a tie`
            // log msg
            console.log( msg )
            break;
    }
    // End group
    console.groupEnd()
}//

// Declare function randomChoice() to choose randomly to return
// "rock" / "paper" / "scissors"
function randomChoice(){
    let randomNumber = Math.random()
    if ( randomNumber > 1/3 ){
        return "rock"
    } else if ( randomNumber > 2/3 ){
        return "paper"
    } else if ( randomNumber > 1){
        return "scissors"
    } else {
        return "error"
    }
}//

// Declare function insensitive() to make text case and space insiensitive
function insensitive(str){
    return str.trim().toLowerCase()
}
    
// Declare function bestOf(n) to play a set of (n) rounds
function bestOf(n){
    // In a loop of i = 0, while i < n, increment i
    for ( let i = 0; i < n; i++ ) {
        // Play round with playRound("Round",i)
        playRound( "Round", i )
        // if isResultSecured(n) break the loop
        // Log rounds left
        let roundsLeft = n - i
        console.log( roundsLeft + " rounds left" )
    }//
    // Declare msg variable with initial value ""
    let msg = ""

    // Log bracket results
    console.group( "Best of " + n )
    // Log userScore
    console.log( "Your score: " + userScore )
    // Log computerScore
    console.log( "Computer score: " + computerScore )
    
    if( userScore > computerScore ) { // if won
        // msg is win result
        msg = "Congrats! you won best of " + n + " :D" 
    } else if( userScore < computerScore ){ // if lost 
        // msg is lost result
        msg = "You lost best of " + n + " :("
    } else if( userScore === computerScore ){// if tie
        // Log tie result'
        console.log(`Best of ${n} it's a tie! WHAT IS  HAPPENING?`)
        // run tieBraker()
    }
    // Log msg
    console.log( msg )
    console.groupEnd()
    // Show msg in screen and ask if user wants to play again
}//

// Declare function decideWinner(userChoice, computerChoice)
// ...Returns "user" / "computer" / "tie"
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
    // Return true if
        // user has won more than half total (score is greater)
        // computer has won more than half of total (score is greater)
    // Return false otherwise
//

// Declare function tieBraker()
    // while userScore is exactly computerScore
        // count how many times has played tie braker with variable i
        // playRound("Tie Braker", i)
    //
//