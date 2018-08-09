import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassFormPage } from './pass-form';
import { Clipboard } from '@ionic-native/clipboard';

@NgModule({
  declarations: [
    PassFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PassFormPage),
  ],
  providers: [
    Clipboard
  ]
})
export class PassFormPageModule {}
