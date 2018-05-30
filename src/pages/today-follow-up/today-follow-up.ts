import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FollowUpDetailsPage } from '../follow-up-details/follow-up-details';
import { FollowupProvider } from '../../providers/followup/followup';
import { userModel, userModelResult } from '../../providers/auth-service/user.model';
import { followupModel, followupModelResult } from '../../providers/followup/followup.model';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 

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


  todayfollowitems: any = [];
  userData: userModel;
  followupData: followupModel;
  getData = {"followby":"aparnadutta1", "today_followup":"2018-02-01"};
  responseData: any;

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private followupProvider: FollowupProvider, 
    public authServiceProvider: AuthServiceProvider
  ) {
    this.loginData();
    this.todayData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayFollowUpPage');
  }
   nextPage(id){
     this.navCtrl.push(FollowUpDetailsPage, {id: id});
   }

  loginData() {
     this.userData = this.authServiceProvider.usermodel;
    // console.log(this.userData.userid);
  }
  todayData() {
     this.followupProvider.todayData(this.getData, "followup_list").then((result: string) => {
     this.followupData = this.followupProvider.followupmodel;
     this.todayfollowitems = this.followupData; 
    // console.log(this.followupData[0].id);
    }, (err) =>{
      }); 
    }

}
