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

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  makeMatrix(rows, columns, el) {
    return Array(rows).fill(el).map(() => Array(columns).fill(el))
  }

  set(row, col) {
    if (this.x < 5 && !this.matrix[row][col]) {
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

  }

  newGame() {
    this.matrix = this.makeMatrix(3, 3, 0);
    this.x = 0;
  }

  ionViewWillEnter() {
    this.matrix = this.makeMatrix(3, 3, 0);
  }

}
