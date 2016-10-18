class Game {
  constructor(){
    this.board = [[0, 0, 0],
                  [0, 0, 0],
                  [0, 0, 0]];
    this.turn="player 1";
    this.win=false;


  }

  start() {
    console.log(this.board[0]);
    console.log(this.board[1]);
    console.log(this.board[2]);
    console.log(this.turn + ", Please enter coordinates for your peice using 'place(x,y)'");

  }

  place(x, y) {
   
    if (this.board[y]===undefined || this.board[y][x] !==0) {
      console.log("You cannot place a piece here!");
      return;
    }

    if (this.turn === "player 1") {
      this.board[y][x]="X";
      console.log(this.board[0]);
      console.log(this.board[1]);
      console.log(this.board[2]);
      this.checkWins();
      if (!this.win){
        this.turn = "player 2";
        console.log("It is now " + this.turn + "'s turn. Use 'place(x,y)' to put down a piece");
      }
    } else {
      this.board[y][x]="O";
      console.log(this.board[0]);
      console.log(this.board[1]);
      console.log(this.board[2]);
      this.checkWins();
      if (!this.win) {
        this.turn = "player 1";
        console.log("It is now "+this.turn+"'s turn. Use 'place(x,y)' to put down a piece");
      }
    }
  }

  checkWins() {
    for (var w=0; w<this.board.length;w++){
      this.checkXwin(w);
      this.checkYwin(w);
    }
    for (var d = - this.board.length; d<this.board.length; d ++){
      this.checkNegDiagonal(d);
    }
    for (var e = 0; e< this.board.length*2; e++){
      this.checkPosDiagonal(e);
    }
  }

  checkXwin(yVal) {
    var Xs = 0;
    var Os = 0;
    for (var x = 0; x < this.board.length; x++) {
      if (this.board[yVal][x] ==='X') {
        Xs++;
      }
      if (this.board[yVal][x] ==='O') {
        Os++;
      }
    }

    if(Xs===3){
      console.log("Player 1 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;

    }
    if(Os===3){
      console.log("Player 2 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;
    }
  }

  checkYwin(xVal) {
    var Xs = 0;
    var Os = 0;
    for (var y = 0; y < this.board.length; y++) {
      if (this.board[y][xVal] ==='X') {
        Xs++;
      }
      if (this.board[y][xVal] ==='O') {
        Os++;
      }
    }

    if(Xs===3){
      console.log("Player 1 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;

    }
    if(Os===3){
      console.log("Player 2 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;
      
    }
  }
  checkNegDiagonal(xVal) {
    var Xs = 0;
    var Os = 0;
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] && this.board[i][xVal+i] ==='X') {
        Xs++;
      }
      if (this.board[i] && this.board[i][xVal+i] ==='O') {
        Os++;
      }
    }

    if(Xs===3){
      console.log("Player 1 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;

    }
    if(Os===3){
      console.log("Player 2 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;
      
    }
  }
  checkPosDiagonal(xVal) {
    var Xs = 0;
    var Os = 0;
    for (var i = this.board.length-1; i>=0; i--) {
      if (this.board[i] && this.board[i][xVal+i] ==='X') {
        Xs++;
      }
      if (this.board[i] && this.board[i][xVal+i] ==='O') {
        Os++;
      }
    }

    if(Xs === 3){
      console.log("Player 1 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;


    }
    if(Os === 3){
      console.log("Player 2 has won! Great Job! GAME OVER. START NEW A NEW GAME!");
      this.win=true;
      
    }
  }
}

//rachet tests
var game = new Game;
game.start();
game.place(0,0);
game.place(2,1);
game.place(1,1);
game.place(2,0);
game.place(2,2);
