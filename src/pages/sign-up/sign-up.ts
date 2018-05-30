import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { TodayFollowUpPage } from '../today-follow-up/today-follow-up';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
   
   signupform:FormGroup;
   fname:AbstractControl;
   lname:AbstractControl;
   password:AbstractControl;
   email:AbstractControl;
   usertype:AbstractControl;
   userid:AbstractControl;
   submitted: boolean = false;
   
   responseData : any;
   userData = {"fname":"", "lname":"","email":"", "userid":"", "pwd":"", "usertype":""}

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider, private alertCtrl: AlertController) {

    this.signupform = formBuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      usertype:['',Validators.required],
      userid:['',Validators.required]
     });
      this.fname = this.signupform.controls['fname'];
      this.lname = this.signupform.controls['lname'];
      this.password = this.signupform.controls['password'];
      this.email = this.signupform.controls['email'];
      this.usertype = this.signupform.controls['usertype'];
      this.userid = this.signupform.controls['userid'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
   homePage(){
    this.submitted = true;
    if (this.signupform.valid) {
        //console.log(this.signupform.value);
        this.authServiceProvider.postData(this.userData, "user_sign_up").then((result: string) => {
        this.responseData = result;
        //console.log(this.responseData);
       // localStorage.setItem('userData', JSON.stringify(this.responseData) );
        var uservalue = JSON.parse(result).status;
        if(uservalue == true){
              // alert("SignUp Successfully");
            let alert = this.alertCtrl.create({
              title: '',
              subTitle: 'SignUp Successfully',
              buttons: ['OK']
            });
            alert.present();
           this.navCtrl.setRoot(TodayFollowUpPage);
        }
        else{
          let alert = this.alertCtrl.create({
            title: '',
            subTitle: 'User is already exist',
            buttons: ['OK']
          });
          alert.present();
        }
      }, (err) =>{
       
      }); 
    }
   // this.navCtrl.setRoot(TodayFollowUpPage);
}
    loginPage(){
      this.navCtrl.push(LoginPage);
   }

}
