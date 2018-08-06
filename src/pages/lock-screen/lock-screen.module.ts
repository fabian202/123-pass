import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LockScreenPage } from './lock-screen';
import { TimesPipeModule } from '../../pipes/times/times.module';

@NgModule({
  declarations: [
    LockScreenPage,
  ],
  imports: [
    TimesPipeModule,
    IonicPageModule.forChild(LockScreenPage),
  ],
})
export class LockScreenPageModule {}
