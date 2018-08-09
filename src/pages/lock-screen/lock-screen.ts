import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {

  buttons: any = [];
  passCode: string = '';
  keyPass: string;
  createNew: boolean = false;
  creating: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
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

    storage.ready().then(() => {
      storage.get('keyPass').then((val) => {
        console.log('val', val);
        
        if(val) {
          this.keyPass = val;
        } else {
          this.createNew = true;
        }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockScreenPage');
  }

  addCharacter(character) {
    if(this.passCode.length == 4) {
      return;
    }
    this.passCode += character.toString();

    if(this.passCode.length == 4) {
      //validate the password
      console.log(this.creating);
      if(this.creating) {
        this.storage.set('keyPass', this.passCode);
        this.go();
      } else if (this.keyPass === this.passCode) {
        this.go();
      } else {
        this.passCode = '';
      }
      //this.go();
    }
  }

  backspace() {
    this.passCode = this.passCode.slice(0, -1);
  }

  go() {
    this.navCtrl.setRoot('ListPage');
  }
}
