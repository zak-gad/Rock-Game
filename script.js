const choices = document.getElementById("choices")
const feedback = document.getElementById("feedback")


// DRY: Don't Repeat Yourself

const items = ["rock", "paper", "scissors"]

choices.onclick = event => {
  const id = event.target.id
  
  const random = Math.floor(Math.random() * 3)
  const computerPick = items[random]

  let result
  if (id === computerPick) {
    result = "tie"

  } else {
    let win // true || undefined (falsy)

    if (id === "rock") {
      win = computerPick === "scissors"
    } else if (id === "paper") {
      win = computerPick === "rock"
    } else if (id === "scissors") {
      win = computerPick === "paper"
    }
  
    result = win ? "you win" : "you lose"
  }

  
  feedback.textContent = `You clicked: ${id}
The computer picked: ${computerPick}
Result: ${result}`
}


// rock, paper       0 - 1 *
// rock, scissors  * 0 - 2 
// paper, scissors   1 - 2 *

        // let computerMove = '';

        // if (randomNumber >= 0  && randomNumber < 1/ 3) {
        //      computerMove ='rock';
        // } else if (randomNumber >= 1 / 3 &&
        // randomNumber < 2 / 3) {
        //    computerMove = 'Paper';
        // } else if (randomNumber >= 2/3 &&
        // randomNumber < 1){
        //     computerMove = 'Scissors';
        // }

        // console.log(computerMove);
        // let result = '';

        // if ( computerMove === 'rock') {
        //     result = 'Tie.';
        // } else if (computerMove === 'Paper'){
        //     result = 'You lose.';
        // } else if (computerMove === 'Scissors') {
        //     result = 'You win.';
        // }

        // alert(`Youpicked rock. Computer picked 
        // $ {computerMove}.${result} `);
