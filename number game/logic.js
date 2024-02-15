// Generate random number between 1 and 15
const randomNumber = Math.floor(Math.random() * 15) + 1;
let tries = 3;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);

  if (!userGuess || userGuess < 1 || userGuess > 15) {
    alert("Please enter a valid number between 1 and 15");
    return;
  }

  if (userGuess === randomNumber) {
    displayResult("Congratulations! You guessed the correct number!");
  } else {
    tries--;
    if (tries === 0) {
      displayResult(`Sorry! You ran out of tries. The correct number was ${randomNumber}.`);
    } else {
      displayResult(`Wrong guess! ${userGuess} is ${userGuess > randomNumber ? "too high" : "too low"}. Tries remaining: ${tries}`);
    }
  }
}

function displayResult(message) {
  document.getElementById("result").innerText = message;
}
