import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FollowUpDetailsPage } from './follow-up-details';

@NgModule({
  declarations: [
    FollowUpDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FollowUpDetailsPage),
  ],
})
export class FollowUpDetailsPageModule {}
