import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClintPage } from './clint';

@NgModule({
  declarations: [
    ClintPage,
  ],
  imports: [
    IonicPageModule.forChild(ClintPage),
  ],
})
export class ClintPageModule {}
