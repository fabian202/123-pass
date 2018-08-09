import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'form'
})
@Component({
  selector: 'page-pass-form',
  templateUrl: 'pass-form.html',
})
export class PassFormPage {

  pass: any = {};
  saving: boolean = false;
  item: any = null;
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public clipBoard: Clipboard, 
    public toastCtrl: ToastController,
    public storage: Storage) {

      this.item = this.navParams.get('item');

      if(this.item) {
        this.pass = this.item;
      }
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassFormPage');
  }

  makeid() {
    let text = "";
    // let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|@#¢ª!$%&/()=";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "|@#¢ª!$%&/()=Ç*+-_¬"
  
    // for (let i = 0; i < 18; i++) {
    //   text += possible.charAt(Math.floor(Math.random() * possible.length));
    // }

    for (let u = 0; u < 4; u++) {
      text += upper.charAt(Math.floor(Math.random() * upper.length));
      text += lower.charAt(Math.floor(Math.random() * lower.length));
      text += numbers.charAt(Math.floor(Math.random() * numbers.length));
      text += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    let shuffled = text.split('').sort(function(){return 0.5-Math.random()}).join('');
      
    console.log(text);

    this.pass.password = shuffled;
    
  }

  copy() {
    const toast = this.toastCtrl.create({
      message: 'Copiado al portapapeles',
      duration: 3000
    });
    this.clipBoard.copy(this.pass.password).then((()=> {
      toast.present();
    }));
  }


  store() {
    if(this.saving) {
      return;
    }

    this.saving = true;
    const toast = this.toastCtrl.create({
      message: 'Guardaro con éxito',
      duration: 3000
    });

    this.pass._id = '';
    for (let i = 0; i < 64; i++) {
      this.pass._id += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }

    this.storage.get('passwords').then(val => {
      let toStore = [];
      if(val) {
        val.push(this.pass);
        toStore = val;
      } else {
        toStore.push(this.pass);
      }

      return toStore;

      // this.storage.set('passwords', toStore).then
    }).then(toStore => {
      this.storage.set('passwords', toStore).then(() => {
        toast.present();
        setTimeout(() => {
          this.navCtrl.setRoot('ListPage', {}, { animate: true, direction: 'back'});         
        }, 1000);
      });
    });
  }

}