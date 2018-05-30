import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { userModel, userModelResult } from '../../providers/auth-service/user.model';
import { EditProfilePage } from '../edit-profile/edit-profile';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  userData: userModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
    this.loginData();
  } 
  loginData() {
   this.userData = this.authServiceProvider.usermodel;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }
  editprofile(){
    this.navCtrl.push(EditProfilePage);
  }

}
