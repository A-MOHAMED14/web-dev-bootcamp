var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"];

function playGame() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice)  
  {
    alert("You need to enter a valid choice. Try again!");
    return;
  }

  // Check for valid user choice
  userChoice = userChoice.toUpperCase();
  if (userChoice != "R" && userChoice != "P" && userChoice != "S") {
    alert("You need to enter a valid choice. Try again!");
    return;
  }

  var computerChoice = options[Math.floor(Math.random() * options.length)];

    // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
  }

    // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

    // Ask user to play again
  var playAgain = window.confirm("Play again?");
  if (playAgain) {
    playGame();
  }
}

// Run the game for the first time
playGame();
