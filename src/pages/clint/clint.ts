import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotationDetailsPage } from '../quotation-details/quotation-details';

/**
 * Generated class for the ClintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clint',
  templateUrl: 'clint.html',
})
export class ClintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClintPage');
  }
   
  quotationdetails(){
      this.navCtrl.push(QuotationDetailsPage);
   } 
   
}
