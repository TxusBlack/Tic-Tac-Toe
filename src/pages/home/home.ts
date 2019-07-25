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
  public y: number = 0;

  public titleAnimated: string = '';

  constructor(
    public navCtrl: NavController
  ) {
    
  }

  makeMatrix(rows, columns, el) {
    return Array(rows).fill(el).map(() => Array(columns).fill(el))
  }

  ionViewWillEnter() {
    this.matrix = this.makeMatrix(3, 3, 0);
    this.titleAnimated = 'fadeIn';
  }

}
