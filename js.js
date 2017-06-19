console.log('hello world')

var board = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
]

var currentPlayer = 'blue';

var pieces = {
  0: 'white',
  1: 'blue',
  2: 'red'
}

var renderBoard = (board) => {

  // document.getElementById('board').empty();


  board.forEach(function(row, index) {
    row.forEach(function(pieceValue) {
      var newPiece = document.createElement('div');
      newPiece.className = pieces[pieceValue];
      var row = document.getElementById(index);
      row.appendChild(newPiece)
    })
  })
}


// renderBoard(board);


