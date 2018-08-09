import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Subscription } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LockScreenPage';
  @ViewChild(Nav) nav: Nav;

  // private onPauseSubscription: Subscription;
  // private onResumeSubscription: Subscription;
  // private lockScreen: any;
  // private initializaed: boolean = false;
  // private isLocked: boolean = false;

  constructor(public platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.init();
      // statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  init() {
    // if(this.initializaed) {
    //   return;
    // }

    this.platform.pause.subscribe(() => {
      this.splashScreen.show();
      console.log('pause');
      // this.nav.setRoot('LockScreenPage');
    });

    this.platform.resume.subscribe(() => {
      console.log('resume');
      console.log('setting root');
      this.nav.setRoot('LockScreenPage');
      this.splashScreen.hide();
    });
  }
}

