import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { followupModel } from '../../providers/followup/followup.model';
import { FollowupProvider } from '../../providers/followup/followup';
/**
 * Generated class for the FollowUpDetailsPage page.
 */

@IonicPage()
@Component({
  selector: 'page-follow-up-details',
  templateUrl: 'follow-up-details.html',
})
export class FollowUpDetailsPage {
  
  followupdetails: followupModel;

  id: number;
  myid: any;
  followupdetailsitems: any = [0];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private followupProvider: FollowupProvider) {
    this.id = navParams.get('id');
    let id = { "id": this.id };
    this.myid = id;
    this.detailsData();
  }

  ionViewDidLoad() {
  // console.log(FollowUpDetailsPage); 
  }

  detailsData() {
   
    this.followupProvider.detailsData(this.myid, "followup_list").then((Result : string) => {
    //this.followupDetails = Result; 
    this.followupdetailsitems = this.followupProvider.followupmodel[0];
    //console.log(this.followupdetailsitems);
   }, (err) =>{
     }); 
   }
}
