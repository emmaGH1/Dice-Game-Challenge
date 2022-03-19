// Create variables for the game state
let player1Score = 0
let player2Score = 0
let count = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const doubleOrNoBonus = document.getElementById("doubleOrNoBonus")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
} 

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    messageContent()
    player1Turn = !player1Turn

//keeps track of the amount of time a user has clicked the rollBtn
    count++
    randomNumber = Math.floor( Math.random() * 4) + 6
    if (count == randomNumber) {
        doubleOrNoBonus.style.display = "block"
        setInterval(function() {
            doubleOrNoBonus.style.display = "none"
        }, 4000)
    }
    
})

function messageContent() {
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
}

doubleOrNoBonus.addEventListener("click", function() {
      if (player1Turn) {
          dbOrNo(player1Scoreboard)
      } else {
          dbOrNo(player2Scoreboard)
      }

})

function dbOrNo(player) {
    const randomNumber = Math.floor( Math.random() * 4) + 1
    if (randomNumber < 5) {
          player.textContent *= 2
    } else {
        player.textContent *= 0
    }
}
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    count = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    doubleOrNoBonus.style.display = "none"

}
