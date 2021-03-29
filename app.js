const fields = document.querySelectorAll(".board__field");
const currentPlayerInfo = document.querySelector("#current-player-info");
const winnerPlaceholder = document.querySelector("#winner");

let move = 0;
const o = '<i class="far fa-circle"></i>';
const x = '<i class="fas fa-times"></i>';
let currentPlayer = x;
const history = {};

// innitialy define currentPlayer
currentPlayerInfo.innerHTML = currentPlayer;

fields.forEach((field) => {
  // field.innerHTML = field.getAttribute("id");

  field.addEventListener("click", game);
});

function game() {
  // is field taken
  if (this.innerHTML) return console.log(`This field is allready taken!`);

  // mark choosen field
  this.innerHTML = currentPlayer;

  // add to history
  const id = this.getAttribute("id");
  history[id] = currentPlayer;
  console.log("history =", history);

  // is Winner
  winner = isWinner(history, currentPlayer);
  if (winner) return console.log("winner => ", winner);

  // continue game
  move++;
  currentPlayer = move % 2 === 0 ? x : o;
  currentPlayerInfo.innerHTML = currentPlayer;
}

const isWinner = (history, currentPlayer) => {
  const { a1, a2, a3, b1, b2, b3, c1, c2, c3 } = history;
  let winner = null;

  if (a1 != null && a1 === a2 && a1 === a3) winner = currentPlayer;
  if (b1 != null && b1 === b2 && b1 === b3) winner = currentPlayer;
  if (c1 != null && c1 === c2 && c1 === c3) winner = currentPlayer;

  if (a1 != null && a1 === b1 && a1 === c1) winner = currentPlayer;
  if (a2 != null && a2 === b2 && a2 === c2) winner = currentPlayer;
  if (a3 != null && a3 === b3 && a3 === c3) winner = currentPlayer;

  if (a1 != null && a1 === b2 && a1 === c3) winner = currentPlayer;
  if (a3 != null && a2 === b2 && a3 === c1) winner = currentPlayer;

  if (winner) {
    winnerPlaceholder.innerHTML = `And The Winner Is: ${winner}`;
    endGame();
  }

  if (Object.keys(history).length === 9) {
    winnerPlaceholder.innerHTML = `Game ended. There is no winner!`;
    endGame();
  }

  return winner;
};

function endGame() {
  fields.forEach((field) => field.removeEventListener("click", game));
}
