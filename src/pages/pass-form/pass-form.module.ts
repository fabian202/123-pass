import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassFormPage } from './pass-form';

@NgModule({
  declarations: [
    PassFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PassFormPage),
  ],
})
export class PassFormPageModule {}
