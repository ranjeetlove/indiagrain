import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FollowUpDetailsPage } from '../follow-up-details/follow-up-details';

/**
 * Generated class for the TodayFollowUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today-follow-up',
  templateUrl: 'today-follow-up.html',
})
export class TodayFollowUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayFollowUpPage');
  }
   nextPage(){
      this.navCtrl.push(FollowUpDetailsPage);
   }

}
