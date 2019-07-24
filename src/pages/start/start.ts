import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})

export class StartPage {

  @ViewChildren('playBtn', { read: ElementRef }) playBtn: QueryList<ElementRef>;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  animateBtn() {
    this.playBtn.map(el => {
      // Remove delay
      setTimeout(() => {
        el.nativeElement.classList.remove('delay-2s');
      }, 3000);
      // Set Interval for 5s
      setInterval(() => {
        el.nativeElement.classList.remove('rubberBand');
        setTimeout(() => {
          el.nativeElement.classList.add('rubberBand');
        }, 1000);
      }, 5000);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage', this.playBtn);
    this.animateBtn();
  }

}
