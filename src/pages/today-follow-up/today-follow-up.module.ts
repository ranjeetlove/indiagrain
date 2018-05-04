import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayFollowUpPage } from './today-follow-up';
import { FollowUpDetailsPage } from '../follow-up-details/follow-up-details';
@NgModule({
  declarations: [
    TodayFollowUpPage,
    FollowUpDetailsPage 
  ],
  imports: [
    IonicPageModule.forChild(TodayFollowUpPage),
  ],
})
export class TodayFollowUpPageModule {}
