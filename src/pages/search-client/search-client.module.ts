import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchClientPage } from './search-client';

@NgModule({
  declarations: [
    SearchClientPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchClientPage),
  ],
})
export class SearchClientPageModule {}
