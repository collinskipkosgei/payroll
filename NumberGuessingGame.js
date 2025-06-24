function numberGuessingGame() {
    const numberToGuess = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    let previousGuess = null;
    let attempts = 0;

    const guessNumber = () => {
        const guess = parseInt(prompt("Enter your guess (1-100): "), 10);
        attempts++;

        if (guess < 1 || guess > 100) {
            console.log("OUT OF BOUNDS");
            return guessNumber(); // Ask for another guess
        }

        // Check if the guess is correct
        if (guess === numberToGuess) {
            console.log(`You've guessed correctly in ${attempts} attempts! The number was ${numberToGuess}.`);
            return; // End the game
        }

        if (previousGuess === null) {
            if (Math.abs(guess - numberToGuess) <= 10) {
                console.log("WARM!");
            } else {
                console.log("COLD!");
            }
        } else {
            // Subsequent turns feedback
            if (Math.abs(guess - numberToGuess) < Math.abs(previousGuess - numberToGuess)) {
                console.log("WARMER!");
            } else {
                console.log("COLDER!");
            }
        }


        previousGuess = guess;
        guessNumber(); 
    };

    guessNumber(); 
}

