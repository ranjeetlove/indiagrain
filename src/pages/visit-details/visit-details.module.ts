import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitDetailsPage } from './visit-details';

@NgModule({
  declarations: [
    VisitDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitDetailsPage),
  ],
})
export class VisitDetailsPageModule {}
