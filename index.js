// Declare variable userScore with initial value 0 to track the user score
// Declare variable computerScore with initial value 0 to track the computer score

// Declare function playRound(type, i) to play a round. Return nothing

    // Ask user to input  rock / paper / scissors
    // Store input in a String variable named userChoice

    // Declare variable computerChoice with initial value calculated
    // ... by randomChoice() to define computer choice

    // Declare variable msg with initial value "" to display results to user
    // Declare variable winner calculated by decideWinner() to decide winner

    // Display results
        // Group console with name `${type} ${i + 1}`  
        // if winner is "user" 
            // increase userScore by 1
            // set msg to win message
            // log msg
        // if winner is "computer" 
            // increase computerScore by 1
            // set msg to lose message
            // log msg as an error
        // if winner is "tie" 
            // set msg to tie message
            // log msg
        //
        // End group
    //
//
    
// Declare function bestOf(n) to play a set of (n) rounds
    // In a loop of i = 0, while i < n, increment i
        // Play round with playRound("Round",i)
        // if isResultSecured(n) break the loop
        // Log rounds left
    //
    // Declare msg variable with initial value ""
    // Log bracket results
        // Log userScore
        // Log computerScore
        // if won
            // msg is win result
        // if lost
            // msg is lost result
        // if tie
            // Log tie result
            // run tieBraker()
        // Log msg
        // Show msg in screen and ask if user wants to play again
//

// Declare function decideWinner(userChoice, computerChoice)
// ...Returns "user" / "computer" / "tie"
    // return "user" if 
        // rock -> scissors
        // paper -> rock
        // scissors -> paper
    // return "tie" if i + 1
        // userChoice is exactly computerChoice
    // return "computer" otherwise
//

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