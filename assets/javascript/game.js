<!-- //when the page loads: 

  // create an array of possible words
  var wordbank = ["meat", "woodworking", "hunting", "whisky", "breakfast", "jazz", "libertarianism"];
  // secret word is picked by computer randomly out of the array of possible words
  var secretWord = wordbank[Math.floor(Math.random() * wordbank.length)];
  // the screen shows a number of blanks equal to the number of letters in secret word //   - treat string like an array, loop over it, and for each letter, display the following string: "_" -->
  var hiddenWord = secretWord.replace(/\s/g, "-");
  //listen for this event - when a user types a key:
  document.onkeyup = function() {
  // store the key in a variable // letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
  //the user has not guessed this letter already
  var previousGuesses = 

  if(letterGuess is not found in the previousGuesses array) {

     add the letterGuess into the previousGuesses array;

     console.log("new guess");

     if (the letter is in the secret word - aka it was a good guess) {

         reveal the letter instead of blanks (what if letter occurs more than once?)
    
         if(the word is completely guessed) {
              console.log("the user wins!!");
              wins++;
              reset the secret word
              reset the number of guesses available
              reset the number of blanks shown
              reset the previous guesses array
         }
     }
     else {
        guessesLeft--;
        
        if(guessesLeft === 0) {
             console.log("you lost");
             losses++;
             reset the secret word
             reset the number of guesses available
             reset the number of blanks shown
             reset the previous guesses array
        }

     }
  }
  else {
     console.log("this is a duplicate guess");
  }
}

// How to choose random element out of array : 01-17-LM-Class-Content/Tu-Th-Sat-In-Class-Content/03-intro-js-hangman-dom/3.2-02-02-2017/Activities/09-RPS-Coded/rps-9.html, line 31 -->
