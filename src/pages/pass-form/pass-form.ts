import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  name: 'form'
})
@Component({
  selector: 'page-pass-form',
  templateUrl: 'pass-form.html',
})
export class PassFormPage {

  pass: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassFormPage');
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|@#¢ª!$%&/()=";
  
    for (var i = 0; i < 18; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      
    console.log(text);

    this.pass.password = text;
    
  }

}
