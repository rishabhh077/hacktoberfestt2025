<!DOCTYPE html>
<html>
<head>
  <title>Tic Tac Toe</title>
  <style>
    .board { display: grid; grid-template-columns: repeat(3, 100px); gap: 5px; margin: 20px auto; width: 315px;}
    .cell { width: 100px; height: 100px; font-size: 2em; text-align: center; background: #eee; cursor: pointer;}
  </style>
</head>
<body>
  <h2>Tic Tac Toe</h2>
  <div id="board" class="board"></div>
  <p id="msg"></p>
  <script>
    let board = Array(9).fill(null);
    let current = 'X';
    let won = false;
    const cells = [];
    const msg = document.getElementById('msg');
    function checkWin() {
      const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      for(const [a,b,c] of wins){
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
          msg.textContent = board[a] + " wins!";
          won = true;
          return;
        }
      }
      if(board.every(cell=>cell)) msg.textContent = "Draw!";
    }
    function clickCell(idx){
      if(won || board[idx]) return;
      board[idx] = current;
      cells[idx].textContent = current;
      checkWin();
      current = current === 'X' ? 'O' : 'X';
    }
    const boardDiv = document.getElementById('board');
    for(let i=0;i
