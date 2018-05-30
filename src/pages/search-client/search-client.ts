import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientsearchProvider } from '../../providers/clientsearch/clientsearch';
//import { ClientDetailsPage } from '../client-details/client-details';

/**
 * Generated class for the SearchClientPage page.
 * serach client by search baar.
 */

@IonicPage()
@Component({
  selector: 'page-search-client',
  templateUrl: 'search-client.html',
})
export class SearchClientPage {

  clientData: any;
  todo = {"mobile": ""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private clientsearchProvider: ClientsearchProvider) {
    this.getClient();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchClientPage');
  }
  getClient(){
    this.clientsearchProvider.getClient(this.todo, "followup_list").then((result: string) => {
   // this.clientData = result; 
   // this.navCtrl.push(ClientDetailsPage);
      //console.log(this.clientData);
     }, (err) =>{
       }); 
     }
}
