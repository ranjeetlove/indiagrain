import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TodayFollowUpPage } from '../pages/today-follow-up/today-follow-up';
import { FollowUpDetailsPage } from '../pages/follow-up-details/follow-up-details';
import { ClintPage } from '../pages/clint/clint';
import { SearchClientPage } from '../pages/search-client/search-client';
import { SendSmsPage } from '../pages/send-sms/send-sms';
import { ReportPage } from '../pages/report/report';
import { QuotationDetailsPage } from '../pages/quotation-details/quotation-details';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { OtpPage } from '../pages/otp/otp';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TodayFollowUpPage,
    FollowUpDetailsPage,
    ClintPage,
    SearchClientPage,
    SendSmsPage,
    ReportPage,
    QuotationDetailsPage,
    MyProfilePage,
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    OtpPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TodayFollowUpPage,
    FollowUpDetailsPage,
    ClintPage,
    SearchClientPage,
    SendSmsPage,
    ReportPage,
    QuotationDetailsPage,
    MyProfilePage,
    LoginPage,
    SignUpPage,
    ForgotPasswordPage,
    OtpPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}