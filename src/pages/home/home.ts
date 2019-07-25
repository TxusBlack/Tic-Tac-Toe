import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
  private hasWinner: boolean = false;

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  makeMatrix(rows, columns, el) {
    return Array(rows).fill(el).map(() => Array(columns).fill(el))
  }

  set(row, col) {
    console.log('row', row);
    console.log('col', col);
    if (this.x < 5 && !this.matrix[row][col] && !this.hasWinner) {
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

  checkWinner() {
    // Check the Winner in the rows
    for (let i = 0, j = 0; i <= 2; i++) {
      if (this.matrix[i][j] && this.matrix[i][j] === this.matrix[i][j + 1] && this.matrix[i][j + 1] === this.matrix[i][j + 2]) {
        this.matrix[i][j] === 'x' ? this.setWinner('x') : this.setWinner('o')
      }
    }

    // Check the Winner in the columns
    for (let i = 0, j = 0; i <= 2; i++) {
      if (this.matrix[j][i] && this.matrix[j][i] === this.matrix[j + 1][i] && this.matrix[j + 1][i] === this.matrix[j + 2][i]) {
        this.matrix[j][i] === 'x' ? this.setWinner('x') : this.setWinner('o')
      }
    }

    // Check the Winner in the diagonals
    if (this.matrix[0][0] && this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
      this.matrix[0][0] === 'x' ? this.setWinner('x') : this.setWinner('o')
    } else if (this.matrix[0][2] && this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
      this.matrix[0][2] === 'x' ? this.setWinner('x') : this.setWinner('o')
    }

    // If draw, show a message
    if (this.x === 5) {
      console.log('empate');
    }
  }

  setWinner(player) {
    console.log(`${player} ganó`);
    this.hasWinner = true;
  }

  newGame() {
    this.matrix = this.makeMatrix(3, 3, 0);
    this.x = 0;
    this.hasWinner = false;
  }

  ionViewWillEnter() {
    this.matrix = this.makeMatrix(3, 3, 0);
  }

}
