import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})

export class StartPage {

  public playBtn: string = 'delay-2s rubberBand';
  public body: string = 'fadeIn delay-1s';
  
  constructor(
    public navCtrl: NavController
  ) {
  }

  animateBtn() {
    const btnAnimated = 'rubberBand'
    // Remove delay-2s
    setTimeout(() => {;
      this.playBtn = btnAnimated;
    }, 3000);
    // Set Interval for 5s
    setInterval(() => {
      this.playBtn = '';
      setTimeout(() => {
        this.playBtn = btnAnimated;
      }, 1000);
    }, 5000);
  }

  goToPlay() {
    this.body = 'zoomOut'
    setTimeout(() => {
      this.navCtrl.setRoot('HomePage');
    }, 400)
  }

  ionViewDidLoad() {
    this.animateBtn();
  }

}
