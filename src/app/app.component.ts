import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
 
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { TodayFollowUpPage } from '../pages/today-follow-up/today-follow-up';
// import { FollowUpDetailsPage } from '../pages/follow-up-details/follow-up-details';
import { ClintPage } from '../pages/clint/clint';
import { SearchClientPage } from '../pages/search-client/search-client';
import { SendSmsPage } from '../pages/send-sms/send-sms';
import { ReportPage } from '../pages/report/report';
// import { QuotationDetailsPage } from '../pages/quotation-details/quotation-details';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LoginPage } from '../pages/login/login';
// import { SignUpPage } from '../pages/sign-up/sign-up';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { OtpPage } from '../pages/otp/otp';
// import { ResetPasswordPage } from '../pages/reset-password/reset-password';
// import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// import { ClientDetailsPage } from '../pages/client-details/client-details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TodayFollowUpPage },
      { title: 'My Profile', component: MyProfilePage },
      { title: 'Client Enquiry', component: ClintPage },
      { title: 'Search Clients', component: SearchClientPage },
      { title: 'Today Follow Up', component: TodayFollowUpPage },
      { title: 'Report', component: ReportPage },
      { title: 'Email/Sms', component: SendSmsPage },
      { title: 'Setting', component: SearchClientPage },
      { title: 'Logout', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // , public statusBar: StatusBar
      //this.statusBar.styleDefault();
     // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
