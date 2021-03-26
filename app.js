const board = document.querySelector(".board");
const fields = document.querySelectorAll(".board__field");
const player = document.querySelector("#current-player");

const history = {};
let end = false;
let move = 0;
const o = "O";
const x = "X";
let currentPlayer = x;

player.innerHTML = currentPlayer;

fields.forEach((field, index) => {
  // const id = field.getAttribute("id");
  // field.innerHTML = id;

  field.addEventListener("click", function () {
    if (end) return console.log("winner => ", winner);

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
    player.innerHTML = currentPlayer;
  });
});

const isWinner = (history, currentPlayer) => {
  const { a1, a2, a3 } = history;
  let winner = null;

  if (a1 != null && a1 === a2 && a1 === a3) winner = currentPlayer;

  return winner;
};
