import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientDetailsPage } from './client-details';

@NgModule({
  declarations: [
    ClientDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientDetailsPage),
  ],
})
export class ClientDetailsPageModule {}
