import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {

  buttons: any = [];
  passCode: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var matrix = [];
    let init = 1;
    for(var i=0; i<3; i++) {
        matrix[i] = [];
        for(var j=0; j<3; j++) {
            matrix[i][j] = init;
            init++;
        }
    }

    this.buttons = matrix;

    console.table(this.buttons);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockScreenPage');
  }

  addCharacter(character) {
    if(this.passCode.length == 4) {
      return;
    }
    this.passCode += character.toString();
  }

  backspace() {
    this.passCode = this.passCode.slice(0, -1);
  }

}
