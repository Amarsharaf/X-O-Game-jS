let title = document.querySelector(".title");
let turn = "x";
let squares = [];

function reapet(num1,num2,num3) {
    title.innerHTML = `${squares[num2]} Winner`
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setInterval(function() {
        title.innerHTML += '.'
    },1000)
    setTimeout(function() {
        location.reload()
    },3000)
}
function compareWinner() {
    for(let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[2]!='') {
        reapet(1,2,3)
    } else if (
        squares[4] == squares[5] &&
        squares[5] == squares[6] &&
        squares[5] != ""
      ) {
        reapet(4,5,6)
      } else if (
        squares[7] == squares[8] &&
        squares[8] == squares[9] &&
        squares[7] != ""
      ) {
        reapet(7,8,9)
      } else if (
        squares[1] == squares[4] &&
        squares[4] == squares[7] &&
        squares[4] != ""
      ) {
        reapet(1,4,7)
      } else if (
        squares[2] == squares[5] &&
        squares[5] == squares[8] &&
        squares[8] != ""
      ) {
        reapet(2,5,8)
      } else if (
        squares[3] == squares[6] &&
        squares[6] == squares[9] &&
        squares[9] != ""
      ) {
        reapet(3,6,9)
      } else if (
        squares[1] == squares[5] &&
        squares[5] == squares[9] &&
        squares[1] != ""
      ) {
        reapet(1,5,9)
      } else if (
        squares[3] == squares[5] &&
        squares[5] == squares[7] &&
        squares[7] != ""
      ) {
          reapet(3,5,7)
}
    }
    

function turnGame(id) {
    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML == "") {
      element.innerHTML = "X";
      title.innerHTML = "O";
      turn = "o";
    } else if (turn === "o" && element.innerHTML == "") {
      element.innerHTML = "O";
      title.innerHTML = "X";
      turn = "x";
    }
    
    compareWinner();
  }