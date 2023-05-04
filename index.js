// Create a function named computerChoice() that randomly returns...
// a "rock", "paper" or "scissors" String with the same odds
function computerChoose(){
    // Generate randomNumber between 0 and 0.999...
    let randomNumber = Math.random()
    // if the number is below 1/3, return rock
    // else if it is below 2/3, return paper
    // else return scissors
    if( randomNumber < (1/3) ){
        return "rock"
    } else if ( randomNumber < (2/3)){
        return "paper"
    } else {
        return "scissors"
    }
}

// Make userChoice case and space insensitive
function insensitive(str){
    return str.trim().toLowerCase()
}

// Create a function named playRound() that compares computerChoice()...
// and userChoice and determines the winner
function playRound( roundsLeft ){
    // Ask for user input and store it on a string variable named userChoice
    let userChoice = prompt("Let's play! choose between: rock / paper / scissors")
    // make userChoice insensitive
    userChoice = insensitive(userChoice)
    // make computer choose
    let computerChoice = computerChoose()
    // Determine if user won
    let userWon = userChoice === computerChoice

    // Display round results
    console.group("Round")
    console.log(`You chose: ${userChoice}`)
    console.log(`Computer chose: ${computerChoice}`)
    if( userWon )  {
        console.log("Congrats! you win this round")
        console.log(roundsLeft + " rounds left")
        console.groupEnd()
        return 1
    } else {
        console.error("Oh no! you've lost")
        console.log(roundsLeft + " rounds left")
        console.groupEnd()
        return 0
    }
    
}

// Create a function named playBestOfFive() that runs playRound() 5 times
function playBestOf( num ) {
    // Create an int variable named userScore
    let userScore = 0;
    // Create results msg
    let msg = "";

    // Create variable named resultDecided to know if result has been decided
    // Initially set to false
    let resultDecided = false;
    // Rounds played variable initially set to 0
    let roundsPlayed = 0;
    // Computer score initially set to 0
    let computerScore = 0;

    let hasWon = false;
    let hasLost = false;

    for (let i = num; i > 0; i--) {
        
        // If user has already won or lost, display exit loop
        if (resultDecided){
            break
        }

        // Play round and update user score
            userScore += playRound(i - 1)

        // Update roundsPlayed
        roundsPlayed = num - i + 1
        // Update computerScore
        computerScore = roundsPlayed - userScore

        hasWon = userScore > (num/2)
        hasLost = computerScore > (num/2)

        // Update resultDecided
        resultDecided = hasWon || hasLost 
    }
    // Display best of (n) bracket results
    console.log( "Your score: " + userScore)
    if ( hasWon ){
        msg = `You win best out of ${num}!`
    } else if ( hasLost ){
        msg = `You lose best out of ${num} :(`
    } else if ( userScore === (num / 2)){ // Handle case that num is not odd
        console.log(`It's a tie!`)
        if ( confirm("Tie braker?") ){
            if(playRound()){
                msg = "You won by tie braker"
            } else {
                msg = "You lost by tie braker"
            }
        }
    }
    console.log( msg )

    if( confirm( msg + "\n" + "Play another set?") ){
        playBestOf(5)
    }
}

playBestOf(5)