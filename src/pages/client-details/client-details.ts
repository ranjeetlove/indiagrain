import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { clientModel } from '../../providers/clientsearch/clientdetails.model';

import { ClientsearchProvider } from '../../providers/clientsearch/clientsearch';
/**
 * Generated class for the ClientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-details',
  templateUrl: 'client-details.html',
})
export class ClientDetailsPage {
  clientdatalists: any =[];
  clientdata : clientModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, private clientsearchProvider: ClientsearchProvider) {
   this. getClient();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailsPage');
  }
  getClient()
  {
    this.clientdata = this.clientsearchProvider.clientmodel;
    //console.log(this.clientdata);
    this.clientdatalists = this.clientdata;
    //console.log(this.clientdatalists);
  }

}
