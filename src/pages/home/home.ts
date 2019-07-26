import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public matrix: any;
  public x: number = 0;
  public o: number = 0;
  private count: number = 0;
  public winner: string = null;
  public draw: boolean = false;
  private players: boolean = true;
  private turnOfPlayerX: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    
  }

  makeMatrix(rows, columns, el) {
    this.matrix = Array(rows).fill(el).map(() => Array(columns).fill(el))
  }

  set(row, col) {
    if (this.players) {
      this.turnOfPlayerX ? this.playerVsIA(row, col) : null;
    } else {
      this.turnX(row, col);
    }
  }

  turnX(row, col) {
    if (this.x < 5 && !this.matrix[row][col] && !this.winner) {
      const turn = this.count % 2;
      if (!turn) {
        this.matrix[row][col] = 'x';
        this.x += 1;
      } else {
        this.matrix[row][col] = 'o';
        this.o += 1;
      }
      this.checkWinner();
      this.count += 1;
    }
  }

  playerVsIA(row, col) {
    this.turnX(row, col);
    if (!this.winner && !this.draw) {
      this.turnOfPlayerX = false;
      let obj;
      obj = this.numRandom();
      while (this.matrix[obj.row][obj.col]) {
        obj = this.numRandom();
      }
      this.matrix[obj.row][obj.col] = 'o';
      this.o += 1;
      this.count += 1;
      this.checkWinner();
      this.winner ? this.turnOfPlayerX = false : this.turnOfPlayerX = true;
    }
  }

  numRandom() {
    return {
      row: Math.floor(Math.random() * 3),
      col: Math.floor(Math.random() * 3)
    }
  }

  checkWinner() {
    // Check the Winner in the rows
    for (let i = 0, j = 0; i <= 2; i++) {
      if (this.matrix[i][j] && this.matrix[i][j] === this.matrix[i][j + 1] && this.matrix[i][j + 1] === this.matrix[i][j + 2]) {
        this.matrix[i][j] === 'x' ? this.setWinner('x') : this.setWinner('o');
      }
    }

    // Check the Winner in the columns
    for (let i = 0, j = 0; i <= 2; i++) {
      if (this.matrix[j][i] && this.matrix[j][i] === this.matrix[j + 1][i] && this.matrix[j + 1][i] === this.matrix[j + 2][i]) {
        this.matrix[j][i] === 'x' ? this.setWinner('x') : this.setWinner('o');
      }
    }

    // Check the Winner in the diagonals
    if (this.matrix[0][0] && this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
      this.matrix[0][0] === 'x' ? this.setWinner('x') : this.setWinner('o');
    } else if (this.matrix[0][2] && this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
      this.matrix[0][2] === 'x' ? this.setWinner('x') : this.setWinner('o');
    }

    // If draw, show a message
    if (this.x === 5 && !this.winner) {
      this.draw = true;
    }
  }

  setWinner(player: string) {
    console.log(`${player} ganó`);
    this.winner = player;
  }

  newGame() {
    this.makeMatrix(3, 3, 0);
    this.x = 0;
    this.count = 0;
    this.winner = null;
    this.draw = false;
    this.turnOfPlayerX = true;
  }

  back() {
    this.navCtrl.setRoot('StartPage');
  }

  ionViewWillEnter() {
    this.makeMatrix(3, 3, 0);
    this.players = this.navParams.get('players');
  }

}
